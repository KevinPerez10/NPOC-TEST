import React, {useState} from 'react'
import {BrowserRouter as Link } from 'react-router-dom'

export default function AdminLogIn({Login, error}) {
    const [details, setDetails] = useState({email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

  return (
    <div>
        <nav className="grid font-poppins hover:cursor-pointer fixed">
            <div className="text-white flex items-center p-5">
                <Link to="/" className='flex items-center'>
                    <img className="w-10" src="./images/logo.png" alt="" />
                    <p className="text-3xl">NPOC</p>
                </Link>
            </div>
        </nav>
        <div className='text-white h-screen grid place-items-center bg-button-dblue'>
            <div className='min-h-fit w-fit flex flex-col justify-center items-center shadow-lg p-20'>
                <h2 className="text-center mb-4"> Welcome! Please login to your account </h2>
                {(error != "") ? (<div className="error">{error}</div>) : ""}
                <form className='grid grid-cols-2 gap-4' onSubmit={submitHandler}>
                    <div className="col-span-2 flex items-center border-b border-gray py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text"
                                placeholder="Email"
                                aria-label="email"
                                onChange={e => setDetails({...details, email: e.target.value})}
                                value={details.email}/>
        
                    </div>
                    <div className="col-span-2 flex items-center border-b border-gray py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text"
                                placeholder="Password"
                                aria-label="password"
                                onChange={e => setDetails({...details, password: e.target.value})}
                                value={details.password}/>
        
                    </div>
                    <Link /*to="/dashboard"*/ className='col-start-2'>
                        <button className="w-full flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded"
                                type="submit">
                            Log In
                        </button>
                    </Link>
                </form>
                <div className="w-full text-center mt-10">
                    Not the owner? <Link to="/signup" className='text-link'>Sign Up</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
