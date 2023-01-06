import React, {useState} from 'react'
import Appointments__Calendar from './Appointments__Calendar'

export default function Appointments__Calendar__Edit({open, onClose}) {
  if(!open) return null
  const [isOpen, setIsOpen] = useState(false)

  //Inserting data
  const [date, setDate] = useState("");
  const [selected, setSelected] = useState('whole')
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  const insertInfo= () => {
    axios.post('http://127.0.0.1:5174/record///////////', {
     d:date,
     s:selected

    }).then(()=>{
        console.log("success");
    })
     };

  const setCalendar= () => {
    var myDate1 = new Date(date1),
    month1 = myDate1.getMonth(),
    day1 = myDate1.getDate(),
    year1 = myDate1.getFullYear();

    var myDate2 = new Date(date2),
    month2 = myDate2.getMonth(),
    day2 = myDate2.getDate(),
    year2 = myDate2.getFullYear();

    /*for(ctr=day1+1; ctr <= day2+1; ctr++){

    }*/
    console.log(myDate1,month1+1,day1,year1,myDate2,month2+1,day2,year2);

    insertInfo();
  };

  return (

    <div className='bg-black/70 fixed grid place-items-center w-full h-full z-20 top-0 left-0'>
        <div className='flex flex-col justify-center items-center gap-5 w-5/6 h-fit rounded-lg shadow-lg px-10 py-5 bg-white'>
            <div className='text-3xl'>Edit Calendar</div>
            <div className='flex w-full justify-between'>
              <Appointments__Calendar/>
              <div className='w-full grid place-items-center'>
                <div className='rounded-xl shadow-inner border-2 p-3 flex flex-col justify-center items-center gap-5'>
                  <p className='text-xl self-start'>
                    Set Availability:
                  </p>
                  <div className='flex gap-3'>
                    <input className='text-link border-b-2' 
                      type="date" 
                      onChange={(event) => (
                        setDate1(event.target.value)
                    )} />
                    <input className='text-link border-b-2' 
                      type="date" 
                      onChange={(event) => (
                        setDate2(event.target.value)
                      )}/>
                  </div>
                  <div className='flex bg-gray-300 rounded-full shadow-inner'>
                    <div
                      className={`${selected === 'whole'? 'bg-link' : 'bg-gray-300'} rounded-l-full px-3 py-1 text-black hover:cursor-pointer transition duration-500 ease-in-out transform`}
                      onClick={() => setSelected('whole')}
                      >
                      Whole Day
                    </div>
                    <div
                      className={`${selected === 'morning'? 'bg-morning' : 'bg-gray-300'} px-3 py-1 text-black hover:cursor-pointer transition duration-500 ease-in-out transform`}
                      onClick={() => setSelected('morning')}
                      >
                      Morning
                    </div>
                    <div
                      className={`${selected === 'afternoon'? 'bg-afternoon' : 'bg-gray-300'} rounded-r-full px-3 py-1 text-black hover:cursor-pointer transition duration-500 ease-in-out transform`}
                      onClick={() => setSelected('afternoon')}
                      >
                      Afternoon
                    </div>
                  </div>
                  <div className='flex bg-gray-300 rounded-full shadow-inner'>
                    <div
                      className={`px-4 py-2 rounded-full text-center cursor-pointer transition duration-500 ease-in-out transform ${isOpen ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                      onClick={() => setIsOpen(true)}
                      >
                      Open
                    </div>
                    <div
                      className={`px-4 py-2 rounded-full text-center cursor-pointer transition duration-500 ease-in-out transform ${!isOpen ? 'bg-gray-500 text-red-500' : 'bg-gray-300 text-red-500'}`}
                      onClick={() => setIsOpen(false)}
                      >
                      Close
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
