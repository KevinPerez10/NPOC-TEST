import React from 'react'
import {Link} from 'react-router-dom';

export default function Nav(props) {
  return (
    <nav className={`font-poppins hover:cursor-pointer fixed ${props.className}`}>
        <div className={`flex items-center p-5 ${props.childClassName}`}>
            <Link to="/" className='flex items-center'>
                <img className={`lg:w-10 w-20 ${props.logo}`} src="./images/logo.png" alt="" />
                <p className={`text-3xl ml-2 ${props.text}`}>NPOC</p>
            </Link>
        </div>
    </nav>
  )
}
