import React from 'react';

const Contact = () => {
    return (
        <section className='max-w-[1200px] mx-auto flex justify-between p-5'>
            <div className='w-[48%] text-left'>
                <header>
                    <h2 className='text-4xl mb-3 font-bold primary-color'>Contact</h2>
                </header>
                <section className='mapbox'>
                    <figure>
                        <iframe
                            src='https://www.google.com/maps/@24.9634554,90.6268279,16z?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D'
                            // src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29179.15752685301!2d90.19391960882564!3d23.911073960744563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ef2e26644985%3A0x2d1f6903d1be0eb9!2sDhamrai!5e0!3m2!1sen!2sbd!4v1713842771106!5m2!1sen!2sbd'
                            width="600"
                            height="450"
                            allowFullScreen=""
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                            style={{ border: 0 }}
                        ></iframe>
                    </figure>
                </section>
            </div>

            <div className='w-[48%] text-left'>
                <section className='contact-form'>
                    <h3 className='text-4xl mb-3 font-bold primary-color'>Contact Form</h3>
                    <form action="https://getform.io/f/panvowqa" method='POST' className='form'>
                        <div className='input-wrapper'>
                            <input
                                type='text'
                                name='fullname'
                                id="fullname"
                                className='form-input bg-[#161616] w-full px-4 py-4 text-gray-400 border border-gray-700 
                                rounded-md focus:outline-none focus:border-pink-600
                                '
                                rows="4"
                                placeholder='Full Name'
                            />
                            <input
                                type='email'
                                name='email'
                                id="email"
                                className='form-input bg-[#161616] w-full px-4 py-4 text-gray-400 border border-gray-700 
                            rounded-md focus:outline-none focus:border-pink-600
                            '
                            rows="4"
                                placeholder='Email Address'
                            />
                        </div>
                        <textarea
                            name='message'
                            className='form-input bg-[#161616] w-full px-4 py-4 text-gray-400 border border-gray-700 
                            rounded-md focus:outline-none focus:border-pink-600
                            '
                            rows="4"
                            // focus:border-pink-600
                            placeholder='Your message'
                        ></textarea>
                        {/* <a
                            href="#"
                            className='form-btn px-6 py-3 w-full flex justify-center items-center rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white'
                            aria-label="Send Message"
                        >
                            Send Message
                        </a> */}
                        <div className='sm:col-span-2'>
                        <button type='submit'
                                className='text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md'
                        >
                            Send
                        </button>
                        </div>
                    </form>
                </section>
            </div>
        </section>
    );
};

// https://app.getform.io/forms/panvowqa

export default Contact;
