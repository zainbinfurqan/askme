import React from 'react';
import data from '../../../data.json'
import Image from 'next/image'
import ProfilPic from '../../../assets/images/profile-pic.png'

function Browse(props:any) {
    return (
        <div className='p-4'>
            <div className='flex flex-row flex-wrap justify-center'>
                {data.browse.map(item=>{
                    return(
                        <div className='p-4 border b-2 rounded-lg shadow-xl m-4 w-[47%] bg-white sm:w-full sm:my-2 sm:mx-0 md:w-full lg:w-[47%] lg:mx-1 xl:w-[31%] xl:mx-1'>
                            {item.type === 'question' ?
                                <h3 className='text-2xl'>{item.question}</h3>
                                    : item.type === 'suggestion' ? 
                                        <h3 className='text-2xl'>{item.suggestion}</h3> 
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
                                {item.tags?.length >0 && item.tags?.map((tag,index)=>{
                                    return (
                                        <>
                                            <p className='p-1 text-xs border rounded bg-[#78716C] text-white'>{'#'+tag}</p><span> &nbsp;</span>
                                        </>
                                    )
                                })}
                            </div>
                            <div className='flex flex-row my-4 flex-wrap'>
                                <div className='flex flex-row m-2 px-2 text-white font-bold py-1 text-xs bg-[#7DD3FC] shadow-lg rounded-full'>
                                    <p className='px-1 cursor-pointer'>Likes</p>
                                    <p className='px-1'>{item.likes}</p>
                                </div>
                                <div className='flex flex-row m-2 px-2 text-white font-bold py-1 text-xs bg-[#7DD3FC] shadow-lg rounded-full'>
                                    <p className='px-1 cursor-pointer'>Credibility</p>
                                    <p className='px-1'>{item.credibility}</p>
                                </div>
                                <div className='flex flex-row m-2 px-2 text-white font-bold py-1 text-xs bg-[#7DD3FC] shadow-lg rounded-full'>
                                    <p className='px-1 cursor-pointer'>Comments</p>
                                    <p className='px-1'>{item.comments.length}</p>
                                </div>
                                <div className='flex flex-row m-2 px-2 text-white font-bold py-1 text-xs bg-[#7DD3FC] rounded-full'>
                                    <p className='px-1 cursor-pointer'>Share</p>
                                    <p className='px-1'>{item.shares}</p>
                                </div>
                            </div>
                            {item.comments.length > 0 && <div>
                                        {item.comments.map(comment=>{
                                            return (
                                                <div className='border border-[#F5F5F4] p-2 my-3'>
                                                    <div className='flex flex-row flex-wrap'>
                                                        <Image alt='' src={ProfilPic} width={20} height={20} className='h-[20px] w-[20px] shadow-lg rounded-full border mx-2'/>
                                                        <span className='text-sm'>{comment.isAnonymous ? 'Anonymous' : 'User'}</span>
                                                    </div>
                                                    <p className='text-xs my-2 ml-9 bg-[#F5F5F5] py-2 px-2 shadow-sm rounded-lg'>{comment.text}</p>
                                                    {comment.nested.map(nestedComment=>{
                                                        return(
                                                            <div className='  p-2 my-3 ml-9'>
                                                                <div className='flex flex-row flex-wrap'>
                                                                    <Image alt='' src={ProfilPic} width={20} height={20} className='h-[20px] w-[20px] shadow-lg rounded-full border mx-2'/>
                                                                    <span className='text-sm'>{nestedComment.isAnonymous ? 'Anonymous' : 'User'}</span>
                                                                </div>
                                                                <p className='text-xs my-2 ml-9 bg-[#F5F5F5] py-2 px-2 shadow-sm rounded-lg'>{nestedComment.text}</p>
                                                            </div>
                                                        )
                                                    })}
                                                    <div className='border ml-9 p-1 bg-[#F5F5F5] rounded-lg'>
                                                        <textarea className='border w-full rounded-lg placeholder:text-sm placeholder:px-2 focus-within:border-blue-100' value='' placeholder='comment..' />
                                                    </div>
                                                    <div className='my-2 ml-9 w-fit'>
                                                        <p className='text-xs px-2 text-white cursor-pointer font-bold py-1 bg-[#7DD3FC] shadow-lg rounded-full'>Reply</p>
                                                    </div>
                                                    <div className='my-2 ml-9 flex flex-row w-fit'>
                                                        <p className='text-xs mr-2 px-2 text-white cursor-pointer font-bold py-1 bg-[#7DD3FC] shadow-lg rounded-full'>Post Anonymous</p>
                                                        <p className='text-xs px-2 text-white cursor-pointer font-bold py-1 bg-[#7DD3FC] shadow-lg rounded-full'>Post</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        <p className='text-sm px-2 m-auto text-white w-fit cursor-pointer font-bold py-1 bg-[#7DD3FC] shadow-lg rounded-full'>Load More...</p>
                                    </div>}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Browse;