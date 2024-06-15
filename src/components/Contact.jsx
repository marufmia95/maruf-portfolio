import React from 'react';

const Contact = () => {

    return (
        <section className='max-w-[1200px] mx-auto p-5'>
            <header>
                <h2 className='h2 article-title'>Contact</h2>
            </header>
            <section className='mapbox'>
                <figure>
                    <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29179.15752685301!2d90.19391960882564!3d23.911073960744563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ef2e26644985%3A0x2d1f6903d1be0eb9!2sDhamrai!5e0!3m2!1sen!2sbd!4v1713842771106!5m2!1sen!2sbd' width="600" height="450" allowFullScreen=""
                    loading='lazy' referrerPolicy='no-referrer-when-downgrade' > </iframe>
                </figure>
            </section>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29179.15752685301!2d90.19391960882564!3d23.911073960744563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ef2e26644985%3A0x2d1f6903d1be0eb9!2sDhamrai!5e0!3m2!1sen!2sbd!4v1713842771106!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.581836757198!2d90.21682777347466!3d23.9044424828486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755efe34663ec11%3A0x18ddc5bb292adea!2sFaysal%20School%20%26%20College!5e0!3m2!1sen!2sbd!4v1713632474631!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}


        <section className='contact-form'>
            <h3 className='h3 form-title'>Contact From</h3>
            <form action="#" className='from'>
                <div className='input-wrapper'>
                    <input type='text' name='fullname' id="fullname" className='form-input' placeholder='Full Name' />
                    <input type='email' name='email' id="email" className='form-input' placeholder='Email Address' />
                </div>
                <textarea name='message' className='form-input' placeholder='Your message'></textarea>
                <button className='form-btn w-full' type='submit'>
                    <span>send Message</span>
                </button>
            </form>
        </section>

        </section>
    );
};

export default Contact;