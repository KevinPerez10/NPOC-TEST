import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import Nav from './Nav'
import axios from 'axios'
import { motion } from 'framer-motion'

export default function SignUp() {
    
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [birthday, setBirthday] = useState(0);
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signupInfo = () => {
        axios.post('http://127.0.0.1:5174/create', {
         f:first,
         l:last,
         b:birthday,
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
        className= 'h-full w-full flex flex-col'
        >
            <Nav className='self-center lg:self-start' text='hidden lg:flex'/>
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
                                    type="date"
                                    placeholder="MM-DD-YYYY"
                                    aria-label="date of birth"
                                    //for useState
                                    onChange={(event) => (
                                        setBirthday(event.target.value)
                                    )}/>
                        </div>
                        {/* Address */}
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
                        <Link to="/emailverification" className='col-span-2 md:col-span-1'>
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
                <div className='hidden lg:inline lg:absolute lg:right-0 lg:inset-y-0 lg:w-1/2'>
                    <img
                        src="./public/images/139472517_220155239842825_6914890826448897223_n.jpg"
                        alt=""
                        className='object-cover w-full h-full'
                    />
                </div>
            </div>
    </motion.div>
  )
}
