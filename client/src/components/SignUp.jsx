import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import Nav from './Nav'
import axios from 'axios'
import { motion } from 'framer-motion'

export default function SignUp() {
    
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [age, setAge] = useState(0);
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signupInfo = () => {
        axios.post('http://127.0.0.1:5174/create', {
         f:first,
         l:last,
         a:age,
         p:phone,
         ad:address,
         em:email,
         pa:password  
        }).then(()=>{
            console.log("success");
        })
         };
    return (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        className= 'h-full w-full'
        >
            <Nav />
            <div className='h-full overflow-hidden grid place-items-center font-poppins bg-signup--image bg-cover bg-no-repeat lg:bg-none lg:flex'>
                <div className='lg:w-1/2 lg:m-0 lg:p-0 lg:shadow-none flex flex-col justify-center items-center shadow-lg rounded-3xl bg-white mx-5 px-10 py-5'>
                    <form className='grid grid-cols-2 gap-4'>
                        <h2 className="col-span-2 mb-4 font-gilmer text-button-dblue text-2xl"> Book with us now! </h2>
                        <div className="col-start-1 flex items-center border-b border-gray py-2">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    type="text"
                                    placeholder="First Name"
                                    aria-label="Full name"
                                    //for useState
                                    onChange={(event) => (
                                        setFirst(event.target.value)
                                    )}/>
                        </div>
                        <div className="flex items-center border-b border-gray py-2">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    type="text"
                                    placeholder="Last Name"
                                    aria-label="last name"
                                    //for useState
                                    onChange={(event) => (
                                        setLast(event.target.value)
                                    )}/>
            
                        </div>
                        <div className="flex items-center border-b border-gray py-2">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    type="text"
                                    placeholder="Phone Number"
                                    aria-label="phone number"
                                    //for useState
                                    onChange={(event) => (
                                        setPhone(event.target.value)
                                    )}/>
            
                        </div>
                        <div className="flex items-center border-b border-gray py-2">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    type="number"
                                    placeholder="Age"
                                    aria-label="age"
                                    //for useState
                                    onChange={(event) => (
                                        setAge(event.target.value)
                                    )}/>
            
                        </div>
                        {/* <div class="inline-block relative w-full">
                            <select class="block appearance-none w-full bg-transparent border-none border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option>Age</option>
                                <option>99</option>
                                <option>98.44</option>
            
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div> */}
                        <div className="col-span-2 flex items-center border-b border-gray py-2">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    type="text"
                                    placeholder="Address"
                                    aria-label="address"
                                    //for useState
                                    onChange={(event) => (
                                        setAddress(event.target.value)
                                    )}/>
            
            
                        </div>
                        {/* Email and Password */}
                        <div className="col-span-2 flex items-center border-b border-gray py-2">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    type="text"
                                    placeholder="Email"
                                    aria-label="email"
                                    //for useState
                                    onChange={(event) => (
                                        setEmail(event.target.value)
                                    )}/>
            
                        </div>
                        <div className="flex items-center border-b border-gray py-2">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    type="text"
                                    placeholder="Password"
                                    aria-label="password"
                                    //for useState
                                    onChange={(event) => (
                                        setPassword(event.target.value)
                                    )}/>
            
                        </div>
                        <div className="flex items-center border-b border-gray py-2">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    type="text"
                                    placeholder="Confirm Password"
                                    aria-label="confirm password"/>
            
                        </div>
                        <Link to="/sched" className='col-span-2 md:col-span-1'>
                            <button class="w-full flex-shrink-0 bg-button-dblue hover:bg-gray-700 border-button-dblue hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded-xl"
                                    onClick={signupInfo} type="submit">
                                Sign Up
                            </button>
                        </Link>
                        <Link to="/" className='col-span-2 md:col-span-1'>
                            <button class="w-full flex-shrink-0 border-transparent border-4 bg-gray-500 text-white hover:text-red-500 text-sm py-1 px-2 rounded-xl" type="button"
                            >
                                Cancel
                            </button>
                        </Link>
                        <div className="col-span-2 mt-5">
                            Already have an account? <Link to="/sched" className='text-link'>Log In</Link>
                        </div>
                    </form>
                </div>
                <div className='w-1/2 hidden lg:inline'>
                    <img src="./public/images/139472517_220155239842825_6914890826448897223_n.jpg" alt="" />
                </div>
            </div>
    </motion.div>
  )
}
