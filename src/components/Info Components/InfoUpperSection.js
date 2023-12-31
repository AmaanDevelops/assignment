import React from 'react'
import { ChevronDownIcon, ListBulletIcon, CalendarIcon, CheckIcon, ExclamationCircleIcon, ClockIcon } from '@heroicons/react/24/outline';


function InfoUpperSection() {
  return (
        <div className='bg-[#24232b] text-white rounded-lg max-w-[650px] lg:max-w-full
            grid grid-cols-5 grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 lg:place-items-center p-5 z-10 
        '>
            <div className='col-span-5 lg:col-auto flex flex-col space-y-3 rounded-lg overflow-hidden lg:h-full'>             
                <div class="flex lg:flex-col justify-center items-center lg:items-start space-x-5 rounded-lg 
                     lg:mt-4 lg:-ml-5">
                    <h1 className='font-semibold text-lg lg:ml-5'>Attendance Status</h1>

                    <div className='flex space-x-2'>
                        <p className='lg:text-lg text-lg'>Last Week</p>
                        <ChevronDownIcon className='w-4 h-4 mt-[3px]' />
                    </div>
                </div>

                <div class="bg-[#34333b]  20 space-x-5 space-y-2 p-5
                        flex items-center justify-center w-full rounded-lg
                        z-20 
                 ">
                    <div className='flex flex-col lg:flex-row lg:space-x-3 items-center space-y-3'>
                        <ClockIcon className='h-10 w-10'/>
                        <div className='flex flex-col items-center'>
                            <p className='text-lg'>Avg hrs / Day</p>
                            <p className='lg:text-lg'>( 6hrs 48m )</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row lg:space-x-3 items-center space-y-3'>
                        <div className="relative w-10 h-10">
                            <div className="absolute w-full h-full rounded-full bg-green-500"></div>
                            <div className="absolute w-full h-full rounded-full bg-red-500" style={{ clipPath: 'polygon(50% 50%, 0 0, 100% 0, 50% 50%)' }}></div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-lg'>On Time Arrival</p>
                            <p>95%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-span-5 lg:col-auto rounded-lg overflow-hidden lg:h-full'>
                <div className="flex flex-col justify-center items-center text-lg px-5 py-3">
                    <div className='w-full flex justify-center'>
                        <p className='text-lg font-semibold'>Timings</p>
                    </div>
                    <div className='flex space-x-2 justify-center mt-2'>
                        <div className='w-7 h-7 rounded-full border border-white flex justify-center items-center'>M</div>
                        <div className='w-7 h-7 rounded-full border border-white flex justify-center items-center'>T</div>
                        <div className='w-7 h-7 rounded-full border border-white flex justify-center items-center text-yellow-600'>W</div>
                        <div className='w-7 h-7 rounded-full border border-white flex justify-center items-center'>T</div>
                        <div className='w-7 h-7 rounded-full border border-white flex justify-center items-center'>F</div>
                        <div className='w-7 h-7 rounded-full border border-white flex justify-center items-center text-green-600'>S</div>
                        <div className='w-7 h-7 rounded-full border border-white flex justify-center items-center text-red-600'>S</div>
                    </div>
                </div>

                <div class="rounded-lg flex flex-col justify-center lg:justify-normal space-y-5 items-center lg:text-lg bg-[#34333b] h-24 lg:h-28 z-20">
                    <p className='lg:mt-5'>Today (09:30AM - 06:30PM)</p>
                    <p className='lg:mt-5'>Duration: 9h 0m Break: 0m</p>
                </div>
            </div>

            <div className='col-span-5 lg:col-auto overflow-hidden rounded-lg space-y-2 lg:space-y-10 lg:h-full'>
                <div class="rounded-lg p-3
                            flex justify-center items-center
                    ">
                    <p className='text-lg font-semibold'>Action</p>
                </div>

                <div className='col-span-5 lg:flex lg:space-x-2 space-y-2 h-full lg:h-28 '>
                    <div class="rounded-lg flex flex-col justify-center lg:justify-normal items-center bg-[#34333b] h-16 lg:h-full p-5 z-20">
                        <p className='text-3xl'>04:04::39 PM</p>
                        <p className='text-lg'>Wed 06, Dec 2023</p>
                    </div>
                    <div class="rounded-lg flex flex-col space-y-4 z-20">
                        <button className='bg-[#f0a94f] text-black font-bold rounded-lg h-10 lg:h-14 lg:ml-2 text-lg lg:text-base p-1 lg:mr-2 cursor-pointer hover:bg-[#f4a74e]/40'>Leave Request</button>
                        <button className='bg-[#f0a94f] text-black font-bold rounded-lg h-10 lg:h-14 lg:ml-2 text-lg lg:text-base p-1 lg:mr-2 cursor-pointer hover:bg-[#f4a74e]/40'>Work From Home</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default InfoUpperSection;