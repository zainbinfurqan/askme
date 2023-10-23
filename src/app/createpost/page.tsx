'use client'
import React, { useEffect } from 'react';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import {database} from '../../../firebase'
const dbInstance = collection(database, 'posts');


function CreatePost(props:any) {

    const  createPost = async () => {
         await addDoc(dbInstance,   {
            type: "question",
            question: "I am relocating  asdas asd asd asd asd asd as dasda asdto Malaysia  Shah alam, already have a job their, I am single , how money should i bring to Malaysia",
            country: "Pakistan",
            tags: ["Malaysia", "shah alam", "relocated", "job"],
            city: "karachi",
            area:"nazimabad",
            credibility: 0,
            likes: 0,
            comments: [],
            shares: 0
        })
    }

    return (
        <div className='h-screen mx-2'>
         <div className="w-2/4 sm:w-full m-auto my-3">
            <p className='text-3xl my-2 font-bold'>Create post</p>
            <form className="bg-white shadow-md  px-8 pt-6 pb-8 mb-4 rounded-lg">
                <div className="mb-4">
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username"  placeholder="Type here..."/>
                </div>
                <div className="mb-6">
                    <div className='flex flex-row'>
                        <input className="mr-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"   placeholder="Country"/>
                        <input className="mx-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"   placeholder="Country"/>
                        <input className="ml-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Area"/>
                    </div>
                </div>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username"  placeholder="add tags..."/>
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