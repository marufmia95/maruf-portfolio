import React from 'react';
import { FaGithub, FaInstagramSquare, FaTwitter, FaWhatsappSquare } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io5';

const Footer = () => {
    return (
        <footer className="bg-hsla(0, 0%, 0%, 0.5) text-white py-8 rounded-lg">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center">
                        <h1 className="font-bold text-xl mb-4">Social Media</h1>
                        <a href="https://www.facebook.com/maruf.mia.98871" className="text-gray-400 hover:underline block mb-2">Facebook</a>
                        <a href="https://www.instagram.com/maruf.mia.98871" className="text-gray-400 hover:underline block mb-2">Instagram</a>
                        <a href="https://twitter.com/marufmia95" className="text-gray-400 hover:underline block mb-2">Twitter</a>
                        <a href="https://www.linkedin.com/in/md-maruf-mia-7745b72b0" className="text-gray-400 hover:underline block mb-2">LinkedIn</a>
                        <a href="https://github.com/marufmia95" className="text-gray-400 hover:underline block mb-2">GitHub</a>
                    </div>
                    <div className="text-center">
                        <h1 className="font-bold text-xl mb-4">Contact</h1>
                        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" className="text-gray-400 mb-2 hover:underline"> md.marufmia4768@gmail.com</a>
                        <a href="tel:+8801903-225195" className="text-gray-400 mb-2 hover:underline">whatsapp Number : +8801903-225195</a>
                        <a href="tel:+8801811-374768" className="text-gray-400 mb-2 hover:underline"> Phone: +8801811-374768</a>
                        <a href="tel:+8801770-496561" className="text-gray-400 mb-2 hover:underline"> Phone: +8801770-496561</a>
                       
                       
                    </div>
                    <div className="text-center">
                        <h1 className="font-bold text-xl mb-4">Quick Links</h1>
                        <a href="/" className="text-gray-400 hover:underline block mb-2">Home</a>
                        <a href="/about" className="text-gray-400 hover:underline block mb-2">About</a>
                        <a href="/resume" className="text-gray-400 hover:underline block mb-2">Resume</a>
                        <a href="/Portfolio" className="text-gray-400 hover:underline block mb-2">Portfolio</a>
                        <a href="/contact" className="text-gray-400 hover:underline block mb-2">Contact</a>
                    </div>
                    <div className="text-center">
                        <h1 className="font-bold text-xl mb-4">Social Icons</h1>
                        <a href="#"><FaInstagramSquare className="text-3xl inline-block mb-2" /></a>
                        <a href="https://twitter.com/mia_maruf17792"><FaTwitter className="text-3xl inline-block mb-2" /></a>
                        <a href="https://www.linkedin.com/in/md-maruf-mia-7745b72b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><IoLogoLinkedin className="text-3xl inline-block mb-2" /></a>
                        <a href="https://web.whatsapp.com/"><FaWhatsappSquare className="text-3xl inline-block mb-2" /></a>
                        <a href="https://github.com/marufmia95"><FaGithub className="text-3xl inline-block mb-2" /></a>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <hr className="border-gray-600 mb-4" />
                    <p>&copy; 2024 - All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
