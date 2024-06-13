import React from 'react';
import heroimage from '../assets/profilepic7.jpeg'
import {TypeAnimation} from 'react-type-animation'

const Hero = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] h-[70vh] mx-auto py-8 bg-black'>
                <div className='w-[200px]  h-auto mx-auto'>
                    <div className='w-[300px]  h-auto lg:w-[400px]'>
                        <img className='rounded-full' src={heroimage} alt=" hero image" />
                    </div>
                </div>

            </div>
    );
};

export default Hero;