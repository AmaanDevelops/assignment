import { MagnifyingGlassIcon, BellIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import React from 'react'

function Header() {
  return (
    <header className='h-72 w-full flex flex-col items-center relative z-0'>
        <div className='w-full flex justify-center'>
            <div className='bg-black h-5 w-40 rounded-bl-lg rounded-br-lg' />
        </div>
        <div className='w-full h-16 grid grid-cols-4 sm:grid-cols-8 grid-rows-2 gap-5 px-5 mt-5 space-y-5
                        md:max-w-[800px]
        '>

            <div className='flex h-10 sm:h-12 bg-[#33323a] rounded-xl items-center text-white
                col-span-4 sm:mt-5
            '>
                <input className='h-full w-full rounded-lg bg-[#33323a] p-3 focus:outline-none' type="text" placeholder='Search' />
                <MagnifyingGlassIcon className='max-h-6 max-w-6 rounded-lg mr-3 text-white' />
            </div>
            <div className='col-span-4 grid grid-cols-4 place-items-center sm:place-content-start h-16'>
                <div className='flex items-center justify-center bg-[#33323a]  min-w-10 h-10 sm:min-w-12 sm:h-12 rounded-xl'>
                    <BellIcon className='min-w-6 h-6 invert' />
                </div>
                <div className='flex items-center justify-center bg-[#33323a]  min-w-10 h-10 sm:min-w-12 sm:h-12 rounded-xl'>
                    <EnvelopeIcon className='min-w-6 h-6 invert' />
                </div>
                <div className='grid-cols-2 bg-[#33323a] min-w-10 h-10 sm:min-w-12 sm:h-12 rounded-full border-2 border-white relative'>
                    <div className="absolute left-0 top-0 w-1/2 h-full bg-white rounded-l-full"></div>
                </div>
                <div className='grid-cols-2 bg-[#33323a] min-w-10 h-10 sm:min-w-12 sm:h-12 rounded-full border-2 border-white relative overflow-hidden
                    flex justify-center ml-3
                '>
                    <Image 
                        src="https://shorturl.at/fxFP2"
                        fill={true}
                        alt='pic'
                    />
                </div>
            </div>
        </div>
        <div className='text-white text-lg w-full flex space-x-1 absolute bottom-0 justify-center lg:justify-start sm:ml-10'>
            <p className='font-bold'>My Space  /</p>
            <p className='text-[#f4a74e]'>Attendance</p>
        </div>
    </header>
  )
}

export default Header;