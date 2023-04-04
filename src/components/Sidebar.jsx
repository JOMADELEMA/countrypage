import React from 'react'
import { IconX, IconSearch } from '@tabler/icons-react'
import { useStateContext } from '@contexts/ContextProvider'


const Sidebar = () => {
    const {sidebarVisible, toggleSidebar} = useStateContext();

    const classVisible = 'translate-x-0 duration-300';
    const classNotVisible = '-translate-x-96 duration-300';

    return (
        <>
            <div className={`h-screen w-96 bg-black bg-opacity-75 fixed z-10 ${sidebarVisible? classVisible : classNotVisible}`}>
                <div className='text-amber-100 mt-5'>
                    <div className='flex justify-between pl-5'>
                        <input type="text" className='bg-transparent border border-amber-100 placeholder:text-amber-100 hover:border-2 focus:outline-none focus:border-2 focus:placeholder:opacity-50 rounded-full pl-5 h-8 w-60 self-center ' placeholder='SEARCH...' />
                        <IconSearch size={20} className='self-center -translate-x-16' />
                        <IconX size={40} className='mr-2 cursor-pointer' onClick={()=>toggleSidebar(sidebarVisible)} />
                    </div>

                    <div className='flex flex-col h-60 justify-center mt-10'>
                        <div className='text-3xl font-light hover:font-bold hover:text-4xl hover:bg-black  hover:bg-opacity-50 hover:duration-150 cursor-pointer w-full text-center h-16 flex place-items-center justify-center'>HISTORY</div>
                        <div className='text-3xl font-light hover:font-bold hover:text-4xl hover:bg-black  hover:bg-opacity-50 hover:duration-150 cursor-pointer w-full text-center h-16 flex place-items-center justify-center'>DESTINATIONS</div>
                        <div className='text-3xl font-light hover:font-bold hover:text-4xl hover:bg-black  hover:bg-opacity-50 hover:duration-150 cursor-pointer w-full text-center h-16 flex place-items-center justify-center'>EXPERIENCES</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar