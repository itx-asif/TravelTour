import Button from "../UI/Button";
import { BiLock, BiPhone } from "react-icons/bi";
import { FaFacebook, FaUser } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaX } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

const TopNavbar = () => {
  return (
    <div className="flex bg-white justify-between items-center px-6 pt-4 pb-4 border-b-1 border-gray-300">
      <div className="flex justify-between items-center w-full pr-6 md:border-r-2">
        <div className="md:flex hidden md:gap-8 text-gray-500  text-sm">
          <p className="flex items-center gap-x-2">
            <BiPhone /> +1 820 3345 33
          </p>
          <p className="flex items-center gap-x-2">
            <FiMail /> Contact@TravelTourWP.com
          </p>
        </div>
        <div className="flex text-sm space-x-6">
          <a href="https://www.facebook.com/">
            <FaFacebook className="hover:text-orange-600" />
          </a>
          <a href="https://www.instagram.com/">
            <BsInstagram className="hover:text-orange-600" />
          </a>
          <a href="https://x.com/">
            <FaX className="hover:text-orange-600" />
          </a>
        </div>
      </div>
      <div className="w-fit flex items-center">
        <Button variant="ghost" size="sm">
          <BiLock /> Login
        </Button>
        <Button variant="ghost" size="sm">
          <FaUser /> Sign Up
        </Button>
      </div>
    </div>
  );
};

export default TopNavbar;
