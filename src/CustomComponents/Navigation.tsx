import { brand, Instagram, Facebook, LinkedIn } from "../assets/assets";

function Navigation() {
  return (
    <nav className="h-16 w-full bg-custom-gradient shadow-xl fixed top-0 left-0">
      <div className="container h-full w-full md:flex md:justify-around md:items-center">
        {/* Logo */}
        <a href="#">
          {" "}
          <img src={brand} className="w-28" alt="logo" />
        </a>

        {/* Navigation Items */}
        <ul className="md:flex md:items-center md:text-lg text-white space-x-3">
          <li className="hover:text-[#ED2330] transition-all duration-300">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-[#ED2330] transition-all duration-300">
            <a href="#">About</a>
          </li>
          <li className="hover:text-[#ED2330] transition-all duration-300">
            <a href="#">Contact</a>
          </li>
          <li className="hover:text-[#ED2330] transition-all duration-300">
            <a href="#">Departments</a>
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
