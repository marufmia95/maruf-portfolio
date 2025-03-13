import React, { useState } from 'react';
import{AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Logo from '../assets/marufLogo.png';

const Navbar = () => {
const [nav, setNav] = useState(false)

const handleNav = () => {
    setNav(!nav)
}

return (
        <div>
            <div>
                <div className='bg-black text-gray-400 h-[100px] mx-w-[1200px] mx-auto flex justify-between items-center'>
                    <h1 className='text-3xl font-bold primary-color ml-4'>
                    <img className='w-[50%]' src={Logo} alt="" />
                    </h1>
                    <ul className='hidden md:flex gap-5 text-2xl'> 
                        <li className='P-5'><a href="#about">About</a></li>
                        <li className='P-5'><a href="#work">Work</a></li>
                        <li className='P-5 mr-5'><a href="#contact">Contact</a></li>
                    </ul>

                    <div onClick={handleNav} className='block md:hidden'>
                        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
                    </div>

                    <div className={nav ? 'fixed h-full left-0 top-0 w-[40%] bg-[#202121] ease-in-out duration-500' 
                    : 'fixed left-[-100%]'}>

                    <h1 className='text-3xl primary-color m-4'>
                    <img src="../assets/marufLogo.png" alt="" />
                    </h1>
                        <ul className='p-5 text-2xl'>
                            <li className='p-2'><a href="#about">About</a></li>
                            <li className='p-2'><a href="#work">Work</a></li>
                            <li className='p-2'><a href="#contact">Contact</a></li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Navbar;