import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function AdminLogIn({Login, error}) {
  const [details, setDetails] = useState({email: "", password: ""});

  const submitHandler = e => {
    e.preventDefault();

    Login(details);
  }

    return (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
        <nav className="grid font-poppins hover:cursor-pointer fixed">
            <div className="text-white flex items-center p-5">
                <Link to="/" className='flex items-center'>
                    <img className="w-10" src="./images/logo.png" alt="" />
                    <p className="text-3xl">NPOC</p>
                </Link>
            </div>
        </nav>
        <div className='text-white h-screen grid place-items-center bg-gradient-to-tr from-button-dblue to-button-lblue'>
            <div className='min-h-fit w-fit flex flex-col justify-center items-center font-poppins shadow-lg p-20'>
                <h2 className='font-gilmer text-3xl self-start'> Welcome! </h2>
                <h3 className='font-poppins self-start'> Please login to your account </h3>
                {(error != "") ? (<div className="error">{error}</div>) : ""}
                <form className='grid grid-cols-2 gap-4' onSubmit={submitHandler}>
                    <div className="col-span-2 flex items-center border-b border-gray py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text"
                                placeholder="Email"
                                aria-label="email"
                                onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
        
                    </div>
                    <div className="col-span-2 flex items-center border-b border-gray py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="password"
                                placeholder="Password"
                                aria-label="password"
                                onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
        
                    </div>
                    <div className='col-start-2'>
                        <button className="w-full flex-shrink-0 bg-button-dblue hover:bg-gray-700 border-button-dblue hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded-xl"
                                type="submit">
                            Log In
                        </button>
                    </div>
                </form>
                <div className="w-full text-center mt-10">
                    Not the owner? <Link to="/signup" className='text-link'>Sign Up</Link>
                </div>
            </div>
        </div>
    </motion.div>
  )
}
