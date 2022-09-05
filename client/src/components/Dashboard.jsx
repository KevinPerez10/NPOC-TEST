import React from 'react'
import ComponentsDashboard from './components__dashboard/ComponentsDashboard'
import ComponentsRecords from './components__dashboard/ComponentsRecords'
import ComponentsAppointments from './components__dashboard/ComponentsAppointments'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

export default function Dashboard() {
  return (
    <Router>
        <div className='flex flex-col lg:flex-row h-screen bg-bg-dashboard'>
            {/* left panel */}
            <div className='text-center flex flex-col items-center bg-button-dblue text-white'>
                <Link to="/" className='flex items-center font-gilmer mx-5 my-5'>
                    <img className='w-10' src="./images/logo.png" alt="" />
                    <h1>Nolasco - Perez Optical Clinic</h1>
                </Link>
                <div className='hidden lg:flex items-center text-xs'>
                    <img className='w-10 m-3 rounded-full' src="./images/pfp.png" alt="" />
                    Kevin Park <br />
                    Administrator
                </div>
            </div>
            {/* main content */}
            <div className='flex flex-col justify-between w-full h-full'>
                {/* navbar */}
                <div className='flex justify-between items-center lg:sticky bg-footer'>
                    <div className='p-5'>Welcome, Kevin!</div>
                    <nav className='hidden md:flex'>
                        <Link to="/ComponentsDashboard" className='px-5 py-2 mx-3 focus:bg-button-lblue focus:text-white rounded-full transition-all'>Dashboard</Link>
                        <Link to="/ComponentsRecords" className='px-5 py-2 mx-3 focus:bg-button-lblue focus:text-white rounded-full transition-all'>Records</Link>
                        <Link to="/ComponentsAppointments" className='px-5 py-2 mx-3 focus:bg-button-lblue focus:text-white rounded-full transition-all'>Appointments</Link>
                    </nav>
                    <div className='flex'>
                        <img className='w-5' src="./svg/bell-svgrepo-com.svg" alt="" />
                        <img className='w-10 m-3 rounded-full' src="./images/pfp.png" alt="" />
                    </div>
                </div>
            
                <div className='overflow-auto flex flex-col justify-between h-full'>
                    <div className='py-5'>
                        <Switch>
                            <Route path="/ComponentsDashboard" component={ComponentsDashboard}/>
                            <Route path="/ComponentsRecords" component={ComponentsRecords}/>
                            <Route path="/ComponentsAppointments" component={ComponentsAppointments}/>
                        </Switch>
                    </div>
                    {/* footer */}
                    <div className='flex flex-col sm:flex-row justify-between items-center bg-footer py-5 px-5'>
                        <p>© 2022 NPOCadmin Dashboard</p>
                        <p>Designed by: NPOC Admin</p>
                    </div>
                </div>
            </div>
        </div>
    </Router>
  )
}
