import React, {useState} from 'react'
import {BrowserRouter as Link } from 'react-router-dom'
import AdminLogIn from './AdminLogIn';

export default function Dashboard() {
    //start
    const adminUser = {
        name: "admin1",
        email: "admin@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({email: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.email == adminUser.email && details.password == adminUser.password)
        {
            console.log("Logged in");
            setUser({
                email: details.email
            });
        }else {
            console.log("Details do not match!");
            setError("Details do not match!");
        }
    }

    const Logout = () => {
        setUser({email: ""});
    }
    //end
  return (
    <div className='grid grid-cols-2 gap-4 place-items-center'>
            {(user.email != "") ? (
                <div className="welcome">
                    <h1>Welcome, <span>{adminUser.name}</span></h1>
                    <button>Logout</button>
                    <div className='row-span-3'>
                     Nolasco - Perez Optical Clinic
                    </div>
                    <div className=''>
                     Dashboard
                    </div>
                    <div className=''>
                    Main
                    </div>
                    <div>
                     Footer
                    </div>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <AdminLogIn Login={Login} error={error}/>
            )}

    </div>
  )
}
