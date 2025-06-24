import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function ContactUS() {
    return (
        <main className="bg-white px-4 py-12 max-w-6xl mx-auto space-y-16">

            {/* Contact Info Section */}
            <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                <div className="grid md:grid-cols-3 gap-8 text-gray-700">
                    <div className="flex items-start gap-3">
                        <FaPhoneAlt className="text-orange-500 text-xl mt-1" />
                        <div>
                            <h4 className="font-semibold text-lg mb-1">Call Us</h4>
                            <p>+1 234 567 890</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <FaEnvelope className="text-orange-500 text-xl mt-1" />
                        <div>
                            <h4 className="font-semibold text-lg mb-1">Email</h4>
                            <p>support@traveltour.com</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <FaMapMarkerAlt className="text-orange-500 text-xl mt-1" />
                        <div>
                            <h4 className="font-semibold text-lg mb-1">Office</h4>
                            <p>123 Travel St, Adventure City, World</p>
                        </div>
                    </div>
                </div>
            </section>
<div className={`md:flex w-full gap-3`}>


            {/* Contact Form */}
            <section className={`w-full`}>
                <h2 className="text-2xl font-bold  text-gray-800 mb-4">Send Us a Message</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 md:col-span-2"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 md:col-span-2"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition md:col-span-2"
                    >
                        Send Message
                    </button>
                </form>
            </section>

            {/* Map Section (optional) */}
    <section className={`w-full pb-12`}>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Location</h2>
                <div className="w-full h-full rounded overflow-hidden shadow-md">
                    <iframe
                        title="Google Maps"
                        src="https://maps.google.com/maps?q=islamabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        className="w-full h-full border-0"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
</div>
        </main>
    );
}

export default ContactUS;
