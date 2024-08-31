import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);   

    const toggleSidebar = () => {   
        setIsSidebarOpen(!isSidebarOpen);
    };

  return (
    <header className='fixed top-2 left-2 md:left-20 2xl:left-96 right-2 md:right-20 2xl:right-96 font-poppins bg-white2 flex items-center justify-between px-7 md:px-10 h-16 rounded-3xl' >
        
        {/* pc navbar */}
        <figure className='cursor-pointer'>
            <img src={logo} alt="NootNote" className='max-w-[150px]'/>
        </figure>    
        <nav className='hidden lg:flex gap-10'>
            <ul className='flex gap-5 font-medium'>
                <li>
                    <button className='hover:text-red2 transition-all'>Home</button>
                </li>
                <li>
                    <button className='hover:text-blue2 transition-all'>Learn</button>
                </li>
                <li>
                    <button className='hover:text-yellow2 transition-all'>Quizzes</button>
                </li>
                <li>
                    <button className='hover:text-red2 transition-all'>Community</button>
                </li>
            </ul>
            <Link to='/login' className='hover:text-red2 transition-all'><strong>Login</strong></Link>
        </nav>
        {/* sidebar toggle */}
        <p
            className="block lg:hidden focus:outline-none hover:text-red2 cursor-pointer transition-all"
            onClick={toggleSidebar}
        >
            <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </p>


        {/* mobile sidebar */}
        <div
                    className={`fixed top-0 right-0 h-screen w-full bg-white2 transform pt-2 px-5 md:px-24 lg:px-28 ${
                        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-150 ease-in-out lg:hidden`}
                >
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between items-center p-3">
                        <figure className='cursor-pointer'>
                            <img src={logo} alt="NootNote" className='max-w-[150px]'/>
                        </figure>    
                            <button onClick={toggleSidebar} className="text-black focus:outline-none transition-colors px-3">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <ul className="flex flex-col p-4 font-semibold space-y-4 text-lg">
                            <li className="cursor-pointer transition-colors" onClick={toggleSidebar}>
                                <button>Home</button>
                            </li>
                            <li className="cursor-pointer transition-colors" onClick={toggleSidebar}>
                                <button>Notes</button>
                            </li>
                            <li className="cursor-pointer transition-colors" onClick={toggleSidebar}>
                                <button>Subjects</button>
                            </li>
                            <li className="cursor-pointer transition-colors" onClick={toggleSidebar}>
                                <Link to='/login' >Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>

    </header>
  )
}

export default Header;