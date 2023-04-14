import React from 'react'
import { RiCheckboxBlankCircleFill, RiMenu3Fill, RiCloseFill, RiInstagramLine, RiFacebookFill, RiTwitterFill, RiMessengerLine } from "react-icons/ri";
const Footer = () => {
    return (
        <footer className='bg-footer p-8 xl:p-20'>
            <div className='flex flex-col md:flex-row items-center justify-between border-b p-8 border-gray-600'>
                {/* logo */}
                <a href="#" className="text-2xl font-bold text-center relative p-1 text-white">
                    Power
                    <span className="text-primary text-5xl">.</span>
                    <RiCheckboxBlankCircleFill className="absolute -bottom-3 -left-3 text-primary" />
                </a>
                <ul>
                    <li className='flex gap-3'>
                        <a href=""><RiInstagramLine className=' text-5xl text-white p-2 bg-primary rounded-full' /></a>
                        <a href=""><RiFacebookFill className=' text-5xl text-white p-2 bg-primary rounded-full' /></a>
                        <a href=""><RiTwitterFill className=' text-5xl text-white p-2 bg-primary rounded-full' /></a>
                        <a href=""><RiMessengerLine className=' text-5xl text-white p-2 bg-primary rounded-full' /></a>
                    </li>
                </ul>
            </div>
            <div className=' p-8'>
                <h3 className='text-white font-bold uppercase text-center md:text-left pb-2 '>Company</h3>
                <nav className='mt-4 flex flex-col md:flex-row  justify-between items-center gap-8 '>
                    <a href="" className='text-gray-400 hover:text-white transition-colors'>About Us</a>
                    <a href="" className='text-gray-400 hover:text-white transition-colors'>Price</a>
                    <a href="" className='text-gray-400 hover:text-white transition-colors'>Event</a>
                    <a href="" className='text-gray-400 hover:text-white transition-colors'>Terms of Use</a>
                    <a href="" className='text-gray-400 hover:text-white transition-colors'>Privacy</a>
                    <a href="" className='text-gray-400 hover:text-white transition-colors'>Contact Us</a>
                    <button className="bg-primary text-white px-9 py-3 rounded-xl text-xl">
                        Contact Us
                    </button>
                </nav>
            </div>
            <div className='mt-20 '>
                <p className='text-gray-400 text-center'>Martin Kutzner 2023 - All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer