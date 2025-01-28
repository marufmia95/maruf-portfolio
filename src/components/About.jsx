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
                            "আমার বিষয়ে কিছু কথা",
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis reiciendis molestiae atque facilis exercitationem error repellat nobis nostrum, voluptatem maxime libero, ut, inventore iusto a sunt. Impedit consequuntur facilis distinctio sed quod atque ipsum debitis veritatis, in qui explicabo et obcaecati aut, alias consequatur magnam dolores reiciendis, enim quas laborum?
                    </p>
                </div>
            </div>
                <img src={aboutImg} alt="img no saport" width={300} height={300} className='mx-auto rounded-3xl py-8 md:py-0' />

            </div>
        </div>
    );
};

export default About;