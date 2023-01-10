import React from 'react'
import {Link} from 'react-router-dom';
import Nav from './Nav';
import { motion } from 'framer-motion'

export default function Slots() {
  return (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        className='h-screen w-full flex flex-col font-poppins text-xl text-white'>
            <Nav className='self-center lg:self-start ' text='hidden lg:text-black lg:flex'/>
            <div className='h-full w-full grid lg:grid-cols-2 place-items-center overflow-hidden'>
                <div className='h-full w-full flex flex-col gap-5 lg:pt-20 pt-32 items-center bg-available--slots bg-cover bg-no-repeat lg:bg-none lg:flex'>
                    <div className='text-2xl text-black self-start ml-5'>
                        <h1 className="text-3xl"> Book Appointment: </h1>
                    </div>
                    <div className='h-1/2 lg:h-fit xs:h-4/5 p-5 text-white w-5/6 grid gap-8 rounded-2xl bg-gray-900/75 overflow-auto'>
                        <div className='grid gap-1 xs:grid-cols-3 place-items-center'>
                            <p className='xs:col-span-3 place-self-start'>November 17</p>
                            <label className='flex justify-center items-center border-2 xs:p-0 cursor-pointer hover:bg-gray-700/75 rounded-xl h-10 w-full py-5 px-5'>11AM</label>
                            <label className='flex justify-center items-center border-2 xs:p-0 cursor-pointer hover:bg-gray-700/75 rounded-xl h-10 w-full py-5 px-5'>1PM</label>
                            <label className='flex justify-center items-center border-2 xs:p-0 cursor-pointer hover:bg-gray-700/75 rounded-xl h-10 w-full py-5 px-5'>3PM</label>
                            <label className='flex justify-center items-center border-2 xs:p-0 cursor-pointer hover:bg-gray-700/75 rounded-xl h-10 w-full py-5 px-5'>4PM</label>
                            <label className='flex justify-center items-center border-2 xs:p-0 cursor-pointer hover:bg-gray-700/75 rounded-xl h-10 w-full py-5 px-5'>6PM</label>
                        </div>
                        <div className='grid gap-1 xs:grid-cols-3 place-items-center'>
                            <p className='xs:col-span-3 place-self-start'>November 23</p>
                            <label className='flex justify-center items-center border-2 xs:p-0 cursor-pointer hover:bg-gray-700/75 rounded-xl h-10 w-full py-5 px-5'>10AM</label>
                            <label className='flex justify-center items-center border-2 xs:p-0 cursor-pointer hover:bg-gray-700/75 rounded-xl h-10 w-full py-5 px-5'>11AM</label>
                        </div>
                        <div className='grid gap-1 xs:grid-cols-3 place-items-center'>
                            <p className='xs:col-span-3 place-self-start'>November 25</p>
                            <label className='flex justify-center items-center border-2 cursor-pointer hover:bg-gray-700/75 rounded-xl h-10 w-full py-5 px-5'>9AM</label>
                            <label className='flex justify-center items-center border-2 cursor-pointer hover:bg-gray-700/75 rounded-xl h-10 w-full py-5 px-5'>10AM</label>
                            <label className='flex justify-center items-center border-2 cursor-pointer hover:bg-gray-700/75 rounded-xl h-10 w-full py-5 px-5'>11AM</label>
                        </div>
                    </div>
                    <div className='grid w-full px-5 place-items-center text-center xs:grid-cols-2 gap-4'>
                        <Link to="/thankyou" className='xs:col-start-2 w-full border-none bg-button-dblue hover:bg-gray-700 border-button-dblue hover:border-gray-700 border-4 text-white py-2 px-5 rounded-xl'>Next</Link>
                        <Link to="/sched" className='xs:row-start-1 w-full border-none bg-gray-500 text-white hover:text-red-500 py-2 px-5 rounded-xl'>Previous</Link>
                    </div>
                </div>
                <div className='hidden lg:inline lg:absolute lg:right-0 lg:inset-y-0 lg:w-1/2'>
                    <img
                        src="./public/images/pexels-nataliya-vaitkevich-5842835.jpg"
                        alt=""
                        className='object-cover w-full h-full'
                    />
                </div>
            </div>
            {/* <section class="bg-white">
                <div class="grid grid-cols-1 lg:grid-cols-2">
                    <div class="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
                        <div class="absolute inset-0">
                            <img class="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/4/girl-working-on-laptop.jpg" alt="" />
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

                        <div class="relative">
                            <div class="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
                                <h3 class="text-4xl font-bold text-white">Join 35k+ web professionals & <br class="hidden xl:block" />build your website</h3>
                                <ul class="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
                                    <li class="flex items-center space-x-3">
                                        <div class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                            <svg class="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <span class="text-lg font-medium text-white"> Commercial License </span>
                                    </li>
                                    <li class="flex items-center space-x-3">
                                        <div class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                            <svg class="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <span class="text-lg font-medium text-white"> Unlimited Exports </span>
                                    </li>
                                    <li class="flex items-center space-x-3">
                                        <div class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                            <svg class="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <span class="text-lg font-medium text-white"> 120+ Coded Blocks </span>
                                    </li>
                                    <li class="flex items-center space-x-3">
                                        <div class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                            <svg class="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <span class="text-lg font-medium text-white"> Design Files Included </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                        <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up to Celebration</h2>
                            <p class="mt-2 text-base text-gray-600">Already have an account? <a href="#" title="" class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Login</a></p>

                            <form action="#" method="POST" class="mt-8">
                                <div class="space-y-5">
                                    <div>
                                        <label for="" class="text-base font-medium text-gray-900"> Fast & Last name </label>
                                        <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>

                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                placeholder="Enter your full name"
                                                class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" class="text-base font-medium text-gray-900"> Email address </label>
                                        <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                </svg>
                                            </div>

                                            <input
                                                type="email"
                                                name=""
                                                id=""
                                                placeholder="Enter email to get started"
                                                class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" class="text-base font-medium text-gray-900"> Password </label>
                                        <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                                    />
                                                </svg>
                                            </div>

                                            <input
                                                type="password"
                                                name=""
                                                id=""
                                                placeholder="Enter your password"
                                                class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                                        >
                                            Sign up
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <div class="mt-3 space-y-3">
                                <button
                                    type="button"
                                    class="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                                >
                                    <div class="absolute inset-y-0 left-0 p-4">
                                        <svg class="w-6 h-6 text-rose-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                                            ></path>
                                        </svg>
                                    </div>
                                    Sign up with Google
                                </button>

                                <button
                                    type="button"
                                    class="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                                >
                                    <div class="absolute inset-y-0 left-0 p-4">
                                        <svg class="w-6 h-6 text-[#2563EB]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                        </svg>
                                    </div>
                                    Sign up with Facebook
                                </button>
                            </div>

                            <p class="mt-5 text-sm text-gray-600">
                                This site is protected by reCAPTCHA and the Google <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">Privacy Policy</a> &
                                <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">Terms of Service</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}

    </motion.div>
  )
}