import React from 'react'
import { IconSearch } from '@tabler/icons-react'

const Navbar = () => {
    return (
        <>
            <div className="hidden lg:flex justify-center gap-10 text-amber-100 mt-3">
                <div className='flex justify-evenly w-128'>
                    <div className='self-center cursor-pointer hover:font-semibold'>HISTORY</div>
                    <div className='self-center cursor-pointer hover:font-semibold'>DESTINATIONS</div>
                    <div className='self-center cursor-pointer hover:font-semibold'>EXPERIENCES</div>

                </div>

                <div className='flex text-amber-100'>
                    <input type="text" className='bg-transparent border border-amber-100 placeholder:text-amber-100 hover:border-2 focus:outline-none focus:border-2 focus:placeholder:opacity-50 rounded-full pl-5 h-8 w-60 self-center ' placeholder='SEARCH...' />
                    <IconSearch size={20} className='self-center -translate-x-8' />
                </div>

                <div className="border text-black border-amber-200 bg-amber-300 hover:bg-amber-200 rounded-full flex text-gray font-semibold w-32 h-8 self-center items-center justify-center shadow-md cursor-pointer">
                    EXPLORE
                </div>
            </div>
        </>
    )
}

export default Navbar