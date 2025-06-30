import { FaPhoneAlt, FaEnvelope, FaCcVisa, FaCcMastercard, FaCcAmex, FaLock } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                {/* Contact Info */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
                    <p className="flex items-center mb-2 text-orange-500">
                        <FaPhoneAlt className="mr-2" />  +1 234 567 890
                    </p>
                    <p className="flex items-center text-orange-500">
                        <FaEnvelope className="mr-2" /> developedbyasif@gmail.com
                    </p>
                </div>

                {/* About Us */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-orange-400">Our Story</a></li>
                        <li><a href="#" className="hover:text-orange-400">Travel Blog & Tips</a></li>
                        <li><a href="#" className="hover:text-orange-400">Working With Us</a></li>
                        <li><a href="#" className="hover:text-orange-400">Be Our Partner</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-orange-400">Customer Support</a></li>
                        <li><a href="#" className="hover:text-orange-400">Privacy & Policy</a></li>
                        <li><a href="#" className="hover:text-orange-400">Contact Channels</a></li>
                    </ul>
                </div>

                {/* Payment Security */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Pay Safely With Us</h3>
                    <p className="text-sm mb-4">
                        The payment is encrypted and transmitted securely with <span className="text-white font-semibold">SSL protocol</span>.
                    </p>
                    <div className="flex space-x-4 text-3xl text-white">
                        <FaCcVisa />
                        <FaCcMastercard />
                        <FaCcAmex />
                        <FaLock />
                    </div>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} developedbyasif. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
