

import {FaGlobe, FaTags, FaUsers} from "react-icons/fa";
export const features = [
    {
        icon: <FaGlobe size={32} />,
        title: "700+ Destinations",
        description: "Our expert team handpicked all destinations in this site"
    },
    {
        icon: <FaTags size={32} />,
        title: "Best Price Guarantee",
        description: "Price match within 48 hours of order confirmation"
    },
    {
        icon: <FaUsers size={32} />,
        title: "Top Notch Support",
        description: "We are here to help, before, during, and even after your trip."
    }
];
function KeyBenefits() {
    return (

        <section className="text-white "  style={{
            background: `linear-gradient(0deg, rgba(255, 255, 255, 1) 70%, rgba(87, 199, 133, 0) 50%, rgba(255, 255, 255, 0) 100%)`
        }}>
            <div className="grid md:grid-cols-3 bg-gradient-to-r md:-mt-16 from-orange-400 max-w-6xl mx-auto md:rounded-md shadow-lg to-orange-500 md:gap-20 gap-16 md:px-16 px-12 py-10 text-center">
                {features.map((item, index) => (
                    <div key={index} className="flex flex-row gap-4  items-center">
                        <div className="mb-4 text-white">{item.icon}</div>
                        <div>
                        <h3 className="font-bold uppercase tracking-widest mb-2 text-sm">{item.title}</h3>
                        <p className="text-sm opacity-90">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
}

export default KeyBenefits;
