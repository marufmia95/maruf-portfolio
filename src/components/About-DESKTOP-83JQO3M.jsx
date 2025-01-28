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
                            "আমার সম্পকে কিছু কথা",
                            1000,   
                            "About Me",
                            1000,   
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                    />
                    </h2>
                    <p className='text-base lg:text-lg'>
                    আমি আমার বাবা মায়ের একমাত্র সন্তান
                    </p>
                    <p>আমার নাম সাবিহা তাবাসসুম, আমার বাবার নাম সুলাইমান, আমার মায়ের নাম আফরুজা রুমা, আমার জন্ম তারিখ ১৯/০১/২০২৫ ইং, সময় ৮:২০PM, জন্মস্থান ময়মনসিংহ ট্রমা সেন্টার, ডা: কাওসারনিগার মায়া, আমাকে প্রথম দেখেছেন আমার বাবা, আমাকে প্রথম কোলে নিয়েছে আমার দাদি, আমার বাবা আমাকে কোলে নেয়ার সময় আমাকে ৫০০ টাকা উপহার দিয়েছেন। </p>
                </div>
            </div>
                <img src={aboutImg} alt="img no saport" width={300} height={300} className='mx-auto rounded-3xl py-8 md:py-0' />
                        এটা আমি
            </div>
        </div>
    );
};

export default About;