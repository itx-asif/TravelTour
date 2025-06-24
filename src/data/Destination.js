import europeImg from "../assets/europe.jpg";
import scandinaviaImg from "../assets/scandinavia.jpg";
import asiaImg from "../assets/asia.jpg";
import americaImg from "../assets/america.jpg";
import africaImg from "../assets/africa.jpg";

const destinations = [
    {
        title: "Western Europe",
        image: europeImg,
        tours: 3,
        size: 2,
        description: "Discover historic cities, iconic landmarks, and rich cultures across France, Germany, and Italy.",
    },
    {
        title: "Scandinavia",
        image: scandinaviaImg,
        tours: 2,
        size: 1,
        description: "Explore the serene fjords of Norway, stylish streets of Sweden, and cozy charm of Denmark.",
    },
    {
        title: "Asia",
        image: asiaImg,
        tours: 5,
        size: 1,
        description: "From ancient temples to futuristic cities, Asia offers a vibrant mix of tradition and innovation.",
    },
    {
        title: "America",
        image: americaImg,
        tours: 4,
        size: 1,
        description: "Experience the diversity of the Americas—from the Grand Canyon to bustling New York City.",
    },
    {
        title: "Africa Wild",
        image: africaImg,
        tours: 3,
        size: 1,
        description: "Go on a wild safari, visit tribal villages, and witness Africa's stunning natural wonders.",
    },
];

export default destinations;
