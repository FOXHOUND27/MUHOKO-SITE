import { useState } from "react";
import {
  brand,
  Instagram,
  Facebook,
  LinkedIn,
  HamburgerIcon,
  closeIcon,
} from "../assets";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Link } from "react-router-dom";

type navigation = {
  navColor: string; // Expecting a string type for color
};

function Navigation({ navColor }: navigation) {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle((prev) => !prev);
  }

  return (
    <nav
      className={`py-4 w-full ${navColor}    shadow-2xl fixed top-0 left-0 z-50`}
    >
      <div className="container h-full w-full md:flex md:justify-around md:items-center">
        {/* Logo */}
        <Link to="/">
          {" "}
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 0.5,
              rotate: -90,
              borderRadius: "100%",
            }}
            src={brand}
            className="w-28"
            alt="logo"
          />
        </Link>

        {/* Hamburger Meno Div */}
        <motion.img
          src={toggle ? closeIcon : HamburgerIcon}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="w-5 md:hidden block absolute right-8 top-7 transition-all duration-500 cursor-pointer"
          onClick={handleClick}
          alt="Hamburger Menu"
        />
        {/* Navigation Items */}
        <ul
          className={`md:flex md:items-center md:text-lg overflow-hidden text-white space-x-3 md:pb-0 pb-4 md:pt-0 pt-4 absolute md:static bg-[#242424] md:bg-transparent md:z-10 left-10 shadow-2xl rounded-lg w-[80%] md:w-auto text-center transition-all duration-500 ease-in ${
            toggle ? "top-20" : "top-[-490px]"
          }`}
        >
          <li className="hover:text-[#ED2330] transition-all duration-300 md:my-0  ml-3 my-1 ">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-[#ED2330] transition-all duration-300 md:my-0 my-1">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-[#ED2330] transition-all duration-300 md:my-0 my-1">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-[#ED2330] transition-all duration-300 md:my-0 my-1">
            <DropdownMenu>
              <DropdownMenuTrigger className="border-none px-0 mx-0 overflow-hidden">
                Departments
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black text-white border-none relative top-14 md:top-5">
                <Link to="/departments">
                  <DropdownMenuItem className="text-center">
                    Departments
                  </DropdownMenuItem>
                </Link>
                <Link to="/technology">
                  {" "}
                  <DropdownMenuItem>Muhoko Technology</DropdownMenuItem>
                </Link>
                <Link to="/studio">
                  <DropdownMenuItem>Muhoko Studio</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className="md:hidden block my-2">
            <div className="flex space-x-2 justify-center">
              {" "}
              <a href="https://www.instagram.com/muhoko_group/" target="_blank">
                <img src={Instagram} alt="instagram" />
              </a>
              <a href="https://www.facebook.com/muhoko.group/" target="_blank">
                <img src={Facebook} alt="facebook" />
              </a>
              <a
                href="https://www.linkedin.com/company/muhoko-group/posts/?feedView=all"
                target="_blank"
              >
                {" "}
                <img src={LinkedIn} alt="Linkedin" />
              </a>
            </div>
          </li>
        </ul>

        {/* Social links */}

        <div className="hidden md:flex md:space-x-3">
          <a href="https://www.instagram.com/muhoko_group/" target="_blank">
            <img src={Instagram} alt="instagram" />
          </a>
          <a href="https://www.facebook.com/muhoko.group/" target="_blank">
            <img src={Facebook} alt="facebook" />
          </a>
          <a
            href="https://www.linkedin.com/company/muhoko-group/posts/?feedView=all"
            target="_blank"
          >
            {" "}
            <img src={LinkedIn} alt="Linkedin" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
