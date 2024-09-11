import { websites, development, ERP, bigData, robot } from "../assets";

function MuhokoTechnologyServices() {
  return (
    <section>
      <h1 className="text-4xl font-semibold my-5 md:my-10 md:text-5xl text-black text-center">
        Muhoko Technology Services
      </h1>

      {/* Cards container */}
      <div className="w-full h-auto pt-0 md:pt-8 flex flex-col space-y-5 md:space-y-20 justify-center items-center ">
        {/* Service Card 1 */}
        <div className="w-[90%] md:w-[85%] h-auto md:h-[285px] space-x-0 md:space-x-48 flex flex-col md:flex-row justify-center items-center  bg-black rounded-md md:rounded-none bg-service-gradient md:rounded-tl-[120px] md:rounded-br-[120px] shadow-2xl">
          <img
            src={websites}
            className="w-28 md:w-52 mt-2 md:mt-0"
            alt="Logo"
          />
          {/* Text Div */}
          <div>
            <h1 className="text-white text-center py-2 text-2xl md:text-4xl">
              WEBSITES
            </h1>
            {/* Services Container */}
            <div className="flex text-base md:text-2xl space-x-0 md:space-x-10 justify-center items-center mb-4 md:mb-0">
              {/* Service Column 1 */}
              <ul className="text-white px-5">
                <li>Website Development</li>
                <li>Website and email Hosting</li>
                <li>DomainRegistration</li>
              </ul>
              {/* Service Column 2 */}
              <ul className="text-white px-5">
                <li>Website Development</li>
                <li>Website and email Hosting</li>
                <li>DomainRegistration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service Card 2 */}
        <div className="w-[90%] pt-0 md:pt-8 md:w-[85%] h-auto md:h-[285px] space-x-0 md:space-x-24 flex flex-col md:flex-row justify-center items-center  bg-black rounded-md md:rounded-none bg-service-gradient md:rounded-tl-[120px] md:rounded-br-[120px] shadow-2xl">
          <img
            src={development}
            className="w-28 md:w-52 mt-2 md:mt-0"
            alt="Logo"
          />
          {/* Text Div */}
          <div>
            <h1 className="text-white text-center py-2 text-2xl md:text-4xl">
              Software And Application Development
            </h1>
            {/* Services Container */}
            <div className="flex text-base md:text-2xl space-x-0 md:space-x-10 justify-center mb-4 md:mb-0">
              {/* Service Column 1 */}
              <ul className="text-white px-5">
                <li>Software installation and IT consulting</li>
                <li>Mobile and Application Development</li>
                <li>Computers and Devices</li>
                <li>IT Helpdesk</li>
              </ul>
              {/* Service Column 2 */}
              <ul className="text-white px-5">
                <li>Software Development</li>
                <li>Website and email Hosting</li>
                <li>DomainRegistration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MuhokoTechnologyServices;
