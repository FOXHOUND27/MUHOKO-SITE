import "../CSS/Styles.css";
import { YouTube, Facebook, Instagram, LinkedIn, brand } from "../assets/index";

function FooterSection() {
  return (
    <footer className="w-full bg-muhoko-gradient h-[284px] footer-radius flex justify-center pt-10  space-x-10">
      {/* Footer Items */}
      <div className="flex flex-col items-center">
        <img src={brand} className="w-80" alt="Logo" />
        <div className="flex space-x-2 items-center justify-center mt-4">
          <a href="#">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="#">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="#">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="#">
            <img src={YouTube} alt="Youtube" />
          </a>
        </div>
      </div>
      {/* Footer Column One Ends Here */}
      <div>
        <h1 className="text-white text-xl py-3">Services</h1>
        <ul className="space-y-1">
          <li>
            <a
              href="#"
              className="text-white hover:text-[#ED2330] transition-all duration-700"
            >
              Web development
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-[#ED2330] transition-all duration-700"
            >
              App development
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-white hover:text-[#ED2330] transition-all duration-700"
            >
              Software development
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-white hover:text-[#ED2330] transition-all duration-700"
            >
              View More
            </a>
          </li>
        </ul>
      </div>
      {/* Column 3 */}
      <div>
        <h1 className="text-white text-xl py-3">Departments</h1>
        <ul className="space-y-1">
          <li>
            <a
              href="#"
              className="text-white hover:text-[#ED2330] transition-all duration-700"
            >
              Muhoko Technology
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-[#ED2330] transition-all duration-700"
            >
              Muhoko Studio
            </a>
          </li>
        </ul>
      </div>
      <div></div>
    </footer>
  );
}

export default FooterSection;
