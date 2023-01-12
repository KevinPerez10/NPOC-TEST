import React from 'react';
import Nav from './Nav';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion'

export default function HomePage ()  {
    return (
            <motion.div className="text-center text-white font-poppins w-full h-full grid place-items-center items-center"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}>
                <Nav className='text-white fixed justify-center w-full self-center top-0' childClassName='justify-center' text='hidden lg:flex'/>
                
                <div className="xxs:bg-center bg-npoc--landing__page bg-cover bg-no-repeat h-screen w-full">
                    <div className='flex flex-col justify-center items-center bg-gray-900/40 h-screen w-full'>
                        <h1 className="text-2xl font-gilmer xs:text-4xl lg:text-5xl xl:text-7xl text-white w-4/5">
                            MORE THAN MEETS THE EYE
                        </h1>
                        <div className="text-white text-xs xs:text-lg">
                            Need an appointment?
                        </div>
                        <Link to='/signup'>
                            <button className="text-sm my-5 px-10 py-3 text-white md:text-md lg:text-md rounded-lg bg-button-dblue hover hover:opacity-80">
                                BOOK NOW
                            </button>
                        </Link>
                    </div>
                </div>

                <div className='text-white font-gilmer flex flex-col md:flex-row md:justify-center md:items-center w-full h-screen items-center'>
                    <Link to='/signup' className='md:w-1/2 grid place-items-center w-full h-full xxs:bg-center bg-eye--exam bg-cover bg-no-repeat text-5xl hover:cursor-pointer'>
                        <div className='bg-gray-900/40 hover:bg-gray-500/40 transition duration-150 ease-out w-full h-full grid place-items-center'>
                            NEED AN EYE EXAM?
                        </div>
                    </Link>
                    <Link to='/signup' className='md:w-1/2 grid place-items-center w-full h-full xxs:bg-center bg-new--frame bg-cover bg-no-repeat text-5xl hover:cursor-pointer'>
                        <div className='bg-gray-900/40 hover:bg-gray-500/40 transition duration-150 ease-out w-full h-full grid place-items-center'>
                            NEED A NEW FRAME?
                        </div>
                    </Link>
                </div>

                <div className='text-black flex flex-col items-center w-full mt-10'>
                    <h1 className='text-4xl mb-10'>About Us</h1>
                    <div className='md:flex w-full'>
                        <p className='md:w-1/2 md:mb-0 mb-10 text-xl flex justify-center items-center px-10'>
                            Welcome to Nolasco-Perez Optical Clinic, where fashion and function meet. We specialize in eyewear that enhances your vision and elevates your personal style. Whether you're in need of new prescription glasses or just looking for the perfect pair of sunglasses, we have something for everyone. 
                        </p>
                        <div className='md:w-1/2 md:mb-0 mb-10'>
                            <img className='w-full' src="./public/images/pexels-antoni-shkraba-6749792.jpg" alt="" />
                        </div>
                    </div>
                    <div className='md:flex w-full'>
                        <p className='md:order-2 md:w-1/2 md:mb-0 mb-10 text-xl flex justify-center items-center px-10'>
                            With a wide selection of frames from the latest designer collections to timeless classics, we're confident you'll find the perfect pair to suit your needs and taste. Our experienced optometrists are here to help you find the perfect fit and ensure your complete satisfaction.
                        </p>
                        <div className='md:w-1/2 md:flex-1'>
                            <img className='w-full' src="./public/images/120301994_412134953091990_4958032998602299568_n.jpg" alt="" />
                        </div>
                    </div>
                    <div className='my-10 text-xl w-4/5'>
                        Dr. Celna N. Perez together with her husband/manager Elcris Perez has been in the industry for almost a decade. Since then, they just only work for different people but they have already worked with various companies and schools.
                    </div>
                </div>

                <footer className="text-black py-3 mt-auto px-5 grid xs:text-lg md:grid-cols-3 md:gap-4 w-full">
                        <div className="md:text-left flex flex-col md:flex-row justify-center gap-3">
                            <div className='cursor-pointer flex justify-center items-center'>
                                <ion-icon name="navigate-outline"></ion-icon>
                            </div>
                            <div className='flex flex-col justify-center'>
                                <b>NOLASCO-PEREZ OPTICAL CLINIC</b>
                                <p>R2RP+JFQ San Jose del Monte Bulacan</p>
                            </div>
                        </div>
                        <div className="my-auto">
                            CONNECT WITH US:
                            <div className="flex items-center justify-center m-2">
                                <div className="w-10 flex justify-center hover:cursor-pointer">
                                    <a href="https://www.facebook.com/NP.Optical">
                                        <ion-icon name="logo-facebook"></ion-icon>
                                    </a>    
                                </div>
                                <div className="w-10 flex justify-center hover:cursor-pointer">
                                    <a href="">
                                        <ion-icon name="logo-instagram"></ion-icon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="my-auto md:text-right">
                            Own this site? click <Link to="/dashboard" className="text-link" href="">here</Link>
                        </div>
                </footer>
            </motion.div>
    );
}