'use client'

import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import { database } from '../../../../firebase'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';

const dbInstance = collection(database, 'posts');

function Post(props: any) {

    const postId = props.params.id
    console.log(postId)

    const fetchPost = async () => {
        try {
            // const post = await doc(query(dbInstance, where('_id', "==", postId)))
            const post = await getDoc(doc(dbInstance,postId))
            console.log(post.data())
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        fetchPost()
    },[])

    return (
        <div>
            {/* <div key={index} className='p-4 border b-2 rounded-lg shadow-xl m-4  bg-white sm:w-full sm:my-2 sm:mx-0 md:w-full lg:mx-1  xl:mx-1'>
                            <div>
                                {item.type === 'question' ?
                                    <h3 className='text-2xl'>{item.question?.length>50 ? item.question.substring(0, 50) + '...' : item.question }</h3>
                                        : item.type === 'suggestion' ? 
                                            <h3 className='text-2xl'>{item.suggestion.substring(0, 50)}</h3> 
                                                : null
                                }
                                <div className='flex flex-row mb-4 text-[#A8A29E]'>
                                    <p className='text-xs'>{item.country}</p>
                                    <span className='h-[7px] w-[7px] bg-[#78716C] mx-2 self-center rounded-full'/>
                                    <p className='text-xs'>{item.city}</p>
                                    <span className='h-[7px] w-[7px] bg-[#78716C] mx-2 self-center rounded-full'/>
                                    <p className='text-xs'>{item.area}</p>
                                </div>
                                <div className='flex flex-row '>
                                    {item.tags?.length >0 && item.tags?.map((tag: string, index: number)=>{
                                        return (
                                            <>
                                                <p key={index} className='p-1 text-xs border rounded bg-[#78716C] text-white'>{'#'+tag}</p><span> &nbsp;</span>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className='flex flex-row my-4 flex-wrap'>
                                    <div className='flex flex-row m-2 px-2 text-white font-bold py-1 text-xs bg-[#7DD3FC] shadow-lg rounded-full'>
                                    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9 4.5C15.9 3 14.418 2 13.26 2c-.806 0-.869.612-.993 1.82-.055.53-.121 1.174-.267 1.93-.386 2.002-1.72 4.56-2.996 5.325V17C9 19.25 9.75 20 13 20h3.773c2.176 0 2.703-1.433 2.899-1.964l.013-.036c.114-.306.358-.547.638-.82.31-.306.664-.653.927-1.18.311-.623.27-1.177.233-1.67-.023-.299-.044-.575.017-.83.064-.27.146-.475.225-.671.143-.356.275-.686.275-1.329 0-1.5-.748-2.498-2.315-2.498H15.5S15.9 6 15.9 4.5zM5.5 10A1.5 1.5 0 0 0 4 11.5v7a1.5 1.5 0 0 0 3 0v-7A1.5 1.5 0 0 0 5.5 10z" fill="#ffffff"></path></g></svg>
                                        <p className='px-1 cursor-pointer'>Likes</p>
                                        <p className='px-1'>{item.likes}</p>
                                    </div>
                                    <div className='flex flex-row m-2 px-2 text-white font-bold py-1 text-xs bg-[#7DD3FC] shadow-lg rounded-full'>
                                    <svg width="15px" height="15px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" stroke-width="6.4"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M32 8c8.1 6.77 17.39 6.35 20.05 6.35C51.46 52.84 47 45.21 32 56c-15-10.79-19.45-3.16-20-41.65 2.59 0 11.88.42 20-6.35z"></path></g></svg>
                                        <p className='px-1 cursor-pointer'>Credibility</p>
                                        <p className='px-1'>{item.credibility}</p>
                                    </div>
                                    <div onClick={()=>handleSelectComment('comment', item)} className={`flex flex-row m-2 px-2 text-white font-bold py-1 text-xs ${item.id === selectedOption.comment.id && selectedOption.comment.isOpen ? 'bg-[#60A5FA]' : 'bg-[#7DD3FC]' } shadow-lg rounded-full`}>
                                    <svg fill="#ffff" width="15px" height="15px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>comment</title> <path d="M2.5 5.438h17.406c1.375 0 2.5 1.125 2.5 2.5v10.563c0 1.375-1.125 2.5-2.5 2.5h-3.313l0.156 4.281c0 1.031-0.563 1.281-1.313 0.563l-4.906-4.844h-8.031c-1.375 0-2.5-1.125-2.5-2.5v-10.563c0-1.375 1.125-2.5 2.5-2.5z"></path> </g></svg>
                                        <p className='px-1 cursor-pointer'>Comments</p>
                                        <p className='px-1'>{item.comments.length}</p>
                                    </div>
                                    <div className='flex flex-row m-2 px-2 text-white font-bold py-1 text-xs bg-[#7DD3FC] shadow-lg rounded-full'>
                                    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 3C15 2.44772 15.4477 2 16 2C19.3137 2 22 4.68629 22 8V16C22 19.3137 19.3137 22 16 22H8C4.68629 22 2 19.3137 2 16C2 15.4477 2.44772 15 3 15C3.55228 15 4 15.4477 4 16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4C15.4477 4 15 3.55228 15 3Z" fill="#ffffff"></path> <path d="M3.70663 12.7845L3.16104 12.2746L3.70664 12.7845C4.09784 12.3659 4.62287 11.8265 5.17057 11.3274C5.72852 10.8191 6.26942 10.3905 6.69641 10.1599C7.06268 9.96208 7.75042 9.84035 8.40045 9.84848C8.62464 9.85128 8.81365 9.86944 8.9559 9.89472C8.96038 10.5499 8.95447 11.7469 8.95145 12.2627C8.94709 13.0099 9.83876 13.398 10.3829 12.8878L14.9391 8.61636C15.2845 8.2926 15.2988 7.74908 14.971 7.4076L10.4132 2.65991C9.88293 2.10757 8.95 2.48291 8.95 3.24856V5.16793C8.5431 5.13738 8.0261 5.11437 7.47937 5.13009C6.5313 5.15734 5.30943 5.30257 4.4722 5.88397C4.36796 5.95636 4.26827 6.03539 4.17359 6.11781C2.49277 7.58092 2.11567 9.90795 1.8924 11.7685L1.87242 11.935C1.74795 12.9722 3.02541 13.5134 3.70663 12.7845ZM9.35701 11.7935L9.70204 12.1615L9.35701 11.7935C9.35715 11.7934 9.35729 11.7932 9.35744 11.7931L9.35701 11.7935Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                                        <p className='px-1 cursor-pointer'>Share</p>
                                        <p className='px-1'>{item.shares}</p>
                                    </div>
                                </div>
                            </div>
                            {item.id === selectedOption.comment.id && selectedOption.comment.isOpen &&
                            <>
                                <div className='border p-1 bg-[#F5F5F5] rounded-lg'>
                                    <textarea onChange={(e)=>handleChangeCommenttext(e ,'comment')} value={textOnComment.text} className='px-2 border w-full rounded-lg placeholder:text-sm placeholder:px-2 focus-within:border-blue-100' placeholder='comment..' />
                                </div>
                                <div className='my-2 flex flex-row w-fit'>
                                    <p onClick={()=>handleSubmitComment(item, 'anonymous', 'single', index)} className='text-xs mr-2 px-2 text-white cursor-pointer font-bold py-1 bg-[#7DD3FC] shadow-lg rounded-full'>Post Anonymous</p>
                                    <p onClick={()=>handleSubmitComment(item, 'user', 'single', index)} className='text-xs px-2 text-white cursor-pointer font-bold py-1 bg-[#7DD3FC] shadow-lg rounded-full'>Post</p>
                                </div>
                            </>
                            }
                                {item.comments.length > 0 && <div className='overflow-scroll h-96'>
                                            {item.comments.map((comment:{
                                                isAnonymous: boolean, credibility: number,
                                                text: string, nested: []
                                            }, index: number)=>{
                                                return (
                                                    <div key={index} className='border border-[#F5F5F4] p-2 my-3'>
                                                        <div className='flex flex-row flex-wrap'>
                                                            <Image alt='' src={ProfilPic} width={20} height={20} className='h-[20px] w-[20px] shadow-lg rounded-full border mx-2'/>
                                                            <span className='text-sm'>{comment.isAnonymous ? 'Anonymous' : 'User'}</span>
                                                        </div>
                                                        <p className='text-xs my-2 ml-9 bg-[#F5F5F5] py-2 px-2 shadow-sm rounded-lg'>{comment.text}</p>
                                                        <div className='flex flex-row text-[0.6rem] my-2 ml-9 w-fit font-bold text-white bg-[#7DD3FC] p-1 shadow-sm rounded-lg'>
                                                        <svg width="15px" height="15px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" stroke-width="6.4"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M32 8c8.1 6.77 17.39 6.35 20.05 6.35C51.46 52.84 47 45.21 32 56c-15-10.79-19.45-3.16-20-41.65 2.59 0 11.88.42 20-6.35z"></path></g></svg>
                                                        <p className='px-1'>Credibility  &nbsp;{comment.credibility}</p>
                                                        </div>
                                                    
                                                        {comment.nested.length > 0 && comment.nested.map((nestedComment:any, index_)=>{
                                                            return(
                                                                <div key={index_} className='  p-2 my-3 ml-9'>
                                                                    <div className='flex flex-row flex-wrap'>
                                                                        <Image alt='' src={ProfilPic} width={20} height={20} className='h-[20px] w-[20px] shadow-lg rounded-full border mx-2'/>
                                                                        <span className='text-xs'>{nestedComment.isAnonymous ? 'Anonymous' : 'User'}</span>
                                                                    </div>
                                                                    <p className='text-xs my-2 ml-9 bg-[#F5F5F5] py-2 px-2 shadow-sm rounded-lg'>{nestedComment.text}</p>
                                                                    <div className='flex flex-row  my-2 ml-9 w-fit font-bold text-white bg-[#7DD3FC] p-1 shadow-sm rounded-lg'>
                                                                    <svg width="15px" height="15px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" stroke-width="6.4"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M32 8c8.1 6.77 17.39 6.35 20.05 6.35C51.46 52.84 47 45.21 32 56c-15-10.79-19.45-3.16-20-41.65 2.59 0 11.88.42 20-6.35z"></path></g></svg>
                                                                        <p className='text-[0.6rem] px-2'>Credibility  &nbsp;{nestedComment.credibility}</p>
                                                                    </div>
                                                                
                                                                </div>
                                                            )
                                                        })}
                                                        {item.id === selectedOption.nestedComment.id && selectedOption.nestedComment.isOpen &&
                                                            <div className='border ml-9 p-1 bg-[#F5F5F5] rounded-lg'>
                                                                <textarea onChange={(e)=>handleChangeCommenttext(e,'nested_comment')} className='px-2 border w-full rounded-lg placeholder:text-sm placeholder:px-2 focus-within:border-blue-100' value={textOnComment.nestedText} placeholder='comment..' />
                                                            </div>}
                                                            <div className='my-2 ml-9 flex flex-row w-fit'>
                                                                <p onClick={()=>handleSelectComment('nested', item,)} className={`text-xs px-2 text-white cursor-pointer mr-2 font-bold py-1 ${item.id === selectedOption.nestedComment.id && selectedOption.nestedComment.isOpen ? 'bg-[#60A5FA]' : 'bg-[#7DD3FC]' }  shadow-lg rounded-full`}>Reply</p>
                                                                {item.id === selectedOption.nestedComment.id && selectedOption.nestedComment.isOpen && <> <p className='text-xs mr-2 px-2 text-white cursor-pointer font-bold py-1 bg-[#7DD3FC] shadow-lg rounded-full' onClick={()=>handleSubmitComment(item,'anonymous','nested', index)}>Post Anonymous</p>
                                                                <p className='text-xs px-2 text-white cursor-pointer font-bold py-1 bg-[#7DD3FC] shadow-lg rounded-full' onClick={()=>handleSubmitComment(item,'anonymous', 'nested', index)}>Post</p></>}
                                                            </div>
                                                    </div>
                                                )
                                            })}
                                        </div>}
            </div> */}
        </div>
    );
}

Post.getInitialProps = async (context: { query: any; req: any; res: any; }) => {
    const { query, req, res } = context;
    const router = useRouter(); // Incorrect, don't use useRouter here
  console.log(router.query)
    // Use query, req, and res as needed
    // ...
  
    return { params:router.query };
  };

export default Post;