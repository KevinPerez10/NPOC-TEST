import React, { useState } from 'react'
import {Link, NavLink, Outlet} from 'react-router-dom'
import { motion } from 'framer-motion'
import AdminLogIn from './AdminLogIn';

export default function Dashboard() {
    const adminUser = {
        name: "Kevin",
        email: "1",
        password: "1"
    };
    
    const [user, setUser] = useState({email:""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if(details.email == adminUser.email && details.password == adminUser.password)
        {
            console.log("Logged in");
            setUser({
                email: details.email
            })
        } else {
        console.log("Details do not match!");
        setError("Details do not match!");
        }
    }

    const Logout = () => {
        setUser({
            email: ""
        })
    }

    //handle hamburger
    const [open, setOpen] = useState(false)


    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className='w-full'
            >
            {(user.email != "") ? (
            <div className='flex flex-col font-poppins lg:flex-row h-screen bg-bg-dashboard z-0'>
                {/* left panel */}
                <div className='text-center flex lg:flex-col gap-1 items-center bg-button-dblue text-white'>
                    <Link to="/" className='flex items-center ml-5 font-gilmer lg:mx-5 my-5'>
                        <img className='w-10' src="./images/logo.png" alt="" />
                        <h1 className='ml-3'>Nolasco - Perez Optical Clinic</h1>
                    </Link>
                    <div className='hidden lg:flex items-center text-xs'>
                        <img className='w-10 m-3 rounded-full' src="./images/pfp.png" alt="" />
                        {adminUser.name} <br />
                        Administrator
                    </div>
                    
                    {/* navbar */}
                    <div
                        onClick={() => setOpen(!open)}
                        className='hover:cursor-pointer lg:hidden ml-auto text-3xl mr-5 self-center'>
                        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    </div>
                    <nav className={`lg:mt-10 lg:py-0 py-3 z-10 flex flex-col gap-2 w-full bg-button-dblue lg:static absolute top-20 transition-all duration-500 ease-in ${open ? 'top-50' : 'top-[-490px]'}`}>
                        <NavLink
                            to="/dashboard"
                            replace
                            isActive={(location) => location.pathname === '/dashboard'}
                            className={`hover:bg-gray-700 px-5 py-2 mx-3 rounded-full transition-all ${location.pathname === '/dashboard' ? 'bg-button-lblue' : ''}`}
                        >
                            Dashboard
                        </NavLink>

                        <NavLink
                            to="/dashboard/records"
                            replace
                            isActive={(location) => location.pathname === '/dashboard/records'}
                            className={`hover:bg-gray-700 px-5 py-2 mx-3 rounded-full transition-all ${location.pathname === '/dashboard/records' ? 'bg-button-lblue' : ''}`}
                        >
                            Records
                        </NavLink>

                        <NavLink
                            to="/dashboard/appointments"
                            replace
                            isActive={(location) => location.pathname === '/dashboard/appointments'}
                            className={`hover:bg-gray-700 px-5 py-2 mx-3 rounded-full transition-all ${location.pathname === '/dashboard/appointments' ? 'bg-button-lblue' : ''}`}
                        >
                            Appointments
                        </NavLink>
                        <div className='lg:hidden flex self-center'>
                            <div className='grid place-items-center text-3xl w-full mx-3 hover:cursor-pointer' src="./svg/bell-svgrepo-com.svg" alt="">
                                <ion-icon name="notifications-outline"></ion-icon>
                            </div>
                            <div className='grid place-items-center text-3xl w-full mx-3 hover:cursor-pointer' alt="" onClick={Logout}>
                                <ion-icon name="log-out-outline"></ion-icon>
                            </div>
                            <img className='w-10 m-3 hover:cursor-pointer rounded-full' src="./images/pfp.png" alt="" />
                        </div>
                    </nav>
                </div>
                {/* main content */}
                <div className='flex flex-col justify-between w-full h-full'>
                    <div className='flex justify-center items-center lg:sticky bg-footer'>
                        <div className='p-5'>Welcome, <span>{adminUser.name}</span>!</div>
                        <div className='hidden lg:flex ml-auto'>
                            <div className='grid place-items-center text-3xl w-full mx-3 hover:cursor-pointer' src="./svg/bell-svgrepo-com.svg" alt="">
                                <ion-icon name="notifications-outline"></ion-icon>
                            </div>
                            <div className='grid place-items-center text-3xl w-full mx-3 hover:cursor-pointer' alt="" onClick={Logout}>
                                <ion-icon name="log-out-outline"></ion-icon>
                            </div>
                            <img className='w-10 m-3 hover:cursor-pointer rounded-full' src="./images/pfp.png" alt="" />
                        </div>
                    </div>
                    {/* content */}
                    <div className='overflow-auto md:py-5 h-full'>
                        <Outlet/>
                    </div>
                    {/* footer */}
                    <div className='flex flex-col sm:flex-row justify-between items-center bg-footer py-5 px-5'>
                        <p>© 2022 NPOCadmin Dashboard</p>
                        <p>Designed by: NPOC Admin</p>
                    </div>
                    
                </div>
            </div>
            ) : (
                <AdminLogIn Login={Login} error={error}/>
            )}
        </motion.div>
    )
}
