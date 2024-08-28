import { useState } from "react";
import {
  brand,
  Instagram,
  Facebook,
  LinkedIn,
  Hamburger,
  Close,
} from "../assets";

function Navigation() {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle((prev) => !prev);
  }

  return (
    <nav className="py-4 w-full bg-custom-gradient shadow-xl fixed top-0 left-0">
      <div className="container h-full w-full md:flex md:justify-around md:items-center">
        {/* Logo */}
        <a href="#">
          {" "}
          <img src={brand} className="w-28" alt="logo" />
        </a>

        {/* Hamburger Meno Div */}
        <img
          src={toggle ? Close : Hamburger}
          className="w-5 md:hidden block absolute right-8 top-7 transition-all duration-500 cursor-pointer"
          onClick={handleClick}
          alt="Hamburger Menu"
        />
        {/* Navigation Items */}
        <ul
          className={`md:flex md:items-center md:text-lg text-white space-x-3 md:pb-0 pb-4 md:pt-0 pt-4 absolute md:static bg-[#242424] md:bg-transparent md:z-10 z-40 left-10 shadow-2xl rounded-lg w-[80%] md:w-auto text-center transition-all duration-500 ease-in ${
            toggle ? "top-20" : "top-[-490px]"
          }`}
        >
          <li className="hover:text-[#ED2330] transition-all duration-300 md:my-0  ml-3 my-1">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-[#ED2330] transition-all duration-300 md:my-0 my-1">
            <a href="#">About</a>
          </li>
          <li className="hover:text-[#ED2330] transition-all duration-300 md:my-0 my-1">
            <a href="#">Contact</a>
          </li>
          <li className="hover:text-[#ED2330] transition-all duration-300 md:my-0 my-1">
            <a href="#">Departments</a>
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
