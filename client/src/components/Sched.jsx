import React,{useState} from 'react'
import Nav from './Nav';
import {Link} from 'react-router-dom';
import LogIn from './LogIn';
import Axios from 'axios';
import { motion } from 'framer-motion'

export default function Sched() {
    const [loginStatus, setLoginStatus] = useState("");
    const [error, setError] = useState([]);

    const Login = details => {
        console.log(details)
        Axios.post("http://127.0.0.1:5174/login", {
            email: details.email,
            password: details.password
            }).then((response) => {
            if(response.data.message){
            setError(response.data)
            } else {
            setLoginStatus(response.data[0].firstName + " " + response.data[0].lastName);
            }	
        });
    }
  return (
    <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        className='w-full'>
            {(loginStatus == "") ? (
                <div className='flex flex-col'>
                    <Nav className='self-center lg:self-start text-white' text='hidden lg:flex' logo='w-10'/>
                    <div className="text-center font-poppins xxs:bg-cente bg-npoc--appointment__page bg-cover bg-no-repeat w-full h-screen flex flex-col justify-center">
                        {loginStatus}
                        <main className='grid place-items-center h-5/6 text-white'>
                            <div className='font-gilmer text-xl flex flex-col items-center h-full w-5/6 pt-5 bg-gray-900/75 rounded-2xl overflow-auto'>
                                <div className='flex flex-col sm:flex-row justify-evenly mt-5 z-10 top-1'>
                                    My Appointments
                                </div>
                                <div className="cards my-auto flex flex-col lg:flex-row">
                                    <div class="m-5 p-6 max-w-sm rounded-sm border-none shadow-md dark:bg-gray-800 dark:border-gray-700 hover:rounded-br-3xl hover:rounded-tl-3xl hover:scale-105 hover:cursor-pointer transition-all">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    </div>
                                    <div class="m-5 p-6 max-w-sm rounded-sm border-none shadow-md dark:bg-gray-800 dark:border-gray-700 hover:rounded-br-3xl hover:rounded-tl-3xl hover:scale-105 hover:cursor-pointer transition-all">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    </div>
                                    <div class="m-5 p-6 max-w-sm rounded-sm border-none shadow-md dark:bg-gray-800 dark:border-gray-700 hover:rounded-br-3xl hover:rounded-tl-3xl hover:scale-105 hover:cursor-pointer transition-all">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    </div>
                                    <div class="m-5 p-6 max-w-sm rounded-sm border-none shadow-md dark:bg-gray-800 dark:border-gray-700 hover:rounded-br-3xl hover:rounded-tl-3xl hover:scale-105 hover:cursor-pointer transition-all">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    </div>
                                    <div class="m-5 p-6 max-w-sm rounded-sm border-none shadow-md dark:bg-gray-800 dark:border-gray-700 hover:rounded-br-3xl hover:rounded-tl-3xl hover:scale-105 hover:cursor-pointer transition-all">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    </div>
                                    <div class="m-5 p-6 max-w-sm rounded-sm border-none shadow-md dark:bg-gray-800 dark:border-gray-700 hover:rounded-br-3xl hover:rounded-tl-3xl hover:scale-105 hover:cursor-pointer transition-all">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    </div>

                                </div>
                                <Link to="/slots" className="inline-flex fixed bottom-5 items-center py-2 px-5 text-sm font-medium text-center mb-5 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Add
                                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </main>
                    </div>
                
                </div>
            ): (
                <LogIn Login={Login} error={error}/>
            )}
    </motion.div>
  )
}
