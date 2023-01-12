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
                    <Nav className='self-center lg:self-start text-white fixed' text='hidden text-black lg:flex' logo='w-10'/>
                    <div className="text-center font-poppins xxs:bg-center bg-npoc--appointment__page bg-cover bg-no-repeat w-full h-screen flex flex-col justify-center">
                        {loginStatus}
                        <main className='grid place-items-center h-5/6 text-white'>
                            <div className='pb-5 font-gilmer text-xl flex flex-col items-center h-full w-5/6 pt-5 bg-gray-900/75 rounded-2xl overflow-auto'>
                                <div className='flex flex-col sm:flex-row justify-evenly mt-5 z-10 top-1'>
                                    My Appointments
                                </div>
                                <div className="cards my-auto flex flex-col lg:flex-row">
                                    <div class="m-5 p-6 max-w-sm gap-3 flex flex-col text-left text-white rounded-sm border-none shadow-md bg-gradient-to-b from-button-lblue to-button-dblue hover:rounded-br-3xl hover:rounded-tl-3xl hover:scale-105 hover:cursor-pointer transition-all">
                                        <h5 className="mb-2 flex items-center text-white text-2xl">
                                            <div className='mr-3'>
                                            </div>
                                            Eye Consultation
                                        </h5>
                                        <p className="mb-3 flex items-center">
                                            <div className='mr-3 grid place-items-center'>
                                                <ion-icon name="eye-outline"></ion-icon>
                                            </div>
                                            Dr. Cricelna Perez
                                        </p>
                                        <p className="mb-3 flex items-center">
                                            <div className='mr-3 grid place-items-center'>
                                                <ion-icon name="calendar-outline"></ion-icon>
                                            </div>
                                            November 17
                                        </p>
                                        <p className="mb-3 flex items-center">
                                            <div className='mr-3 grid place-items-center'>
                                                <ion-icon name="time-outline"></ion-icon> 
                                            </div>
                                            12:30pm
                                        </p>
                                        <p className="mb-3 flex items-center">
                                            <div className='mr-3 grid place-items-center'>
                                                <ion-icon name="navigate-outline"></ion-icon>
                                            </div>
                                            Nolasco - Perez Optical Clinic San Jose del Monte
                                        </p>
                                        <p className="mb-3 flex items-center">
                                            <div className='mr-3 grid place-items-center'>
                                                <ion-icon name="call-outline"></ion-icon>
                                            </div>
                                            +63 922 842 0989
                                        </p>
                                        <p className="mb-3 flex items-center">
                                            <div className='mr-3 grid place-items-center'>
                                                <ion-icon name="mail-outline"></ion-icon>
                                            </div>
                                            npoc@gmail.com
                                        </p>
                                    </div>

                                </div>
                                <Link to="/slots" className="min-w-lg mt-auto rounded-full flex items-center bg-button-dblue px-10 py-3 hover:bg-button-lblue transition-all">
                                        <p className='hidden lg:inline'>
                                            Add
                                        </p>
                                        <div className='lg:hidden'>
                                            <ion-icon name="add-circle-outline"></ion-icon>
                                        </div>
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
