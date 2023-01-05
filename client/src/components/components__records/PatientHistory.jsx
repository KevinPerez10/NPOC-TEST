import React, {useState} from 'react'
import RxData from './RxData'

export default function PatientHistory({openPatientHistory, onClosePatientHistory}) {
    if(!openPatientHistory) return null
    const [openRxData, setOpenRxData] = useState(false)
  return (
    <div className='bg-black/70 text-button-dblue fixed grid place-items-center w-full h-full z-20 top-0 left-0'>
        <div className={`flex flex-col justify-center items-center gap-5 w-5/6 h-fit rounded-lg shadow-lg px-10 py-5 bg-white ${openRxData ? 'hidden' : 'flex'}`}>
            <div className='text-lg self-start'>
                Patient History
            </div>

            <hr className='w-full border-black' />

            {/* Main Content */}
            <div className='py-5 grid grid-cols-3 gap-5 w-full place-items-center'>

              {/* Basic Info */}
              <div className='grid grid-cols-3 col-span-3 w-full place-items-center'>
                <div className='place-self-start text-2xl'>
                  Laurence Santos
                </div>
                <div className='place-self-start col-start-1'>
                  2781 Ingram Road Greensboro, NC 2740
                </div>
                <div className='place-self-end row-start-1 col-start-3'>
                  18 Sept. 2022
                </div>
                <div className='place-self-end col-start-3'>
                  09247281741
                </div>
              </div>

              {/* Year Selector */}
              <div className='col-span-3 flex w-full justify-around'>
                <div className='text-white rounded-full bg-button-dblue px-10 py-2 cursor-pointer hover:bg-gray-700'>
                  Current Year
                </div>
                <div className='text-white rounded-full bg-button-dblue px-10 py-2 cursor-pointer hover:bg-gray-700'>
                  Previous Year
                </div>
                <div className='text-white rounded-full bg-button-dblue px-10 py-2 cursor-pointer hover:bg-gray-700'>
                  Past Year
                </div>
              </div>

              {/* History */}
              <div className='border-2 rounded-lg shadow-inner flex flex-col gap-3 w-full p-5 col-span-3'>
                <div className='flex w-full justify-between'>
                  <div>
                    History
                  </div>
                  <div>
                    2022
                  </div>
                </div>
                <div className='text-white flex flex-col gap-2 overflow-auto h-60'>
                  <div
                    className='p-5 rounded cursor-pointer shadow-inner transition-all hover:bg-gray-700 flex w-full bg-button-lblue justify-between'
                    onClick={() => setOpenRxData(true)}
                    >
                    <p>
                      08:34AM
                    </p>
                    <p>
                      02 Aug 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr className='w-full border-black' />


            <div
                className='w-1/4 bg-gray-500 self-start text-center cursor-pointer hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-10 rounded-xl shadow-lg'
                onClick={onClosePatientHistory}
                >
                Cancel
            </div>
        </div>
        <RxData open={openRxData} onClose={() => setOpenRxData(false)}/>
    </div>
  )
}
