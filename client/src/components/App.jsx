import './App.css'
import HomePage from "./HomePage"
import SignUp from "./SignUp"
import LogIn from './LogIn'
import ForgotPass from './ForgotPass'
import Sched from './Sched'
import Slots from './Slots'
import ThankYou from './ThankYou'
import AdminLogIn from './AdminLogIn'
import Dashboard from './Dashboard'
import Main from './components__dashboard/Main'
import Records from './components__dashboard/Records'
import RxData from './components__records/RxData'
import Appointments from './components__dashboard/Appointments'
import { Route, Routes } from 'react-router-dom'

// transitions for routing
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/forgotpass' element={<ForgotPass/>}/>
      <Route path='/sched' element={<Sched/>}/>
      <Route path='/slots' element={<Slots/>}/>
      <Route path='/thankyou' element={<ThankYou/>}/>
      <Route path='/adminlogin' element={<AdminLogIn/>}/>
      <Route path='/dashboard' element={<Dashboard/>}>
        <Route index element={<Main/>}/>
        <Route path='records' element={<Records/>}>
          <Route path='rxdata' element={<RxData/>}/>
        </Route>
        <Route path='appointments' element={<Appointments/>}/>
      </Route>
    </Routes>
  )
}

export default App
