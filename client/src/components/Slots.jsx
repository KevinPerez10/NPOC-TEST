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
            <Nav className='self-center lg:self-start fixed' text='hidden lg:text-black lg:flex'/>
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
    </motion.div>
  )
}