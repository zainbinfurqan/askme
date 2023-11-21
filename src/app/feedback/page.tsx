'use client'
import React, { useState, useTransition } from 'react';
import {addComment} from '../../serveracitons/addComments'
import Link from 'next/link';

function FeedBack(props: any) {
    const [feedBack, setFeedback] = useState({
        email:'',
        name:'',
        text:''
    })
    let [isPending, startTransition] = useTransition()

    const handleTextChange = (key:any, e:React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
        setFeedback({...feedBack, [key]:e.target.value})
    }

    return (
        <div className='h-screen'>
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
                    <Link href="/feedback">
                        <p className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                        >FeedBack</p> </Link>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
            </div>
            {console.log("isPending",isPending)}
            <section className="bg-white dark:bg-gray-900 mx-10">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                            <input onChange={(e)=>handleTextChange('email', e)} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                            <input onChange={(e)=>handleTextChange('name', e)} type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Message</label>
                            <textarea onChange={(e)=>handleTextChange('text', e)} id="message" 
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button 
                        onClick={() => startTransition(()=>addComment(feedBack))} 
                        type="submit" 
                        className="text-md px-4 w-full py-4 text-white bg-[#7DD3FC] cursor-pointer mr-2 font-bold py-1 shadow-lg rounded-full">Send message</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default FeedBack;