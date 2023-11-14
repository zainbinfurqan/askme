'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import ProfilPic from '../../../assets/images/profile-pic.png'
import { collection, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import {database} from '../../../firebase'
import Link from 'next/link'

const dbInstance = collection(database, 'posts');

function Browse(props:any) {
    const [posts, setData] =useState([])
    const [selectedOption, setSelectedOption] = useState({
        comment: {id:'', isOpen: false, index: null},
        nestedComment: {id: '', isOpen: false, index: null}
    })
    const [textOnComment, setTextOnComment] = useState({
        id: selectedOption.comment.id, text: '',
         nestedText:''
    })
    const [sort, setSort] = useState({
        isOpen: false,
        sort:'',
    })
    const [selecteOption, setSelectOption] = useState({
        isOpen: false,
        selected:{}
    })
    const [selectCountry] = useState({
            Pakistan : { karachi: { "title": "nazimabad" }},
            India : { karachi: { "title": "nazimabad"}},
            Australia : { karachi: { "title": "nazimabad" } },
            USA : { karachi: {  "title": "nazimabad"} },
            Malaysia : {karachi: { "title": "nazimabad"} },
            Japan : { karachi: { "title": "nazimabad" }}
    })

    useEffect(()=>{
        getData()
    },[])

    const getData =  async() => {
        const data = await getDocs(dbInstance)
        const newData: any = []
        data.forEach((doc) => {
            newData.push({...doc.data(), id: doc.id})
          });
        setData(newData)
    }

    const handleSelectComment = (flag: any, item: any, index: any) => {
        if(flag === 'comment') {
            setSelectedOption({...selectedOption, comment: {id: item.id, index, isOpen: index === selectedOption.comment.index ? !selectedOption.comment.isOpen : true}})
        }
        if(flag === 'nested') {
            
            setSelectedOption({...selectedOption, nestedComment: {id: item.id, index, isOpen: index === selectedOption.nestedComment.index ? !selectedOption.nestedComment.isOpen : true}})
        }
        setTextOnComment({id:'', text:'', nestedText:''})
    }

    const handleChangeCommenttext = (e: React.ChangeEvent<HTMLTextAreaElement>, flag: string) => {
        if(flag === 'comment') {
            setTextOnComment({
                ...textOnComment, text: e.target.value
            })
        }
        if(flag === 'nested_comment') {
            setTextOnComment({
                ...textOnComment, nestedText: e.target.value
            })
        }
    }

    // will be shift to server actions
    const handleSubmitComment = async (data: {id: string, comments:[]}, flag: string, floor: string, index: number) => {
        try {
            if(floor === 'single') {
                 updateDoc(doc(database, "posts", data.id), {
                    comments: [...data.comments, {id: 'asss', isAnonymous: flag === 'anonymous' ? true : flag === 'user' ? false : true,  text: textOnComment.text, nested: []}],
                    credibility: 0
                }).then(succ =>{ 
                    setSelectedOption({
                        comment:{id:'', isOpen: false},
                        nestedComment:{id:'', isOpen: false},
                    })
                    console.log("succ,",succ)}).catch(err=>{console.log(err)})
            }
            if(floor === 'nested') {
                data.comments[index].nested.push({id: 'asss', isAnonymous: flag === 'anonymous' ? true : flag === 'user' ? false : true, text: textOnComment.nestedText})
                updateDoc(doc(database, "posts", data.id), data).then(succ =>{
                    setSelectedOption({
                        comment:{id:'', isOpen: false},
                        nestedComment:{id:'', isOpen: false},
                    })
                    console.log("succ,",succ)}).catch(err=>{console.log(err)})
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleOpenCountrySelect = () => {
        setSelectOption({...selecteOption, isOpen: !selecteOption.isOpen})
    }

    const handleOpenSort = () => {
        setSort({...sort, isOpen: !sort.isOpen})
    }

    const givePostLike = async (like: any, post: any, userId: any) => {
        try {
                like &&  await updateDoc(doc(database, 'posts', post.id), {likesCount: ++post.likesCount, likes: [...post.likes, userId]})
                if(!like) {
                    const newLikes = post.likes.filter((item: any) => item !== userId)
                    await updateDoc(doc(database, 'posts', post.id), {likesCount: --post.likesCount, likes: newLikes})
                }
          
        } catch (error) {
            console.log(error)
        }
    }

    const givePostCredibility = async (credibility: any,  post: any, userId: any) => {
        try {
            credibility &&  await updateDoc(doc(database, 'posts', post.id), {credibilityCount: ++post.credibilityCount, credibility: [...post.credibility, userId]})
            if(!credibility) {
                const newCredibility = post.credibility.filter((item: any) => item !== userId)
                await updateDoc(doc(database, 'posts', post.id), {credibilityCount: --post.credibilityCount, credibility: newCredibility})
            }
      
    } catch (error) {
        console.log(error)
    }
    }

    return (
        <div className=''>
            <div className=' mb-8'>
            <nav
                className="relative h-14 flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
                data-te-navbar-ref>
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                <div
                    className=" grow basis-[100%] items-center lg:!flex lg:basis-auto"
                    id="navbarSupportedContentY"
                    data-te-collapse-item>
                    <ul
                    className="mr-auto flex flex-row lg:flex-row items-center"
                    data-te-navbar-nav-ref>
                    <li className=" px-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                        <a
                        className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                        href="#!"
                        data-te-nav-link-ref
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        >Home</a>
                    </li>
                    <li className="px-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                        <a
                        className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                        href="#!"
                        data-te-nav-link-ref
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        >Profile</a>
                    </li>
                    <li className=" px-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                    <Link href="/feedback"> <p
                        className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                        >FeedBack</p> </Link>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
            </div>
            <div className='flex flex-col justify-center'>
                <div className=' flex flex-row m-auto w-[43rem]'>
                    <input className='w-full h-10 rounded-lg placeholder:px-2 px-2 mx-2' placeholder='Search...' />
                    <div className='text-sm p-2  text-white w-fit cursor-pointer font-bold py-1 bg-[#7DD3FC] shadow-lg rounded-lg'>
                        <svg width="35px" height="35px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M7.30524 15.7137C6.4404 14.8306 5.85381 13.7131 5.61824 12.4997C5.38072 11.2829 5.50269 10.0233 5.96924 8.87469C6.43181 7.73253 7.22153 6.75251 8.23924 6.05769C10.3041 4.64744 13.0224 4.64744 15.0872 6.05769C16.105 6.75251 16.8947 7.73253 17.3572 8.87469C17.8238 10.0233 17.9458 11.2829 17.7082 12.4997C17.4727 13.7131 16.8861 14.8306 16.0212 15.7137C14.8759 16.889 13.3044 17.5519 11.6632 17.5519C10.0221 17.5519 8.45059 16.889 7.30524 15.7137V15.7137Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11.6702 7.20292C11.2583 7.24656 10.9598 7.61586 11.0034 8.02777C11.0471 8.43968 11.4164 8.73821 11.8283 8.69457L11.6702 7.20292ZM13.5216 9.69213C13.6831 10.0736 14.1232 10.2519 14.5047 10.0904C14.8861 9.92892 15.0644 9.4888 14.9029 9.10736L13.5216 9.69213ZM16.6421 15.0869C16.349 14.7943 15.8741 14.7947 15.5815 15.0879C15.2888 15.381 15.2893 15.8559 15.5824 16.1485L16.6421 15.0869ZM18.9704 19.5305C19.2636 19.8232 19.7384 19.8228 20.0311 19.5296C20.3237 19.2364 20.3233 18.7616 20.0301 18.4689L18.9704 19.5305ZM11.8283 8.69457C12.5508 8.61801 13.2384 9.02306 13.5216 9.69213L14.9029 9.10736C14.3622 7.83005 13.0496 7.05676 11.6702 7.20292L11.8283 8.69457ZM15.5824 16.1485L18.9704 19.5305L20.0301 18.4689L16.6421 15.0869L15.5824 16.1485Z" fill="#000000"></path> </g></svg>
                    </div>
                </div>
                <div className='py-2 px-4 flex flex-row justify-between m-auto w-[43rem]'>
                    <div className='flex flex-row'>
                        <div onClick={handleOpenCountrySelect} className='border px-4 bg-white  w-40 rounded-ss rounded-se'><p className='text-sm py-2'>Select Country</p></div>
                        {selecteOption.isOpen && <div className='mt-10 border px-4 bg-white absolute h-48 overflow-scroll w-40 rounded-es rounded-ee'>
                            {Object.keys(selectCountry).map((item,index)=>{
                                return (
                                    <p key={index} className='py-2 cursor-pointer'>{item}</p>
                                )
                            })}
                        </div>}
                        <div className='flex flex-row mx-2' onClick={handleOpenSort}>
                        <div className='border px-4 bg-white h-fit items-center rounded-ss rounded-se flex flex-row'>
                            <p className='text-sm py-2 mr-1'>Sort</p>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 8H13" stroke="#7DD3FC" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M6 13H13" stroke="#7DD3FC" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M8 18H13" stroke="#7DD3FC" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M17 20V4L20 8" stroke="#7DD3FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </div>
                        {sort.isOpen&&<div className='border px-4 absolute ml-[5.6rem] bg-white overflow-scroll w-40 rounded-es rounded-ee py-4'>
                            <p className='text-sm font-bold'>Credibility</p>
                            <div className='flex  items-center justify-center flex-row'>
                                <div className='flex flex-row m-2 px-2 text-white font-bold py-1 text-xs bg-[#7DD3FC] rounded-lg'>
                                    <p>High</p>
                                </div>
                                <div><p>to</p></div>
                                <div className='flex flex-row m-2 px-2 text-white font-bold py-1 text-xs bg-[#7DD3FC] rounded-lg'>
                                        <p>Low</p>
                                </div>
                            </div>
                            <div className='flex  items-center justify-center flex-row'>
                                <div className='flex flex-row m-2 px-2 text-white font-bold py-1 text-xs bg-[#7DD3FC] rounded-lg'>
                                    <p>Low</p>
                                </div>
                                <div><p>to</p></div>
                                <div className='flex flex-row m-2 px-2 text-white font-bold py-1 text-xs bg-[#7DD3FC] rounded-lg'>
                                    <p>High</p>
                                </div>
                            </div>
                        </div>}
                    </div>
                    </div>
                    <div className='self-center'>
                        <p className={`text-md px-2 text-white bg-[#7DD3FC] cursor-pointer font-bold py-1 shadow-lg rounded-lg`}>
                            <Link href="/createpost">Create post</Link>
                        </p>
                    </div>
                  
                </div>
                
                <div className={`flex-col flex-wrap xl:w-[43rem] lg:w-[43rem] m-auto justify-center ${posts.length === 0 && 'w-1/2'} ${posts.length > 0 && 'flex'}`}>
                {posts.length> 0 && posts.map((item: any, index)=>{
                    return(
                        <div key={index} className='p-4 border b-2 rounded-lg shadow-xl m-4  bg-white sm:w-full sm:my-2 sm:mx-0 md:w-full lg:mx-1  xl:mx-1'>
                        <div>
                            <Link
                            href={{
                                pathname: `/browse/${item.id}`,
                                query: { index } 
                            }}
                            >
                            {item.type === 'question' ?
                                <p className='text-lg'>{item.question}</p>
                                    : item.type === 'suggestion' ? 
                                        <p className='text-lg'>{item.suggestion}</p> 
                                            : null
                            }
                            {/* {item.type === 'question' ?
                                <p className='text-lg'>{item.question?.length>50 ? item.question.substring(0, 50) + '...' : item.question }</p>
                                    : item.type === 'suggestion' ? 
                                        <p className='text-lg'>{item.suggestion.substring(0, 50)}</p> 
                                            : null
                            } */}
                            </Link>
                            <div className='flex flex-row mb-4 text-[#A8A29E]'>
                                <p className='text-xs'>{item.country}</p>
                                <span className='h-[7px] w-[7px] bg-[#78716C] mx-2 self-center rounded-lg'/>
                                <p className='text-xs'>{item.city}</p>
                                <span className='h-[7px] w-[7px] bg-[#78716C] mx-2 self-center rounded-lg'/>
                                <p className='text-xs'>{item.area}</p>
                            </div>
                            <div className='flex flex-row '>
                                {item.tags?.length >0 && item.tags?.map((tag: string, index: number)=>{
                                    return (
                                        <div key={index}>
                                            <p  className='p-1 text-xs border rounded bg-[#78716C] text-white'>{'#'+tag}</p><span> &nbsp;</span>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='flex flex-row my-4 flex-wrap'>
                                <div className='flex flex-row m-2 px-2 text-white font-bold py-1 text-xs bg-[#7DD3FC] shadow-lg rounded-lg' 
                                    onClick={()=>givePostLike(false,item,'KU2r0kYPoaaiMsjEU7Ty')}>
                                    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M15.9 4.5C15.9 3 14.418 2 13.26 2c-.806 0-.869.612-.993 1.82-.055.53-.121 1.174-.267 1.93-.386 2.002-1.72 4.56-2.996 5.325V17C9 19.25 9.75 20 13 20h3.773c2.176 0 2.703-1.433 2.899-1.964l.013-.036c.114-.306.358-.547.638-.82.31-.306.664-.653.927-1.18.311-.623.27-1.177.233-1.67-.023-.299-.044-.575.017-.83.064-.27.146-.475.225-.671.143-.356.275-.686.275-1.329 0-1.5-.748-2.498-2.315-2.498H15.5S15.9 6 15.9 4.5zM5.5 10A1.5 1.5 0 0 0 4 11.5v7a1.5 1.5 0 0 0 3 0v-7A1.5 1.5 0 0 0 5.5 10z" fill="#ffffff"></path></g></svg>
                                    <p className='px-1 cursor-pointer'>Likes</p>
                                    <p className='px-1'>{item.likesCount}</p>
                                </div>
                                <div className='flex flex-row m-2 px-2 text-white font-bold py-1 text-xs bg-[#7DD3FC] shadow-lg rounded-lg' 
                                    onClick={()=>givePostCredibility(true,item,'KU2r0kYPoaaiMsjEU7Ty')}>
                                    <svg width="15px" height="15px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" strokeWidth="6.4"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M32 8c8.1 6.77 17.39 6.35 20.05 6.35C51.46 52.84 47 45.21 32 56c-15-10.79-19.45-3.16-20-41.65 2.59 0 11.88.42 20-6.35z"></path></g></svg>
                                    <p className='px-1 cursor-pointer'>Credibility</p>
                                    <p className='px-1'>{item.credibilityCount}</p>
                                </div>
                                <div onClick={()=>handleSelectComment('comment', item)} className={`flex flex-row m-2 px-2 text-white font-bold py-1 text-xs ${item.id === selectedOption.comment.id && selectedOption.comment.isOpen ? 'bg-[#60A5FA]' : 'bg-[#7DD3FC]' } shadow-lg rounded-lg`}>
                                <svg fill="#ffff" width="15px" height="15px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>comment</title> <path d="M2.5 5.438h17.406c1.375 0 2.5 1.125 2.5 2.5v10.563c0 1.375-1.125 2.5-2.5 2.5h-3.313l0.156 4.281c0 1.031-0.563 1.281-1.313 0.563l-4.906-4.844h-8.031c-1.375 0-2.5-1.125-2.5-2.5v-10.563c0-1.375 1.125-2.5 2.5-2.5z"></path> </g></svg>
                                    <p className='px-1 cursor-pointer'>Comments</p>
                                    <p className='px-1'>{item.comments.length}</p>
                                </div>
                                <div className='flex flex-row m-2 px-2 text-white font-bold py-1 text-xs bg-[#7DD3FC] shadow-lg rounded-lg'>
                                <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 3C15 2.44772 15.4477 2 16 2C19.3137 2 22 4.68629 22 8V16C22 19.3137 19.3137 22 16 22H8C4.68629 22 2 19.3137 2 16C2 15.4477 2.44772 15 3 15C3.55228 15 4 15.4477 4 16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4C15.4477 4 15 3.55228 15 3Z" fill="#ffffff"></path> <path d="M3.70663 12.7845L3.16104 12.2746L3.70664 12.7845C4.09784 12.3659 4.62287 11.8265 5.17057 11.3274C5.72852 10.8191 6.26942 10.3905 6.69641 10.1599C7.06268 9.96208 7.75042 9.84035 8.40045 9.84848C8.62464 9.85128 8.81365 9.86944 8.9559 9.89472C8.96038 10.5499 8.95447 11.7469 8.95145 12.2627C8.94709 13.0099 9.83876 13.398 10.3829 12.8878L14.9391 8.61636C15.2845 8.2926 15.2988 7.74908 14.971 7.4076L10.4132 2.65991C9.88293 2.10757 8.95 2.48291 8.95 3.24856V5.16793C8.5431 5.13738 8.0261 5.11437 7.47937 5.13009C6.5313 5.15734 5.30943 5.30257 4.4722 5.88397C4.36796 5.95636 4.26827 6.03539 4.17359 6.11781C2.49277 7.58092 2.11567 9.90795 1.8924 11.7685L1.87242 11.935C1.74795 12.9722 3.02541 13.5134 3.70663 12.7845ZM9.35701 11.7935L9.70204 12.1615L9.35701 11.7935C9.35715 11.7934 9.35729 11.7932 9.35744 11.7931L9.35701 11.7935Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                                    <p className='px-1 cursor-pointer'>Share</p>
                                    <p className='px-1'>{item.sharesCount}</p>
                                </div>
                            </div>
                        </div>
                        {item.id === selectedOption.comment.id && selectedOption.comment.isOpen &&
                        <>
                            <div className='border p-1 bg-[#F5F5F5] rounded-lg'>
                                <textarea onChange={(e)=>handleChangeCommenttext(e ,'comment')} value={textOnComment.text} className='px-2 border w-full rounded-lg placeholder:text-sm placeholder:px-2 focus-within:border-blue-100' placeholder='comment..' />
                            </div>
                            <div className='my-2 flex flex-row w-fit'>
                                <p onClick={()=>handleSubmitComment(item, 'anonymous', 'single', index)} className='text-xs mr-2 px-2 text-white cursor-pointer font-bold py-1 bg-[#7DD3FC] shadow-lg rounded-lg'>Post Anonymous</p>
                                <p onClick={()=>handleSubmitComment(item, 'user', 'single', index)} className='text-xs px-2 text-white cursor-pointer font-bold py-1 bg-[#7DD3FC] shadow-lg rounded-lg'>Post</p>
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
                                                        <Image alt='' src={ProfilPic} width={20} height={20} className='h-[20px] w-[20px] shadow-lg rounded-lg border mx-2'/>
                                                        <span className='text-sm'>{comment.isAnonymous ? 'Anonymous' : 'User'}</span>
                                                    </div>
                                                    <p className='text-xs my-2 ml-9 bg-[#F5F5F5] py-2 px-2 shadow-sm rounded-lg'>{comment.text}</p>
                                                    <div className='flex flex-row text-[0.6rem] my-2 ml-9 w-fit font-bold text-white bg-[#7DD3FC] p-1 shadow-sm rounded-lg'>
                                                    <svg width="15px" height="15px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" strokeWidth="6.4"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M32 8c8.1 6.77 17.39 6.35 20.05 6.35C51.46 52.84 47 45.21 32 56c-15-10.79-19.45-3.16-20-41.65 2.59 0 11.88.42 20-6.35z"></path></g></svg>
                                                    <p className='px-1'>Credibility  &nbsp;{comment.credibility}</p>
                                                    </div>
                                                  
                                                    {comment.nested.length > 0 && comment.nested.map((nestedComment:any, index_)=>{
                                                        return(
                                                            <div key={index_} className='  p-2 my-3 ml-9'>
                                                                <div className='flex flex-row flex-wrap'>
                                                                    <Image alt='' src={ProfilPic} width={20} height={20} className='h-[20px] w-[20px] shadow-lg rounded-lg border mx-2'/>
                                                                    <span className='text-xs'>{nestedComment.isAnonymous ? 'Anonymous' : 'User'}</span>
                                                                </div>
                                                                <p className='text-xs my-2 ml-9 bg-[#F5F5F5] py-2 px-2 shadow-sm rounded-lg'>{nestedComment.text}</p>
                                                                <div className='flex flex-row  my-2 ml-9 w-fit font-bold text-white bg-[#7DD3FC] p-1 shadow-sm rounded-lg'>
                                                                <svg width="15px" height="15px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" strokeWidth="6.4"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M32 8c8.1 6.77 17.39 6.35 20.05 6.35C51.46 52.84 47 45.21 32 56c-15-10.79-19.45-3.16-20-41.65 2.59 0 11.88.42 20-6.35z"></path></g></svg>
                                                                    <p className='text-[0.6rem] px-2'>Credibility  &nbsp;{nestedComment.credibility}</p>
                                                                </div>
                                                               
                                                            </div>
                                                        )
                                                    })}
                                                    {item.id === selectedOption.nestedComment.id && selectedOption.nestedComment.isOpen && selectedOption.nestedComment.index == index &&
                                                        <div className='border ml-9 p-1 bg-[#F5F5F5] rounded-lg'>
                                                            <textarea onChange={(e)=>handleChangeCommenttext(e,'nested_comment')} className='px-2 border w-full rounded-lg placeholder:text-sm placeholder:px-2 focus-within:border-blue-100' value={textOnComment.nestedText} placeholder='comment..' />
                                                        </div>}
                                                        <div className='my-2 ml-9 flex flex-row w-fit'>
                                                            <p onClick={()=>handleSelectComment('nested', item, index)} 
                                                            className={`text-xs px-2 text-white cursor-pointer mr-2 font-bold py-1 
                                                            ${item.id === selectedOption.nestedComment.id && selectedOption.nestedComment.isOpen && selectedOption.nestedComment.index == index  ? 'bg-[#60A5FA]' : 'bg-[#7DD3FC]' } 
                                                             shadow-lg rounded-lg`}>Reply</p>
                                                            {item.id === selectedOption.nestedComment.id && selectedOption.nestedComment.isOpen && selectedOption.nestedComment.index == index  && <> <p className='text-xs mr-2 px-2 text-white cursor-pointer font-bold py-1 bg-[#7DD3FC] shadow-lg rounded-lg' onClick={()=>handleSubmitComment(item,'anonymous','nested', index)}>Post Anonymous</p>
                                                            <p className='text-xs px-2 text-white cursor-pointer font-bold py-1 bg-[#7DD3FC] shadow-lg rounded-lg' onClick={()=>handleSubmitComment(item,'anonymous', 'nested', index)}>Post</p></>}
                                                        </div>
                                                </div>
                                            )
                                        })}
                                    </div>}
                        </div>
                    )
                })}
                {posts.length == 0 && 
                    <div role="status" className="m-auto max-w-2xl p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                        <div className="flex  flex-col">
                            <div className='flex flex-col my-4'>
                                <div className="h-2.5 bg-gray-300 rounded-lg dark:bg-gray-600 w-24 mb-2.5"></div>
                                <div className="w-32 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></div>
                            </div>
                            <div className="h-18 bg-gray-300  mt-4">
                                <div className='flex flex-col my-4'>
                                    <div className='flex flex-row items-center my-4'>
                                        <div className="w-6 h-6 bg-gray-200 rounded-lg dark:bg-gray-300 m-2"></div>
                                        <div className="w-24 h-2 bg-gray-200 rounded-lg dark:bg-gray-300"></div>
                                    </div>
                                    <div className="w-32 h-2 bg-gray-200 rounded-lg dark:bg-gray-300 m-2 ml-6"></div>
                                    <div className="w-32 h-2 bg-gray-200 rounded-lg dark:bg-gray-300 m-2"></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex  flex-col">
                            <div className='flex flex-col my-4'>
                                <div className="h-2.5 bg-gray-300 rounded-lg dark:bg-gray-600 w-24 mb-2.5"></div>
                                <div className="w-32 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></div>
                            </div>
                            <div className="h-18 bg-gray-300  mt-4">
                                <div className='flex flex-col my-4'>
                                    <div className='flex flex-row items-center my-4'>
                                        <div className="w-6 h-6 bg-gray-200 rounded-lg dark:bg-gray-300 m-2"></div>
                                        <div className="w-24 h-2 bg-gray-200 rounded-lg dark:bg-gray-300"></div>
                                    </div>
                                    <div className="w-32 h-2 bg-gray-200 rounded-lg dark:bg-gray-300 m-2 ml-6"></div>
                                    <div className="w-32 h-2 bg-gray-200 rounded-lg dark:bg-gray-300 m-2"></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col my-4">
                            <div className='flex flex-col my-4'>
                                <div className="h-2.5 bg-gray-300 rounded-lg dark:bg-gray-600 w-24 mb-2.5"></div>
                                <div className="w-32 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></div>
                            </div>
                            <div className="h-18 bg-gray-300  mt-4">
                                <div className='flex flex-col my-4'>
                                    <div className='flex flex-row items-center my-4'>
                                        <div className="w-6 h-6 bg-gray-200 rounded-lg dark:bg-gray-300 m-2"></div>
                                        <div className="w-24 h-2 bg-gray-200 rounded-lg dark:bg-gray-300"></div>
                                    </div>
                                    <div className="w-32 h-2 bg-gray-200 rounded-lg dark:bg-gray-300 m-2 ml-6"></div>
                                    <div className="w-32 h-2 bg-gray-200 rounded-lg dark:bg-gray-300 m-2"></div>
                                </div>
                            </div>
                        </div>
                    <span className="sr-only">Loading...</span>
                </div>
            }
                </div>
            </div>
        </div>
    );
}

export default Browse;