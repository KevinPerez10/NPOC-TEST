import React, {useState} from 'react'
import Appointments__Calendar from './Appointments__Calendar'
import axios from 'axios'

export default function Appointments__Calendar__Edit({open, onClose}) {
  if(!open) return null
  //Inserting data
  const [isOpen, setIsOpen] = useState('close')
  const [selected, setSelected] = useState('whole')
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  const setCalendar= () => {

    var myDate1 = new Date(date1),
    month1 = myDate1.getMonth(),
    day1 = myDate1.getDate(),
    year1 = myDate1.getFullYear();

    var myDate2 = new Date(date2),
    month2 = myDate2.getMonth(),
    day2 = myDate2.getDate(),
    year2 = myDate2.getFullYear();

    for(var ctr=day1; ctr <= day2; ctr++){
      var tdate = "";
      var mon = month1+1;
      tdate = tdate + year1.toString() + "-";
      tdate = tdate + mon.toString() + "-";
      tdate = tdate + ctr.toString();

      axios.post('http://127.0.0.1:5174/availability', {
     d:tdate,
     s:selected,
     i:isOpen

    })
    };

    console.log(myDate1,month1+1,day1,year1,myDate2,month2+1,day2,year2);
  };

  //handle weekdays
  const [openSunday, setOpenSunday] = useState(false)

  return (

    <div className='bg-black/70 fixed grid place-items-center w-full h-full z-20 top-0 left-0'>
        <div className='flex flex-col justify-center items-center gap-5 w-5/6 h-fit rounded-lg shadow-lg px-10 py-5 bg-white'>
            <div className='text-3xl'>Edit Calendar</div>
            <div className='flex w-full justify-between'>
              <Appointments__Calendar/>
              <div className='w-full grid place-items-center border-2'>
                <div className='rounded-xl shadow-inner border-2 p-3 flex flex-col  items-center gap-5 h-4/5'>
                  <p className='text-xl self-start'>
                    Availability:
                  </p>
                  <p className='text-sm self-start'>
                    Choose the days and times you want to offer appointments.
                  </p>
                  <div className='flex flex-col w-full items-center overflow-auto'>
                    <div className='w-full flex flex-col items-center'>
                      <p
                        onClick={() => setOpenSunday(!openSunday)}
                        className={`flex items-center rounded-sm hover:bg-gray-200/75 cursor-pointer w-4/5 p-2 ${openSunday ? 'bg-gray-200/75' : ''}`}
                      >
                        Sunday
                        <div
                          className='ml-auto'
                        >
                          <ion-icon name={openSunday ? 'chevron-up' : 'pencil'}></ion-icon>
                        </div>
                      </p>
                      <div className={`w-4/5 flex justify-center pb-3 ${openSunday ? 'block bg-gray-200/75' : 'hidden'}`}>
                        <div className='flex gap-5 p-3 rounded-md bg-white'>
                          <div className='flex flex-col'>
                            <p>
                              Start
                            </p>
                            <input className='text-button-dblue rounded-md p-1 border-2'
                              type="time"
                              onChange={(event) => (
                                setDate1(event.target.value)
                            )} />
                          </div>
                          <div className='flex flex-col '>
                            <p>
                              End
                            </p>
                            <input className='text-button-dblue rounded-md p-1 border-2'
                              type="time"
                              onChange={(event) => (
                                setDate1(event.target.value)
                            )} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex w-full items-center justify-between'>
              <button onClick={onClose} className='w-1/4 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-10 rounded-xl shadow-lg'>
                  Cancel
              </button>
              <button onClick={()=>{
                onClose();
                setCalendar();
              }} className='w-1/4 bg-button-dblue hover:bg-gray-700 border-button-dblue hover:border-gray-700 text-sm border-4 text-white py-1 px-10 rounded-xl shadow-lg'>
                  Save
              </button>
            </div>
        </div>
    </div>
  )
}
