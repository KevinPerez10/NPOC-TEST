import React, {useState} from 'react'

export default function RxData({open, onClose}) {
    if(!open) return null
    const [openEdit, setOpenEdit] = useState(false)

    // Data
    const [name, setName] = useState('Laurence Santos')
    const [date, setDate] = useState('1/4/2023')
    const [address, setAddress] = useState('2781 Ingram Road Greensboro, NC 2740')
    const [dateOfBirth, setDateOfBirth] = useState('July 21, 2001')
    const [phone, setPhone] = useState('09247281741')
    
  return (
    <div className='fixed grid place-items-center w-full h-full z-20 top-0 left-0'>
        <div className='w-5/6 h-fit flex flex-col rounded-lg border-2 text-button-dblue shadow-lg px-10 py-5 bg-white'>
            
            {/* Form Group */}
            <div className='py-5'>
                <form className='grid grid-cols-3 w-full'>
                        {/* Name */}
                        <div className="col-span-1 items-center border-gray-400 py-2">
                            {openEdit ? (
                                <input className={`appearance-none bg-transparent border-b-2 text-gray-700/60 w-full mr-3 py-1 px-2 leading-tight focus:outline-none`}
                                    type="text"
                                    placeholder='Name'
                                    aria-label="Full name"
                                    value={name}
                                    onChange = {(event) => setName(event.target.value)}
                                />
                            ) : (
                                <p className='text-2xl'>
                                    {`${name}`}
                                </p>
                            )}
                        </div>
                        {/* Date */}
                        <div className="col-start-3 items-center text-right text-gray-400 border-gray-400 py-2">
                            {openEdit ? (
                                <input className={`appearance-none text-right bg-transparent border-b-2 text-gray-700/60 w-full mr-3 py-1 px-2 leading-tight focus:outline-none`}
                                    type="text"
                                    placeholder='Date'
                                    aria-label="date"
                                    value={date}
                                    onChange = {(event) => setDate(event.target.value)}
                                />
                            ) : (
                                <p>
                                    {`${date}`}
                                </p>
                            )}
                        </div>
                        {/* Address */}
                        <div className="col-start-1 flex items-center border-gray-400 py-2">
                            {openEdit ? (
                                <input className={`appearance-none bg-transparent border-b-2 text-gray-700/60 w-full mr-3 py-1 px-2 leading-tight focus:outline-none`}
                                    type="text"
                                    placeholder='Address'
                                    aria-label="date"
                                    value={address}
                                    onChange = {(event) => setAddress(event.target.value)}
                                />
                            ) : (
                                <p>
                                    {`${address}`}
                                </p>
                            )}
                        </div>
                        {/* Date of Birth */}
                        <div className="col-start-1 flex items-center border-gray-400 py-2">
                            {openEdit ? (
                                <input className={`appearance-none bg-transparent border-b-2 text-gray-700/60 w-full mr-3 py-1 px-2 leading-tight focus:outline-none`}
                                    type="text"
                                    placeholder='Date Of Birth'
                                    aria-label="date of birth"
                                    value={dateOfBirth}
                                    onChange = {(event) => setDateOfBirth(event.target.value)}
                                />
                            ) : (
                                <p>
                                    {`${dateOfBirth}`}
                                </p>
                            )}
                        </div>
                        {/* Phone */}
                        <div className="col-start-3 row-start-2 text-right border-gray-400 py-2">
                            {openEdit ? (
                                <input className={`appearance-none text-right bg-transparent border-b-2 text-gray-700/60 w-full mr-3 py-1 px-2 leading-tight focus:outline-none`}
                                    type="text"
                                    placeholder='Phone'
                                    aria-label="phone"
                                    value={phone}
                                    onChange = {(event) => setPhone(event.target.value)}
                                />
                            ) : (
                                <p>
                                    {`${phone}`}
                                </p>
                            )}
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

            {/* Button Group */}
            <div className='flex justify-between gap-2 w-full'>
                <div
                    className='w-1/4 bg-gray-500 self-start text-center cursor-pointer hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-10 rounded-xl shadow-lg'
                    onClick={onClose}
                    >
                    Cancel
                </div>
                <div
                    className={`w-1/4 ml-auto  bg-gray-500 self-start text-center cursor-pointer hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-10 rounded-xl shadow-lg ${openEdit ? '' : 'hidden'}`}
                    onClick={() => setOpenEdit(false)}
                    >
                    Cancel Edit
                </div>
                <div
                    className='w-1/4 bg-button-dblue border-button-dblue self-start text-center cursor-pointer hover:bg-gray-700 hover:border-gray-700 text-sm border-4 text-white py-1 px-10 rounded-xl shadow-lg'
                    onClick={() => setOpenEdit(true)}
                    >
                    Edit
                </div>
            </div>
        </div>
    </div>
  )
}
