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
                My <br /> Name <br /> 
            </h2>

            <div className='flex flex-col items-center m-4 w-[40px] md:w-auto'>
                {/* <img src={html} alt="HTML" className='w-[50px]' />  */}
                <p className='text-4xl font-bold mb-4 primary-color'>মারুফ "চাচ্চু”</p>
                <p className='mt-2'>সাবিহা তাবাসসুম। নামের অর্থ প্রভাতের মুচকি হাসি </p>
            </div>

            <div className='flex flex-col items-center m-4 w-[40px] md:w-auto'>
                {/* <img src={css} alt="CSS" className='w-[50px]' /> */}
                <p className='text-4xl font-bold mb-4 primary-color'>সুমাইয়া "ফুফি”</p>
                <p className='mt-2'>সাবিহা বিনতে সুলাইমান। নামের অর্থ সুলাইমানের মেয়ে প্রথম সূর্যউদয়</p>
                {/* <p className='mt-2'>সাবিহা নূর। নামের অর্থ প্রথম সূর্যউদয়</p> */}
            </div>

            <div className='flex flex-col items-center m-4 w-[40px] md:w-auto'>
                {/* <img src={tailwind} alt="Tailwind CSS" className='w-[50px]' />  */}
                <p className='text-4xl font-bold mb-4 primary-color'>সামিয়া “ফুফি”</p>
                <p className='mt-2'>সাফফানা জাহান অর্থ সফল বা বিজয়ী</p>
            </div>
            <div className='flex flex-col items-center m-4 w-[40px] md:w-auto'>
                {/* <img src={javascript} alt="JavaScript" className='w-[50px]' /> */}
                <p className='text-4xl font-bold mb-4 primary-color'>সাইফা “আপু”</p>
                <p className='mt-2'>সাইবা নূর</p>
            </div>


            {/* <div className='flex flex-col items-center m-4 w-[40px] md:w-auto'>
                <img src={react} alt="React" className='w-[50px]' />
                <p className='mt-2'>React js</p>
            </div> */}
        </div>
        </div>
    );
};

export default Skills;
