'use client'
import React from 'react';
import {database} from '../../../firebase'
import { addDoc, collection, getDocs } from 'firebase/firestore';
const dbInstanceForUserCollection = collection(database, 'users');
const dbInstanceForWalletCollection = collection(database, 'wallet');

function Login(props:any) {

    const createUser = async () => {
        const type: string = 'user'
        const user: any = {
            password:'asd23dweawe12d',
            credibility: 0,
        }
        user.name =  type === 'anonymouse' ? 'user' +  Math.floor(Math.random() * 100000)  : 'Zain Ahmed'
        user.email =  type === 'anonymouse' ? 'user' +  Math.floor(Math.random() * 100000) + '@gmail.com'  : 'zain.ahmed199524@gmail.com'
      
        const newUser = await addDoc(dbInstanceForUserCollection,user)
        const newWallet = await addDoc(dbInstanceForWalletCollection,{
            userId:newUser.id,
            balance:0
        })
    }

    return (
<div>
<div className="min-h-screen m-auto sm:w-full md:w-2/3 w-2/4 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 max-w">
            Or
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                create an account
            </a>
        </p>
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Email address
                    </label>
                    <div className="mt-1">
                        <input id="email" name="email" type="email" autoComplete="email" required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Enter your email address"/>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div className="mt-1">
                        <input id="password" name="password" type="password" autoComplete="current-password" required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Enter your password"/>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input id="remember_me" name="remember_me" type="checkbox"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                        <label className="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm">
                        <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                            Forgot your password?
                        </a>
                    </div>
                </div>

                <div>
                    <button onClick={createUser} type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                        Sign in
                    </button>
                </div>
            </form>
            <div className="mt-6">
            <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-gray-100 text-gray-500">
                            Or continue with
                        </span>
                    </div>
                    
                </div>
                
            </div>
            <div className='my-4'>
                    <button onClick={createUser} type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Login/Sign-up as Anonymous
                    </button>
                </div>
        </div>
    </div>
    
</div>
</div>
    );
}

export default Login;