import React from 'react';
import aboutImg from '../assets/about.jpg'
import { TypeAnimation } from 'react-type-animation';

const About = () => {
    return (
        <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
            <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className='mt-4 md:mt-0 text-left flex '>
                <div className='my-auto mx-6'>
               <h2 className='text-4xl font-bold mb-4 primary-color'>
                <TypeAnimation
                        sequence={[
                            "আমার সম্পর্কে",
                            1000,   
                            "About Me",
                            1000,   
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                    />
                    </h2>
                    {/* <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2> */}
                    <p className='text-base lg:text-lg'>
                    আমি সাবিহা তাবাসসুম, আমি আমার বাবা মায়ের একমাত্র সন্তান, আমার বাবা সুলাইমান, আামর মা আফরুজা রুমা, আমার জন্ম ১৯-০১-২৫ ৮:২০ মিনিট  রোজ রবিবার,আমার জন্মস্থান ময়মনসিংহের ট্রমা সেন্টারে, ডাক্তার কাওসারনিগার মায়া। আমাকে প্রথম দেখেছেন আমার আব্বু, আমাকে প্রথম কুলে নিয়েছে আমার দাদু, আমাকে আমার আব্বু কোলে নিয়ে ৫০০ টাকা উপহার দিয়েছেন।।
                    </p>
                </div>
            </div>
                <img src={aboutImg} alt="img no saport" width={300} height={300} className='mx-auto rounded-3xl py-8 md:py-0' />

            </div>
        </div>
    );
};

export default About;