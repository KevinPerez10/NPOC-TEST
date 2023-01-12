import React from 'react'
import {Link} from 'react-router-dom'
import Nav from './Nav'
import { motion } from 'framer-motion'

export default function EmailVerification() {
  return (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        className='text-white font-poppins bg-emailverification bg-cover bg-center flex flex-col items-center w-full h-full'>
            <Nav className='text-white self-center fixed lg:self-start' text='hidden lg:flex'/>
            <div className='flex flex-col text-center justify-center items-center bg-gray-900/40 w-full h-full'>
                <div className='font-gilmer text-2xl'>
                    Please check your email for verification
                </div>
                <div className='text-sm mt-5'>
                    Continue to <Link to='/sched' className='text-link'> Log In </Link> page
                </div>
            </div>
    </motion.div>
  )
}
