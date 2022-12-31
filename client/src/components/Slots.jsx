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
        className='h-full w-full flex flex-col font-poppins text-xl text-white'>
            <Nav className='self-center lg:self-start' text='hidden lg:flex'/>
            <div className='h-full w-full grid lg:grid-cols-2 place-items-center overflow-auto'>
                <div className='h-full w-full flex flex-col gap-5 justify-center items-center bg-available--slots bg-cover bg-no-repeat lg:bg-none lg:flex'>
                    <div className='text-2xl text-black self-start ml-5'>
                        <h1 className="text-3xl"> Book Appointment: </h1>
                    </div>
                    <div className='h-3/5 p-5 text-white w-5/6 grid lg:grid-cols-2 gap-8 rounded-2xl bg-gray-900/75 overflow-auto'>
                        <div className='grid gap-4 xs:grid-cols-3'>
                            <p className='xs:col-span-3'>November 17</p>
                            <label className='flex justify-center items-center border-2 xs:p-0 cursor:pointer rounded-xl h-10 w-full py-5 px-5'>11 AM</label>
                            <label className='flex justify-center items-center border-2 xs:p-0 cursor:pointer rounded-xl h-10 w-full py-5 px-5'>1 PM</label>
                            <label className='flex justify-center items-center border-2 xs:p-0 cursor:pointer rounded-xl h-10 w-full py-5 px-5'>3 PM</label>
                            <label className='flex justify-center items-center border-2 xs:p-0 cursor:pointer rounded-xl h-10 w-full py-5 px-5'>4 PM</label>
                            <label className='flex justify-center items-center border-2 xs:p-0 cursor:pointer rounded-xl h-10 w-full py-5 px-5'>6 PM</label>
                        </div>
                        <div className='grid gap-4 xs:grid-cols-3'>
                            <p className='xs:col-span-3'>November 23</p>
                            <label className='flex justify-center items-center border-2 cursor:pointer rounded-xl h-10 w-full py-5 px-5'>10 AM</label>
                            <label className='flex justify-center items-center border-2 cursor:pointer rounded-xl h-10 w-full py-5 px-5'>11 AM</label>
                        </div>
                        <div className='grid gap-4 xs:grid-cols-3'>
                            <p className='xs:col-span-3'>November 25</p>
                            <label className='flex justify-center items-center border-2 cursor:pointer rounded-xl h-10 w-full py-5 px-5'>9 AM</label>
                            <label className='flex justify-center items-center border-2 cursor:pointer rounded-xl h-10 w-full py-5 px-5'>10 AM</label>
                            <label className='flex justify-center items-center border-2 cursor:pointer rounded-xl h-10 w-full py-5 px-5'>11 AM</label>
                        </div>
                    </div>
                    <div className='grid w-full px-5 place-items-center text-center xs:grid-cols-2 gap-4'>
                        <Link to="/thankyou" className='xs:col-start-2 w-full border-none bg-button-dblue hover:bg-gray-700 border-button-dblue hover:border-gray-700 border-4 text-white py-2 px-5 rounded-xl'>Next</Link>
                        <Link to="/sched" className='xs:row-start-1 w-full border-none bg-gray-500 text-white hover:text-red-500 py-2 px-5 rounded-xl'>Previous</Link>
                    </div>
                </div>
                <div className='hidden lg:inline'>
                    <img
                        src="./public/images/pexels-nataliya-vaitkevich-5842835.jpg"
                        alt=""
                        className=''
                    />
                </div>
            </div>
    </motion.div>
  )
}
