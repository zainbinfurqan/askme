'use client'
import React, { use, useEffect, useState } from 'react';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import {database} from '../../../firebase'
import Link from 'next/link';
const dbInstance = collection(database, 'posts');


function CreatePost(props:any) {

    const [formInputs, setFormInputs] = useState({text:'', country:'', city:'',area:'', tags:''})
    const [postType, setPostType] = useState('question')

    const changeInputFields = (label: any, e: any) => setFormInputs({...formInputs,[label]:e.target.value }) 
    const seletedPostType = (type: any) => setPostType(type)
    const  createPost = async () => {
        try {
            const constructNewData: any = {
                credibility: [],
                credibilityCount: 0,
                likes: [],
                likesCount: 0,
                comments: [],
                shares: [],
                sharesCount: 0
            }
            constructNewData.country = formInputs.country;
            constructNewData.city = formInputs.city;
            constructNewData.area = formInputs.area;
            constructNewData.tags = formInputs.tags.split(' ');
            constructNewData.type = postType;
            constructNewData.question =  postType === 'question' &&  formInputs.text
            constructNewData.suggestion =  postType === 'suggestion' &&  formInputs.text
            console.log("post data",constructNewData)
            const newData = await addDoc(dbInstance,  constructNewData)
            if(newData){
                setFormInputs({text:'', country:'',city:'', area:'', tags:''})
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='h-screen mx-2'>
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
         <div className="w-2/4 sm:w-full m-auto my-3">
            <p className='text-3xl my-2 font-bold'>Create post</p>
            <form className="bg-white shadow-md  px-8 pt-6 pb-8 mb-4 rounded-lg">
                <div className="mb-4">
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username"  
                    onChange={(e)=>changeInputFields('text',e)}
                    value={formInputs.text}
                    placeholder="Type here..."/>
                </div>
                <div className='flex flex-row my-4'>
                    <div className="flex items-center mr-2">
                        <input 
                            onChange={() => seletedPostType('suggestion')}
                            checked={postType === 'suggestion' && true} id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Suggestion</label>
                    </div>
                    <div className="flex items-center">
                        <input checked={postType === 'question'}
                            onChange={() => seletedPostType('question')}
                            id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Question</label>
                    </div>
                </div>
                <div className="mb-6">
                    <div className='flex flex-row'>
                        <input className="mr-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  
                            onChange={(e)=>changeInputFields('country',e)}
                            value={formInputs.country}
                            placeholder="Country"/>
                        <input className="mx-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  
                            onChange={(e)=>changeInputFields('city',e)}
                            value={formInputs.city}
                            placeholder="City"/>
                        <input className="ml-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                            onChange={(e)=>changeInputFields('area',e)}
                            value={formInputs.area}
                            placeholder="Area"/>
                    </div>
                </div>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e)=>changeInputFields('tags',e)}
                    value={formInputs.tags}
                    id="username"  placeholder="add tags..."/>
                <div className="flex items-center justify-between">
                <button onClick={createPost} className="w-full my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Create
                </button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default CreatePost;