import React from 'react'

export default function ComponentsDashboard() {
  return (
    <div>
        <div className='text-2xl md:px-5 grid lg:grid-cols-2 gap-4'>
                <div className='font-gilmer text-button-lblue bg-white flex flex-col justify-center items-center py-20 rounded shadow-md'>
                    <div>Appointments</div>
                    <div>124</div>
                </div>
                <div className='font-gilmer text-button-lblue bg-white flex flex-col justify-center items-center py-20 rounded shadow-md'>
                    <div>New Patients</div>
                    <div>34</div>
                </div>
                <div className='bg-white flex flex-col justify-center items-center py-20 rounded shadow-md lg:col-span-2'>
                    <div className='font-gilmer text-button-lblue mb-3'>Recent Visits</div>
                    <div className='text-sm lg:text-xl flex flex-col text-white w-5/6 h-60 overflow-auto'>
                        <div className='bg-button-lblue flex flex-col sm:flex-row sm:justify-between items-center py-5 px-10 my-2'>
                            <div>08:34am</div>
                            <div>02 Aug 2022</div>
                            <div>
                                <p>Kevin Perez</p>
                                <p>Admin</p>
                            </div>
                            <div>DH425Yhh502</div>
                        </div>
                        <div className='bg-button-lblue flex flex-col sm:flex-row sm:justify-between items-center py-5 px-10 my-2'>
                            <div>08:34am</div>
                            <div>02 Aug 2022</div>
                            <div>
                                <p>Cedric Vitangcol</p>
                                <p>Staff</p>
                            </div>
                            <div>DH425Yhh502</div>
                        </div>
                        <div className='bg-button-lblue flex flex-col sm:flex-row sm:justify-between items-center py-5 px-10 my-2'>
                            <div>08:34am</div>
                            <div>02 Aug 2022</div>
                            <div>
                                <p>Laurence Santos</p>
                                <p>Staff</p>
                            </div>
                            <div>DH425Yhh502</div>
                        </div>
                        <div className='bg-button-lblue flex flex-col sm:flex-row sm:justify-between items-center py-5 px-10 my-2'>
                            <div>08:34am</div>
                            <div>02 Aug 2022</div>
                            <div>
                                <p>Armie Guballa</p>
                                <p>Staff</p>
                            </div>
                            <div>DH425Yhh502</div>
                        </div>
                        <div className='bg-button-lblue flex flex-col sm:flex-row sm:justify-between items-center py-5 px-10 my-2'>
                            <div>08:34am</div>
                            <div>02 Aug 2022</div>
                            <div>
                                <p>Ara Sucob</p>
                                <p>Staff</p>
                            </div>
                            <div>DH425Yhh502</div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}
