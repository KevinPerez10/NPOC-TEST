import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Nav from './Nav'
import { motion } from 'framer-motion'

export default function LogIn({Login, error}) {
    const [details, setDetails] = useState({email: "", password: ""})

    const submitHandler = e => {
        e.preventDefault()
    
        Login(details)
      }

  return (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
        <Nav />
        <div className='h-screen overflow-hidden grid place-items-center font-poppins bg-login--image bg-cover bg-no-repeat lg:bg-none lg:flex'>
            <div className='lg:w-1/2 lg:m-0 lg:p-0 lg:shadow-none flex flex-col justify-center items-center shadow-lg rounded-3xl bg-white w-4/5 h-3/4 m-5'>
                <form className='w-1/2 grid grid-cols-2 gap-4' onSubmit={submitHandler}>
                <h2 className="col-span-2 font-gilmer text-button-dblue text-2xl mb-4"> Welcome! <h4 className='text-xs'>Please login to your account</h4> </h2>
                {(error != "") ? (<div className="error">{error.message}</div>) : ""}
                    <div className="col-span-2 flex items-center border-b border-gray py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text"
                                placeholder="Email"
                                aria-label="email"
                                onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
        
                    </div>
                    <div className="col-span-2 flex items-center border-b border-gray py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text"
                                placeholder="Password"
                                aria-label="password"
                                onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
        
                    </div>
                    <Link to="/forgotpass" className='col-span-2'>
                        <div className="text-center text-link">
                            Forgot Password
                        </div>
                    </Link>

                    <div className='col-span-2 md:col-span-1'>
                        <button className="w-full flex-shrink-0 bg-button-dblue hover:bg-gray-700 border-button-dblue hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded-xl"
                                type="submit">
                            Log In
                        </button>
                    </div>
                    <div className='col-span-2 md:col-span-1'>
                        <Link to="/signup">
                            <button class="w-full flex-shrink-0 border-transparent border-4 bg-gray-500 text-white hover:text-red-500 hover:bg-gray-300 text-sm py-1 px-2 rounded-xl" type="button">
                                Cancel
                            </button>
                        </Link>
                        </div>
                </form>
                <div className="w-full text-center mt-10">
                    Not a member? <Link to="/signup" className='text-link'>Sign Up</Link>
                </div>
            </div>
            <div className='hidden lg:inline lg:absolute lg:right-0 lg:inset-y-0 lg:w-1/2'>
                <img
                    src="./public/images/116839142_906231729862518_2139663056183987943_n.jpg"
                    alt=""
                    className='object-cover w-full h-full'
                />
            </div>
        </div>
    </motion.div>
  )
}
