import Image from 'next/image'
import React, { useState } from 'react'
import { HomeIcon, ChartBarIcon, ChevronUpIcon, ChevronDownIcon ,ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

function SideBar() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [isMySpaceBarOpen, setIsMySpaceBarOpen] = useState(false);
    return (
        <div className='fixed z-50 sm:static'>
            {
                isSideBarOpen &&
                <div className='bg-[#201f23] h-screen text-white flex flex-col max-w-44 sm:min-w-64 border-r-2 border-white
                    
                '>
                    <div className='flex justify-center items-center h-56 p-16'>
                        <Image
                            src="https://shorturl.at/apGW6"
                            width={100}
                            height={100}
                            alt='logo'
                            className='invert'
                        />
                    </div>

                    <button className='border-t-2 border-white h-16 relative' onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
                        <div className='flex justify-center items-center bg-white
                            rounded-full h-8 w-8 absolute -top-4 -right-4 cursor-pointer
                            '>
                            {
                                isSideBarOpen ? <ArrowLeftIcon className='w-4 h-4 invert' /> : 
                                <ArrowRightIcon className='w-4 h-4 invert' />
                            }
                        </div>
                    </button>

                    <div className="-mt-5">
                        <ul className='space-y-5'>
                            
                            <button className='flex items-center p-6 space-x-2 text-black
                                        bg-white rounded-tr-3xl rounded-br-3xl h-10 w-40 sm:w-56
                                        cursor-pointer hover:bg-white/40
                                        '>
                                <HomeIcon className='w-6 h-6' />
                                <li className='text-sm sm:text-base'>Home</li>
                            </button>
                            
                            <div>
                                
                                <button onClick={() => setIsMySpaceBarOpen(!isMySpaceBarOpen)} 
                                className='flex justify-between items-center p-6 space-x-2 text-white
                                        bg-[#f4a74e] rounded-tr-3xl rounded-br-3xl h-10 w-40 sm:w-56
                                        cursor-pointer hover:bg-[#f4a74e]/40
                                        '>
                                    <div className='flex space-x-1 sm:space-x-2'>
                                        <ChartBarIcon className='w-6 h-6' />
                                        <h1 className='text-sm sm:text-base'>My Space</h1>
                                    </div>
                                    {!isMySpaceBarOpen ?   <ChevronDownIcon className='w-4 h-4' /> : <ChevronUpIcon className='w-4 h-4' />}
                                </button>

                                {isMySpaceBarOpen &&
                                    <ul className='ml-10 mt-3 space-y-1 sm:space-y-3 text-sm sm:text-base'>
                                        <li className='hover:text-[#f4a74e] cursor-pointer'>Leave</li>
                                        <li className='hover:text-[#f4a74e] cursor-pointer'>Attendance</li>
                                        <li className='hover:text-[#f4a74e] cursor-pointer'>Performance</li>
                                        <li className='hover:text-[#f4a74e] cursor-pointer'>Expenses & Travel</li>
                                        <li className='hover:text-[#f4a74e] cursor-pointer'>Help Desk</li>
                                    </ul>
                                }
                            </div>
                        </ul>
                    </div>
                </div>
            }
            {!isSideBarOpen &&
                <button className={`ml-3 mt-48 relative absolute top-4 right-4`} onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
                    <div className='flex justify-center items-center bg-white 
                        rounded-full h-8 w-8 cursor-pointer
                        '>
                        {
                            isSideBarOpen ? <ArrowLeftIcon className='w-4 h-4 ' /> : 
                            <ArrowRightIcon className='w-4 h-4' />
                        }
                    </div>
                </button>
            }
        </div>
    )
}

export default SideBar;
