import { brand, Instagram, Facebook, LinkedIn } from "../assets/assets";

function Navigation() {
  return (
    <nav className="h-16 w-full bg-custom-gradient shadow-xl fixed top-0 left-0">
      <div className="container h-full w-full md:flex md:justify-around md:items-center">
        {/* Logo */}
        <img src={brand} className="w-28" alt="logo" />

        {/* Navigation Items */}
        <ul className="md:flex md:items-center md:text-lg text-white space-x-3">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Departments</a>
          </li>
        </ul>

        {/* Social links */}

        <div className="hidden md:flex md:space-x-3">
          <a href="#">
            <img src={Instagram} alt="instagram" />
          </a>
          <a href="https://www.facebook.com/muhoko.group/" target="_blank">
            <img src={Facebook} alt="facebook" />
          </a>
          <a href="#">
            {" "}
            <img src={LinkedIn} alt="Linkedin" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
