import "../CSS/Styles.css";
import { YouTube, Facebook, Instagram, LinkedIn, brand } from "../assets/index";
import { Link } from "react-router-dom";

function FooterSection() {
  return (
    <footer className="w-full bg-muhoko-gradient h-auto footer-radius mt-16 md:mt-0 flex flex-col md:flex-row justify-center py-10 space-x-0 md:space-x-20">
      {/* Footer Items */}
      <div className="flex flex-col items-center mx-auto md:mx-0">
        <img src={brand} className="w-80" alt="Logo" />
        <div className="flex space-x-2 items-center justify-center mt-4 ">
          <a
            href="https://www.linkedin.com/company/muhoko-group/posts/?feedView=all"
            target="_blank"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://www.facebook.com/muhoko.group/" target="_blank">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/muhoko_group/" target="_blank">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/@migptyltd1034" target="_blank">
            <img src={YouTube} alt="Youtube" />
          </a>
        </div>
      </div>
      {/* Footer Column One Ends Here */}
      {/* Column 2 */}
      <div>
        <h1 className="text-white text-xl mt-3 md:mt-0 py-0 md:py-3 text-center md:text-left">
          Services
        </h1>
        <ul className="space-y-1 text-center md:text-left">
          <li className="text-white hover:text-[#ED2330] ">
            <Link to="/technology">Web Development</Link>
          </li>
          <li className="text-white hover:text-[#ED2330] ">
            <Link to="/technology">App Development</Link>
          </li>

          <li className="text-white hover:text-[#ED2330] ">
            <Link to="/technology">Software Development</Link>
          </li>

          <li className="text-white hover:text-[#ED2330] ">
            <Link to="/technology">View More</Link>
          </li>
        </ul>
      </div>
      {/* Column 2 ends */}
      {/* Column 3 */}
      <div>
        <h1 className="text-white text-xl py-1 md:py-3 text-center md:text-left">
          Departments
        </h1>
        <ul className="space-y-1 text-center md:text-left">
          <li className="text-white hover:text-[#ED2330] transition-all duration-700">
            <Link to="/technology">Muhoko Technology</Link>
          </li>
          <li className="text-white hover:text-[#ED2330] transition-all duration-700">
            <Link to="/studio">Muhoko Studio</Link>
          </li>
        </ul>
      </div>
      {/* Column 3 ends */}
      {/* Column 4 starts */}
      <div>
        <h1 className="text-white text-xl py-0 md:py-3 text-center md:text-left">
          Projects
        </h1>
        <ul className="space-y-1 text-center md:text-left">
          <li>
            <a
              href="https://www.intrahealthnamibia.org/"
              target="_blank"
              className="text-white hover:text-[#ED2330] transition-all duration-700"
            >
              IntraHealth
            </a>
          </li>
          <li>
            <a
              href="https://mekenificent.com/"
              target="_blank"
              className="text-white hover:text-[#ED2330] transition-all duration-700"
            >
              Mekenficent
            </a>
          </li>
          <li>
            <a
              href="https://whkfashionweek.com/"
              target="_blank"
              className="text-white hover:text-[#ED2330] transition-all duration-700"
            >
              Windhoek Fashion Week
            </a>
          </li>

          <li>
            <a
              href="https://www.nttsnamibia.com/"
              target="_blank"
              className="text-white hover:text-[#ED2330] transition-all duration-700"
            >
              NTTS
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default FooterSection;
