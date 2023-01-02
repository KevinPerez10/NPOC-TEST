import React, {useState} from 'react'
import axios from 'axios'

const RxData = ({open, onClose}) => {
  const [name, setname] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");

  const recordInfo= () => {
    axios.post('http://127.0.0.1:5174/record', {
     f:name,
     ad:address,
     p:phone,
     b:birthday

    }).then(()=>{
        console.log("success");
    })
     };

  if(!open) return null
  return (
    <div className='overlay bg-black/70 fixed w-full h-full z-10 top-0 left-0'>
      <div className='grid place-items-center h-full'>
        <div className='text-xs h-fit w-5/6 flex flex-col justify-center items-center rounded-lg shadow-lg px-10 py-5 bg-white'>
          <h2 className="text-lg text-center mb-4 self-start"> New Patient </h2>
          <hr className='w-full border-black'/>

          {/* Form Group */}
          <div className='py-5'>
            <form className='grid grid-cols-3 w-full'>
                    {/* Name */}
                    <div className="col-span-1 items-center border-b border-gray-400 py-2">
                      <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Name"
                        aria-label="Full name"
                        onChange={(event) => (
                          setname(event.target.value)
                      )}/>
                    </div>
                    {/* Date */}
                    <div className="col-start-3 items-center border-b border-gray-400 py-2">
                      <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Date"
                        aria-label="date"/>
                    </div>
                    {/* Address */}
                    <div className="col-start-1 flex items-center border-b border-gray-400 py-2">
                      <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Address"
                        aria-label="address"
                        onChange={(event) => (
                          setAddress(event.target.value)
                      )}/>
                    </div>
                    {/* Date of Birth */}
                    <div className="col-start-1 flex items-center border-b border-gray-400 py-2">
                      <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="date"
                        placeholder="Date of Birth"
                        aria-label="date of birth"
                        onChange={(event) => (
                          setBirthday(event.target.value)
                      )}/>
                    </div>
                    {/* Phone */}
                    <div className="col-start-3 flex items-center border-b border-gray-400 py-2">
                      <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Phone"
                        aria-label="phone"
                        onChange={(event) => (
                          setPhone(event.target.value)
                      )}/>
                    </div>
                    {/* Rx  */}
                    <h1 className='col-start-1 text-button-dblue text-6xl'>Rx</h1>
            </form>
            <form className='grid grid-cols-3 gap-6 w-full'>
              {/* oculus group */}
              <div className='flex flex-col'>
                {/* Oculus Dextrus */}
                <div className="flex items-center border-b border-gray-400 py-2">
                  <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Oculus Dextrus"
                    aria-label="oculusDextrus"/>
                </div>
                {/* Oculus Sinister */}
                <div className="flex items-center border-b border-gray-400 py-2">
                  <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Oculus Sinister"
                    aria-label="oculusSinister"/>
                </div>
                {/* Additional Lens Power */}
                <div className="flex items-center border-b border-gray-400 py-2">
                  <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Additional Lens Power"
                    aria-label="oculusSinister"/>
                </div>
                {/* Frame */}
                <div className="flex items-center border-b border-gray-400 py-2">
                  <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Frame"
                    aria-label="frame"/>
                </div>
                {/* Lens */}
                <div className="flex items-center border-b border-gray-400 py-2">
                  <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Lens"
                    aria-label="lens"/>
                </div>
                {/* Tint */}
                <div className="flex items-center border-b border-gray-400 py-2">
                  <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Tint"
                    aria-label="tint"/>
                </div>
              </div>
              {/* sph and pupil group */}
              <div className='flex flex-col'>
                <div className="flex justify-between">
                  {/* Sphere Power 1.1 */}
                  <div className="mx-3 before:self-start before:content-['Sphere_Power_1'] before:text-gray-700 flex flex-col items-center border-b border-gray-400 py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      placeholder=""
                      aria-label="spherePower1.1"/>
                  </div>
                  {/* Sphere Power 1.2 */}
                  <div className="mx-3 flex items-center border-b border-gray-400 py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      placeholder=""
                      aria-label="spherePower1.2"/>
                  </div>
                </div>
                <div className="flex justify-between">
                  {/* Sphere Power 1.1 */}
                  <div className="mx-3 before:self-start before:content-['Sphere_Power_2'] before:text-gray-700 flex flex-col items-center border-b border-gray-400 py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      placeholder=""
                      aria-label="spherePower1.1"/>
                  </div>
                  {/* Sphere Power 1.2 */}
                  <div className="mx-3 flex items-center border-b border-gray-400 py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      placeholder=""
                      aria-label="spherePower1.2"/>
                  </div>
                </div>
                {/* Pupillary Distance */}
                <div className="col-span-2 flex items-center border-b border-gray-400 py-2">
                  <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Pupillary Distance"
                    aria-label="pupillaryDistance"/>
                </div>
              </div>
              {/* amount group */}
              <div className='flex flex-col'>
                {/* Amount */}
                <div className="flex items-center border-b border-gray-400 py-2">
                  <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Amount"
                    aria-label="amount"/>
                </div>
                {/* Deposit */}
                <div className="flex items-center border-b border-gray-400 py-2">
                  <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Deposit"
                    aria-label="Deposit"/>
                </div>
                {/* Balance */}
                <div className="flex items-center border-b border-gray-400 py-2">
                  <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Balance"
                    aria-label="balance"/>
                </div>
                {/* Total */}
                <div className="flex items-center border-b border-gray-400 py-2">
                  <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Total"
                    aria-label="total"/>
                </div>
              </div>
            </form>
          </div>

          <hr className='w-full border-black'/>    
          {/* Buttons */}
          <div className="flex justify-between w-full mt-5">
            <button onClick={onClose} className=" col-start-1 flex-shrink-0 border-transparent border-4 text-gray-500 hover:text-red-500 hover:bg-gray-700 text-sm py-1 px-10 rounded-xl shadow-lg" type="button">
                Cancel
            </button>
            <button className="flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-10 rounded-xl shadow-lg"
                    type="submit" onClick={() => {
                      onClose();
                      recordInfo();
                    }}>
                Add
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RxData