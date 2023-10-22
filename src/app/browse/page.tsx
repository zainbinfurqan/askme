import React from 'react';
import data from '../../../data.json'
import Image from 'next/image'
import ProfilPic from '../../../assets/images/profile-pic.png'

function Browse(props:any) {
    return (
        <div className='p-4'>
            <div className='flex flex-col justify-center'>
                <div className='px-4 flex flex-row'>
                    <input className='w-full h-10 rounded-full placeholder:px-2 px-2 mx-2' placeholder='Search...' />
                    <div className='text-sm p-2  text-white w-fit cursor-pointer font-bold py-1 bg-[#7DD3FC] shadow-lg rounded-full'>
                        <svg width="35px" height="35px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.30524 15.7137C6.4404 14.8306 5.85381 13.7131 5.61824 12.4997C5.38072 11.2829 5.50269 10.0233 5.96924 8.87469C6.43181 7.73253 7.22153 6.75251 8.23924 6.05769C10.3041 4.64744 13.0224 4.64744 15.0872 6.05769C16.105 6.75251 16.8947 7.73253 17.3572 8.87469C17.8238 10.0233 17.9458 11.2829 17.7082 12.4997C17.4727 13.7131 16.8861 14.8306 16.0212 15.7137C14.8759 16.889 13.3044 17.5519 11.6632 17.5519C10.0221 17.5519 8.45059 16.889 7.30524 15.7137V15.7137Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.6702 7.20292C11.2583 7.24656 10.9598 7.61586 11.0034 8.02777C11.0471 8.43968 11.4164 8.73821 11.8283 8.69457L11.6702 7.20292ZM13.5216 9.69213C13.6831 10.0736 14.1232 10.2519 14.5047 10.0904C14.8861 9.92892 15.0644 9.4888 14.9029 9.10736L13.5216 9.69213ZM16.6421 15.0869C16.349 14.7943 15.8741 14.7947 15.5815 15.0879C15.2888 15.381 15.2893 15.8559 15.5824 16.1485L16.6421 15.0869ZM18.9704 19.5305C19.2636 19.8232 19.7384 19.8228 20.0311 19.5296C20.3237 19.2364 20.3233 18.7616 20.0301 18.4689L18.9704 19.5305ZM11.8283 8.69457C12.5508 8.61801 13.2384 9.02306 13.5216 9.69213L14.9029 9.10736C14.3622 7.83005 13.0496 7.05676 11.6702 7.20292L11.8283 8.69457ZM15.5824 16.1485L18.9704 19.5305L20.0301 18.4689L16.6421 15.0869L15.5824 16.1485Z" fill="#000000"></path> </g></svg>
                    </div>
                </div>
                <div className='mx-9 py-2 flex flex-row'>
                    <div>
                        <div className='border px-4 bg-white  w-40 rounded-ss rounded-se'><p className='text-sm py-2'>Select Country</p></div>
                        <div className='border px-4 bg-white absolute h-48 overflow-scroll w-40 rounded-es rounded-ee'>
                            {Object.keys(data.countries).map(item=>{
                                return (
                                    <p className='py-2 cursor-pointer'>{item}</p>
                                )
                            })}
                        </div>
                    </div>
                    <div className='flex flex-row mx-2'>
                        <div className='border px-4 bg-white h-fit items-center rounded-ss rounded-se flex flex-row'>
                            <p className='text-sm py-2 mr-1'>Sort</p>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 8H13" stroke="#7DD3FC" stroke-width="1.5" stroke-linecap="round"></path> <path d="M6 13H13" stroke="#7DD3FC" stroke-width="1.5" stroke-linecap="round"></path> <path d="M8 18H13" stroke="#7DD3FC" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17 20V4L20 8" stroke="#7DD3FC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </div>
                        <div className='border px-4 absolute ml-[5.6rem] bg-white overflow-scroll w-40 rounded-es rounded-ee py-4'>
                            <p className='text-sm font-bold'>Credibility</p>
                            <div className='flex  items-center justify-center flex-row'>
                                <div className='flex flex-row m-2 px-2 text-white font-bold py-1 text-xs bg-[#7DD3FC] rounded-full'>
                                    <p>High</p>
                                </div>
                                <div><p>to</p></div>
                                <div className='flex flex-row m-2 px-2 text-white font-bold py-1 text-xs bg-[#7DD3FC] rounded-full'>
                                        <p>Low</p>
                                </div>
                            </div>
                            <div className='flex  items-center justify-center flex-row'>
                                <div className='flex flex-row m-2 px-2 text-white font-bold py-1 text-xs bg-[#7DD3FC] rounded-full'>
                                    <p>Low</p>
                                </div>
                                <div><p>to</p></div>
                                <div className='flex flex-row m-2 px-2 text-white font-bold py-1 text-xs bg-[#7DD3FC] rounded-full'>
                                    <p>High</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                <div className='flex flex-row flex-wrap justify-center'>
                {data.browse.map(item=>{
                    return(
                        <div className='p-4 border b-2 rounded-lg shadow-xl m-4 w-[47%] bg-white sm:w-full sm:my-2 sm:mx-0 md:w-full lg:w-[47%] lg:mx-1 xl:w-[31%] xl:mx-1'>
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
                                <div className='flex flex-row m-2 px-2 text-white font-bold py-1 text-xs bg-[#7DD3FC] shadow-lg rounded-full'>
                                    <p className='px-1 cursor-pointer'>Share</p>
                                    <p className='px-1'>{item.shares}</p>
                                </div>
                            </div>
                        </div>
                            {item.comments.length > 0 && <div className='overflow-scroll h-96'>
                                        {item.comments.map(comment=>{
                                            return (
                                                <div className='border border-[#F5F5F4] p-2 my-3'>
                                                    <div className='flex flex-row flex-wrap'>
                                                        <Image alt='' src={ProfilPic} width={20} height={20} className='h-[20px] w-[20px] shadow-lg rounded-full border mx-2'/>
                                                        <span className='text-sm'>{comment.isAnonymous ? 'Anonymous' : 'User'}</span>
                                                    </div>
                                                    <p className='text-xs my-2 ml-9 bg-[#F5F5F5] py-2 px-2 shadow-sm rounded-lg'>{comment.text}</p>
                                                    <p className='text-[0.6rem] my-2 ml-9 w-fit font-bold text-white bg-[#7DD3FC] p-1 shadow-sm rounded-lg'>Credibility  &nbsp;{comment.credibility}</p>
                                                    {comment.nested.map(nestedComment=>{
                                                        return(
                                                            <div className='  p-2 my-3 ml-9'>
                                                                <div className='flex flex-row flex-wrap'>
                                                                    <Image alt='' src={ProfilPic} width={20} height={20} className='h-[20px] w-[20px] shadow-lg rounded-full border mx-2'/>
                                                                    <span className='text-xs'>{nestedComment.isAnonymous ? 'Anonymous' : 'User'}</span>
                                                                </div>
                                                                <p className='text-xs my-2 ml-9 bg-[#F5F5F5] py-2 px-2 shadow-sm rounded-lg'>{nestedComment.text}</p>
                                                                <p className='text-[0.6rem] my-2 ml-9 w-fit font-bold text-white bg-[#7DD3FC] p-1 shadow-sm rounded-lg'>Credibility  &nbsp;{nestedComment.credibility}</p>
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
        </div>
    );
}

export default Browse;