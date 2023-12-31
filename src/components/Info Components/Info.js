import React from 'react'
import InfoUpperSection from './InfoUpperSection';
import { ListBulletIcon, CalendarIcon, CheckIcon, ExclamationCircleIcon, } from '@heroicons/react/24/outline';

function Info() {
  return (
    <div className='h-full w-full bg-[#1e1c21]'>
        <div className='text-white text-lg p-3'>
            {/* component-1-start  */}
              <InfoUpperSection />
            {/* component-1-end  */}


            <div className='space-y-5'>

              <div className='space-y-5'>
                <h2 className='text-xl font-semibold mt-5'>Logs & Requests</h2>
                <div className='flex text-sm lg:text-base'>
                  <div className='h-10 border space-x-10 border-white flex justify-center border-r-2  items-center p-5 rounded-tl-lg  rounded-bl-lg bg-[#f2a84c]'>Attendance Log</div>
                  <div className='h-10 border border-white flex justify-center items-center p-5  rounded-tr-lg  rounded-br-lg bg-black'>Attendance Requests</div>
                </div>
              </div>
              
              <div className='bg-[#34333b] rounded-md overflow-hidden border-2 border-white py-1'>
                  <div className='flex mx-5 py-2'>
                    <div className='flex items-center'>
                      <p className='text-sm lg:text-xl font-semibold'>December, 2023</p>
                    </div>
                    <div className='flex space-x-10 ml-auto'>
                     
                      <div className='bg-white border border-white grid ml-3 lg:ml-0 max-w-[250px] h-12 lg:min-w-[750px] grid-cols-7 rounded-md overflow-hidden'>
                        <div className='lg:w-28 h-14  bg-[#f5a74d] flex justify-center items-center lg:text-xl text-sm p-2 lg:p-0
                        '>
                          30 days
                        </div>
                        <div className='lg:w-28 h-14 bg-[#26212c] text-sm  border-2 border-white  flex justify-center items-center lg:text-xl'>
                          Nov
                        </div>
                        <div className='lg:w-28 h-14 bg-[#26212c] text-sm border-2 border-white flex justify-center items-center lg:text-xl'>
                          Oct
                        </div>
                        <div className='lg:w-28 h-14 bg-[#26212c] text-sm border-2 border-white flex justify-center items-center lg:text-xl'>
                          Sep
                        </div>
                        <div className='lg:w-28 h-14 bg-[#26212c]  text-sm border-2 border-white flex justify-center items-center lg:text-xl'>
                          Aug
                        </div>
                        <div className='lg:w-28 h-14 bg-[#26212c]  text-sm border-2 border-white flex justify-center items-center lg:text-xl'>
                          Jul
                        </div>
                        <div className='lg:w-28 h-14 bg-[#26212c] text-sm border-2 border-white flex justify-center items-center lg:text-xl'>
                          Jun
                        </div>
                      </div>

                      <div className='grid grid-cols-2 lg:w-28 h-10 lg:h-auto'>
                        <button className='cursor-pointer hover:bg-[#f4a74e]/40 bg-[#f5a74d] border flex justify-center items-center rounded-tl-md rounded-bl-md border-white'><ListBulletIcon className='w-8 h-8' /></button>
                        <button className='cursor-pointer hover:bg-[#26212c]/40 bg-[#26212c] border flex justify-center items-center rounded-tr-md rounded-br-md border-white'><CalendarIcon  className=' w-8 h-8' /></button>
                      </div>
                    </div>
                  </div>

                  <div className='flex mt-2 border-t-2 border-white py-1 text-xs lg:text-base'>
                    <div className='grid grid-cols-7 lg:mt-2 lg:text-lg lg:gap-1 gap-4 lg:space-x-20'>
                      <div className='flex justify-center items-center'><p className='ml-28'>Date</p></div>
                      <div className='flex justify-center items-center mr-10'><p>Attendance Visual</p></div>
                      <div className='flex justify-center items-center'><p>Effective Hours</p></div>
                      <div className='flex justify-center items-center'><p>Gross Hours</p></div>
                      <div className='flex justify-center items-center'><p>Extra Hours</p></div>
                      <div className='flex justify-center items-center'>Arrival</div>
                      <div className='flex justify-center items-center'>Log</div>
                    </div>
                  </div>

                  <div>

                    <div className='grid grid-cols-7 text-xs lg:text-base pl-16 border-t-2 border-white py-1'>
                      <div className='flex justify-center m-1'>
                        <p>Dec 04, Mon</p>
                      </div>
                      <div className='bg-[#2bca51] h-5 lg:ml-10 flex m-1 rounded-md lg:max-w-28 justify-evenly'>
                        <div className='bg-white w-1 lg:w-3'></div>
                        <div className='bg-white w-1 lg:w-2'></div>
                      </div>
                      <div className="relative w-4 h-4 lg:w-8 lg:h-8 ml-20">
                        <div className="absolute w-full h-full rounded-full bg-green-500"></div>
                        <div className="absolute w-full h-full rounded-full bg-red-500" style={{ clipPath: 'polygon(50% 50%, 0 0, 100% 0, 50% 50%)' }}></div>
                      </div>
                      <div className='flex justify-center m-1'>
                        <p>9h 59m</p>
                      </div>
                      <div className='flex justify-center m-1'>
                        <p>0h 59m</p>
                      </div>
                      <div className='flex justify-center items-center m-1 space-x-2'>
                        <CheckIcon className='h-5 w-5'/>
                        <p>On Time</p>
                      </div>
                      <div className='flex justify-center items-center ml-2 text-yellow-600'>
                        <ExclamationCircleIcon className='h-5 w-5' />
                      </div>
                    </div>
                    <div className='grid grid-cols-7 text-xs lg:text-base pl-16 border-t-2 border-white py-1'>
                      <div className='flex justify-center m-1'>
                        <p>Dec 04, Mon</p>
                      </div>
                      <div className='bg-[#2bca51] h-5 lg:ml-10 flex m-1 rounded-md lg:max-w-28 justify-evenly'>
                        <div className='bg-white w-1 lg:w-3'></div>
                        <div className='bg-white w-1 lg:w-2'></div>
                      </div>
                      <div className="relative w-4 h-4 lg:w-8 lg:h-8 ml-20">
                        <div className="absolute w-full h-full rounded-full bg-green-500"></div>
                        <div className="absolute w-full h-full rounded-full bg-red-500" style={{ clipPath: 'polygon(50% 50%, 0 0, 100% 0, 50% 50%)' }}></div>
                      </div>
                      <div className='flex justify-center m-1'>
                        <p>9h 59m</p>
                      </div>
                      <div className='flex justify-center m-1'>
                        <p>0h 59m</p>
                      </div>
                      <div className='flex justify-center items-center m-1 space-x-2'>
                        <CheckIcon className='h-5 w-5'/>
                        <p>On Time</p>
                      </div>
                      <div className='flex justify-center items-center ml-2 text-yellow-600'>
                        <ExclamationCircleIcon className='h-5 w-5' />
                      </div>
                    </div>  
                    <div className='grid grid-cols-7 text-xs lg:text-base pl-16 border-t-2 border-white py-1'>
                      <div className='flex justify-center m-1'>
                        <p>Dec 04, Mon</p>
                      </div>
                      <div className='bg-[#2bca51] h-5 lg:ml-10 flex m-1 rounded-md lg:max-w-28 justify-evenly'>
                        <div className='bg-white w-1 lg:w-3'></div>
                        <div className='bg-white w-1 lg:w-2'></div>
                      </div>
                      <div className="relative w-4 h-4 lg:w-8 lg:h-8 ml-20">
                        <div className="absolute w-full h-full rounded-full bg-green-500"></div>
                        <div className="absolute w-full h-full rounded-full bg-red-500" style={{ clipPath: 'polygon(50% 50%, 0 0, 100% 0, 50% 50%)' }}></div>
                      </div>
                      <div className='flex justify-center m-1'>
                        <p>9h 59m</p>
                      </div>
                      <div className='flex justify-center m-1'>
                        <p>0h 59m</p>
                      </div>
                      <div className='flex justify-center items-center m-1 space-x-2'>
                        <CheckIcon className='h-5 w-5'/>
                        <p>On Time</p>
                      </div>
                      <div className='flex justify-center items-center ml-2 text-yellow-600'>
                        <ExclamationCircleIcon className='h-5 w-5' />
                      </div>
                    </div>  
                    <div className='grid grid-cols-7 text-xs lg:text-base pl-16 border-t-2 border-white py-1'>
                      <div className='flex justify-center m-1'>
                        <p>Dec 04, Mon</p>
                      </div>
                      <div className='bg-[#2bca51] h-5 lg:ml-10 flex m-1 rounded-md lg:max-w-28 justify-evenly'>
                        <div className='bg-white w-1 lg:w-3'></div>
                        <div className='bg-white w-1 lg:w-2'></div>
                      </div>
                      <div className="relative w-4 h-4 lg:w-8 lg:h-8 ml-20">
                        <div className="absolute w-full h-full rounded-full bg-green-500"></div>
                        <div className="absolute w-full h-full rounded-full bg-red-500" style={{ clipPath: 'polygon(50% 50%, 0 0, 100% 0, 50% 50%)' }}></div>
                      </div>
                      <div className='flex justify-center m-1'>
                        <p>9h 59m</p>
                      </div>
                      <div className='flex justify-center m-1'>
                        <p>0h 59m</p>
                      </div>
                      <div className='flex justify-center items-center m-1 space-x-2'>
                        <CheckIcon className='h-5 w-5'/>
                        <p>On Time</p>
                      </div>
                      <div className='flex justify-center items-center ml-2 text-yellow-600'>
                        <ExclamationCircleIcon className='h-5 w-5' />
                      </div>
                    </div>  
                    <div className='grid grid-cols-7 text-xs lg:text-base pl-16 border-t-2 border-white py-1'>
                      <div className='flex justify-center m-1'>
                        <p>Dec 04, Mon</p>
                      </div>
                      <div className='bg-[#2bca51] h-5 lg:ml-10 flex m-1 rounded-md lg:max-w-28 justify-evenly'>
                        <div className='bg-white w-1 lg:w-3'></div>
                        <div className='bg-white w-1 lg:w-2'></div>
                      </div>
                      <div className="relative w-4 h-4 lg:w-8 lg:h-8 ml-20">
                        <div className="absolute w-full h-full rounded-full bg-green-500"></div>
                        <div className="absolute w-full h-full rounded-full bg-red-500" style={{ clipPath: 'polygon(50% 50%, 0 0, 100% 0, 50% 50%)' }}></div>
                      </div>
                      <div className='flex justify-center m-1'>
                        <p>9h 59m</p>
                      </div>
                      <div className='flex justify-center m-1'>
                        <p>0h 59m</p>
                      </div>
                      <div className='flex justify-center items-center m-1 space-x-2'>
                        <CheckIcon className='h-5 w-5'/>
                        <p>On Time</p>
                      </div>
                      <div className='flex justify-center items-center ml-2 text-yellow-600'>
                        <ExclamationCircleIcon className='h-5 w-5' />
                      </div>
                    </div>  
                  </div>
              </div> 
            </div>
        </div>
    </div>
  )
}

export default Info;