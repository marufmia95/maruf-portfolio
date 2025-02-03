import { FaGithub, FaInstagramSquare, FaTwitter, FaWhatsappSquare } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io5';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 rounded-lg">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
                    
                    {/* Social Media */}
                    <div>
                        <h1 className="font-bold text-xl mb-3">Social Media</h1>
                        <a href="#" className="text-gray-400 hover:underline block">Facebook</a>
                        <a href="#" className="text-gray-400 hover:underline block">Instagram</a>
                        <a href="#" className="text-gray-400 hover:underline block">Twitter</a>
                        <a href="#" className="text-gray-400 hover:underline block">LinkedIn</a>
                        <a href="#" className="text-gray-400 hover:underline block">GitHub</a>
                    </div>

                    {/* Contact */}
                    <div>
                        <h1 className="font-bold text-xl mb-3">Contact</h1>
                        <a href="tel:+8801900000000" className="text-gray-400 hover:underline block">WhatsApp: +8801900-000000</a>
                        <a href="tel:+8801800000000" className="text-gray-400 hover:underline block">Phone: +8801800-000000</a>
                        <a href="tel:+8801700000000" className="text-gray-400 hover:underline block">Phone: +8801700-000000</a>
                        <a href="tel:+8801600000000" className="text-gray-400 hover:underline block">Phone: +8801700-000000</a>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h1 className="font-bold text-xl mb-3">Quick Links</h1>
                        <a href="/" className="text-gray-400 hover:underline block">Home</a>
                        <a href="/about" className="text-gray-400 hover:underline block">About</a>
                        <a href="/resume" className="text-gray-400 hover:underline block">Resume</a>
                        <a href="/portfolio" className="text-gray-400 hover:underline block">Portfolio</a>
                        <a href="/contact" className="text-gray-400 hover:underline block">Contact</a>
                    </div>

                    {/* Social Icons */}
                    <div>
                        <h1 className="font-bold text-xl mb-3">Social Icons</h1>
                        <div className="flex justify-center gap-4">
                            <a href="#"><FaInstagramSquare className="text-3xl hover:text-pink-500" /></a>
                            <a href="#"><FaTwitter className="text-3xl hover:text-blue-400" /></a>
                            <a href="#"><IoLogoLinkedin className="text-3xl hover:text-blue-600" /></a>
                            <a href="#"><FaWhatsappSquare className="text-3xl hover:text-green-500" /></a>
                            <a href="#"><FaGithub className="text-3xl hover:text-gray-500" /></a>
                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="text-center mt-6">
                    <hr className="border-gray-600 mb-4" />
                    <p>&copy; 2025 - All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
