import React, {useState, useEffect} from 'react'
import Axios from 'axios'

export default function RxData({open, onClose, props}) {
    if(!open) return null
    const [openEdit, setOpenEdit] = useState(false)
    // Data
    const [name, setName] = useState('Laurence Santos')
    const [date, setDate] = useState('1/4/2023')
    const [address, setAddress] = useState('2781 Ingram Road Greensboro, NC 2740')
    const [dateOfBirth, setDateOfBirth] = useState('July 21, 2001')
    const [phone, setPhone] = useState('09247281741')

    const [oculusDextrus, setOculusDextrus] = useState('-5.50')
    const [oculusSinister, setOculusSinister] = useState('-5.50')
    const [lensPower, setLensPower] = useState('')
    const [frame, setFrame] = useState('Metal Frame')
    const [lens, setLens] = useState('SV Blue Spinning Photo')
    const [tint, setTint] = useState('Multicoated')

    const [sphP11, setSphP11] = useState('-1.00')
    const [sphP12, setSphP12] = useState('180')
    const [sphP21, setSphP21] = useState('-0.75')
    const [sphP22, setSphP22] = useState('180')

    const [amount, setAmount] = useState(0)
    const [deposit, setDeposit] = useState(0)
    const [balance, setBalance] = useState(0)
    const [total, setTotal] = useState(0)
    const [records, setRecords] = useState([])
    const [patientID, setPatientID] = useState(null)
    useEffect(() => {
        Axios.post('http://127.0.0.1:5174/recordbyrid', {
          id:props
        }).then((response) => {
        setRecords(response.data);
        console.log(response.data[0].patientID);

        });
      }, []);

    // This is for the computation of balance
    // const handleAmountChange = (event => {
    //     setAmount(event.target.value)
    // })

    // const handleDepositChange = (event => {
    //     setDeposit(event.target.value)
    // })
    
    // const handleSubmit = (event => {
    //     event.preventDefault()
    //     setBalance(amount - deposit)
    //     setTotal(amount - deposit+ total)
    // })
    
  return (
    <div className='fixed grid place-items-center w-full h-full z-20 top-0 left-0'>
        <div className='w-5/6 h-fit flex flex-col gap-5 rounded-lg border-2 text-button-dblue shadow-lg px-10 py-5 bg-white'>
            
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
                    {records.map((val,key) => {
                return(
                    <div className='flex flex-col w-full'>
                        {/* Oculus Dextrus */}
                        <div className="flex items-center border-gray-400 py-2">
                            {openEdit ? (
                                <input className={`appearance-none bg-transparent border-b-2 text-gray-700/60 w-full mr-3 py-1 px-2 leading-tight focus:outline-none`}
                                    type="text"
                                    placeholder='Oculus Dextrus'
                                    aria-label='Oculus Dextrus'
                                    value={oculusDextrus}
                                    onChange = {(event) => setOculusDextrus(event.target.value)}
                                />
                                ) : (
                                <p>
                                    {val.od}
                                </p>
                            )}
                        </div>
                        {/* Oculus Sinister */}
                        <div className="flex items-center border-gray-400 py-2">
                            {openEdit ? (
                                <input className={`appearance-none bg-transparent border-b-2 text-gray-700/60 w-full mr-3 py-1 px-2 leading-tight focus:outline-none`}
                                    type="text"
                                    placeholder='Oculus Sinister'
                                    aria-label='Oculus Sinister'
                                    value={oculusSinister}
                                    onChange = {(event) => setOculusSinister(event.target.value)}
                                />
                                ) : (
                                <p>
                                    {val.os}
                                </p>
                            )}
                        </div>
                        {/* Additional Lens Power */}
                        <div className="flex items-center border-gray-400 py-2">
                            {openEdit ? (
                                <input className={`appearance-none bg-transparent border-b-2 text-gray-700/60 w-full mr-3 py-1 px-2 leading-tight focus:outline-none`}
                                    type="text"
                                    placeholder='Additional Lens Power'
                                    aria-label='Additional Lens Power'
                                    value={lensPower}
                                    onChange = {(event) => setLensPower(event.target.value)}
                                />
                                ) : (
                                    <p className={val.addLP ? '' : 'text-gray-700/60 pl-3 border-b-2 w-full'}>
                                    {val.addLP ? val.addLP : 'Additional Lens Power'}
                                </p>
                            )}
                        </div>
                        {/* Frame */}
                        <div className="flex items-center border-gray-400 py-2">
                            {openEdit ? (
                                <input className={`appearance-none bg-transparent border-b-2 text-gray-700/60 w-full mr-3 py-1 px-2 leading-tight focus:outline-none`}
                                    type="text"
                                    placeholder='Frame'
                                    aria-label='Frame'
                                    value={frame}
                                    onChange = {(event) => setFrame(event.target.value)}
                                />
                                ) : (
                                <p>
                                    {val.fr}
                                </p>
                            )}
                        </div>
                        {/* Lens */}
                        <div className="flex items-center border-gray-400 py-2">
                            {openEdit ? (
                                <input className={`appearance-none bg-transparent border-b-2 text-gray-700/60 w-full mr-3 py-1 px-2 leading-tight focus:outline-none`}
                                    type="text"
                                    placeholder='Lens'
                                    aria-label='Lens'
                                    value={lens}
                                    onChange = {(event) => setLens(event.target.value)}
                                />
                                ) : (
                                <p>
                                    {val.ln}
                                </p>
                            )}
                        </div>
                        {/* Tint */}
                        <div className="flex items-center border-gray-400 py-2">
                            {openEdit ? (
                                <input className={`appearance-none bg-transparent border-b-2 text-gray-700/60 w-full mr-3 py-1 px-2 leading-tight focus:outline-none`}
                                    type="text"
                                    placeholder='Tint'
                                    aria-label='Tint'
                                    value={tint}
                                    onChange = {(event) => setTint(event.target.value)}
                                />
                                ) : (
                                <p>
                                    {val.tn}
                                </p>
                            )}
                        </div>
                    </div>
                    )
                })}
                    {/* sph and pupil group */}
                    {records.map((val,key) => {
                return(
                    <div className='flex flex-col justify-around w-full'>
                        {/* SPHERE POWER 1 */}
                        <div className="flex flex-col justify-between w-full">
                            <p>
                                Sphere Power 1
                            </p>
                            <div className='flex w-full justify-around'>
                                {/* Sphere Power 1.1 */}
                                <div className="mx-3 flex flex-col items-center border-gray-400 py-2">
                                    {openEdit ? (
                                        <input className={`appearance-none bg-transparent border-b-2 text-gray-700/60 w-full mr-3 py-1 px-2 leading-tight focus:outline-none`}
                                            type="text"
                                            placeholder='Sphere Power 1.1'
                                            aria-label='Sphere Power 1.1'
                                            value={sphP11}
                                            onChange = {(event) => setSphP11(event.target.value)}
                                        />
                                        ) : (
                                        <p>
                                            {val.sphere1_1}
                                        </p>
                                    )}
                                </div>
                                {/* Sphere Power 1.2 */}
                                <div className="mx-3 flex items-center border-gray-400 py-2">
                                    {openEdit ? (
                                        <input className={`appearance-none bg-transparent border-b-2 text-gray-700/60 w-full mr-3 py-1 px-2 leading-tight focus:outline-none`}
                                            type="text"
                                            placeholder='Sphere Power 1.2'
                                            aria-label='Sphere Power 1.2'
                                            value={sphP12}
                                            onChange = {(event) => setSphP12(event.target.value)}
                                        />
                                        ) : (
                                        <p>
                                            {val.sphere1_2}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* SPHERE POWER 2 */}
                        <div className="flex flex-col justify-between w-full">
                            <p>
                                Sphere Power 2
                            </p>
                            <div className='flex w-full justify-around'>
                                {/* Sphere Power 2.1 */}
                                <div className="mx-3 flex flex-col items-center border-gray-400 py-2">
                                    {openEdit ? (
                                        <input className={`appearance-none bg-transparent border-b-2 text-gray-700/60 w-full mr-3 py-1 px-2 leading-tight focus:outline-none`}
                                            type="text"
                                            placeholder='Sphere Power 2.1'
                                            aria-label='Sphere Power 2.1'
                                            value={sphP21}
                                            onChange = {(event) => setSphP21(event.target.value)}
                                        />
                                        ) : (
                                        <p>
                                            {val.sphere2_1}
                                        </p>
                                    )}
                                </div>
                                {/* Sphere Power 2.2 */}
                                <div className="mx-3 flex items-center border-gray-400 py-2">
                                    {openEdit ? (
                                        <input className={`appearance-none bg-transparent border-b-2 text-gray-700/60 w-full mr-3 py-1 px-2 leading-tight focus:outline-none`}
                                            type="text"
                                            placeholder='Sphere Power 2.2'
                                            aria-label='Sphere Power 2.2'
                                            value={sphP22}
                                            onChange = {(event) => setSphP22(event.target.value)}
                                        />
                                        ) : (
                                        <p>
                                            {val.sphere2_2}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}
                    {/* Amount group */}
                    <div className='flex flex-col place-self-center w-full'>
                        {/* Amount */}
                        <div className="flex items-center border-gray-400 py-2">
                            {openEdit ? (
                                <input className={`appearance-none bg-transparent border-b-2 text-gray-700/60 w-full mr-3 py-1 px-2 leading-tight focus:outline-none`}
                                    type="number"
                                    placeholder='Amount'
                                    aria-label='Amount'
                                    value={amount}
                                    onChange = {(event) => setAmount(event.target.value)}
                                />
                            ) : (
                                <p className={amount ? '' : 'text-gray-700/60 pl-3 border-b-2 w-full'}>
                                    {amount ? amount : 'Amount'}
                                </p>
                            )}
                        </div>
                        {/* Deposit */}
                        <div className="flex items-center border-gray-400 py-2">
                            {openEdit ? (
                                <input className={`appearance-none bg-transparent border-b-2 text-gray-700/60 w-full mr-3 py-1 px-2 leading-tight focus:outline-none`}
                                    type="number"
                                    placeholder='Deposit'
                                    aria-label='Deposit'
                                    value={deposit}
                                    onChange = {(event) => setDeposit(event.target.value)}
                                />
                            ) : (
                                <p className={deposit ? '' : 'text-gray-700/60 pl-3 border-b-2 w-full'}>
                                    {deposit ? deposit : 'Deposit'}
                                </p>
                            )}
                        </div>
                        {/* Balance */}
                        <div className="flex items-center border-gray-400 py-2">
                            {openEdit ? (
                                <input className={`appearance-none bg-transparent border-b-2 text-gray-700/60 w-full mr-3 py-1 px-2 leading-tight focus:outline-none`}
                                    type="number"
                                    placeholder='Balance'
                                    aria-label='Balance'
                                    value={balance}
                                    onChange = {(event) => setBalance(event.target.value)}
                                />
                            ) : (
                                <p className={balance ? '' : 'text-gray-700/60 pl-3 border-b-2 w-full'}>
                                    {balance ? balance : 'Balance'}
                                </p>
                            )}
                        </div>
                        {/* Total */}
                        <div className="flex items-center border-gray-400 py-2">
                            {openEdit ? (
                                <input className={`appearance-none bg-transparent border-b-2 text-gray-700/60 w-full mr-3 py-1 px-2 leading-tight focus:outline-none`}
                                    type="number"
                                    placeholder='Total'
                                    aria-label='Total'
                                    value={total}
                                    onChange = {(event) => setTotal(event.target.value)}
                                />
                            ) : (
                                <p className={total ? '' : 'text-gray-700/60 pl-3 border-b-2 w-full'}>
                                    {total ? total : 'Total'}
                                </p>
                            )}
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
                    className={`w-1/4 bg-button-dblue border-button-dblue self-start text-center cursor-pointer hover:bg-gray-700 hover:border-gray-700 text-sm border-4 text-white py-1 px-10 rounded-xl shadow-lg ${openEdit ? '' : 'hidden'}`}
                    >
                    Save
                </div>
                <div
                    className={`w-1/4 bg-button-dblue border-button-dblue self-start text-center cursor-pointer hover:bg-gray-700 hover:border-gray-700 text-sm border-4 text-white py-1 px-10 rounded-xl shadow-lg ${openEdit ? 'hidden' : ''}`}
                    onClick={() => setOpenEdit(true)}
                    >
                    Edit
                </div>
            </div>
        </div>
    </div>
  )
}
