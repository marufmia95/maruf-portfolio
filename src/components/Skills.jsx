import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import tailwind from '../assets/tailwind.png';
import react from '../assets/react.png';

const Skills = () => {
    return (
        <div>
            <h1 className='text-4xl mb-3 font-bold primary-color mt-[160px]  ml-[10%]'></h1>
        <div className='border border-gray-600  bg-black text-gray-400 md:h-auto max-w-[1200px] mx-auto flex flex-wrap justify-center md:justify-between sm: items-center'>
            <h2 className='text-gray-700 text-xl md:text-4xl font-bold m-4'>
                My <br /> Tech <br /> Stack
            </h2>

            <div className='flex flex-col items-center m-4 w-[40px] md:w-auto'>
                <img src={html} alt="HTML" className='w-[50px]' />
                <p className='mt-2'>HTML</p>
            </div>

            <div className='flex flex-col items-center m-4 w-[40px] md:w-auto'>
                <img src={css} alt="CSS" className='w-[50px]' />
                <p className='mt-2'>CSS</p>
            </div>

            <div className='flex flex-col items-center m-4 w-[40px] md:w-auto'>
                <img src={tailwind} alt="Tailwind CSS" className='w-[50px]' />
                <p className='mt-2'>Tailwind</p>
            </div>
            <div className='flex flex-col items-center m-4 w-[40px] md:w-auto'>
                <img src={javascript} alt="JavaScript" className='w-[50px]' />
                <p className='mt-2'>JavaScript</p>
            </div>


            <div className='flex flex-col items-center m-4 w-[40px] md:w-auto'>
                <img src={react} alt="React" className='w-[50px]' />
                <p className='mt-2'>React js</p>
            </div>
        </div>
        </div>
    );
};

export default Skills;
