import React from 'react';
import aboutImg from '../assets/about.jpg'

const About = () => {
    return (
        <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
            <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className='mt-4 md:mt-0 text-left flex '>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                    To secure a challenging Front-End Web Developer position where
                    I can leverage my strong foundation in HTML, CSS, JavaScript,
                     React.js along with my passion for creating visually appealing and intuitive user interfaces. 
                     My goal is to contribute innovative solutions to enhance the user experience and collaborate with a dynamic team in a growthoriented organization.
                    </p>
                </div>
            </div>
                <img src={aboutImg} alt="img no saport" width={300} height={300} className='mx-auto rounded-3xl py-8 md:py-0' />

            </div>
        </div>
    );
};

export default About;