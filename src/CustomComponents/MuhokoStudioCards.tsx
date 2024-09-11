import { development, gameDev, character, films, ERP } from "../assets";

function MuhokoStudioCards () {
    return (
        <section>
          <h1 className="text-4xl font-semibold my-5 md:my-10 md:text-5xl text-black text-center">
            Muhoko Studio Services
          </h1>
    
          {/* Cards container */}
          <div className="w-full h-auto pt-0 md:pt-8 flex flex-col space-y-5 md:space-y-20 justify-center items-center ">
            {/* Service Card 1 */}
            <div className="w-[90%] md:w-[85%] h-auto md:h-[285px] space-x-0 md:space-x-48 flex flex-col md:flex-row justify-center items-center bg-studio-gradient bg-black rounded-md md:rounded-none  md:rounded-tl-[120px] md:rounded-br-[120px] shadow-2xl">
              <img
                src={gameDev}
                className="w-28 md:w-52 mt-2 md:mt-0"
                alt="Logo"
              />
              {/* Text Div */}
              <div>
                <h1 className="text-white text-center py-2 text-2xl md:text-4xl">
                  Game Development
                </h1>
                {/* Services Container */}
 
              </div>
            </div>
    
            {/* Service Card 2 */}
            <div className="w-[90%] pt-0 md:pt-8 md:w-[85%] h-auto md:h-[285px] space-x-0 md:space-x-24 flex flex-col md:flex-row justify-center items-center bg-studio-gradient bg-black rounded-md md:rounded-none bg-service-gradient md:rounded-tl-[120px] md:rounded-br-[120px] shadow-2xl">
              <img
                src={character}
                className="w-28 md:w-52 mt-2 md:mt-0"
                alt="Logo"
              />
              {/* Text Div */}
              <div>
                <h1 className="text-white text-center py-2 text-2xl md:text-4xl">
                    Animated Films
                </h1>
                {/* Services Container */}

              </div>
            </div>


            {/* Service Card 3 */}

            <div className="w-[90%] pt-0 md:pt-8 md:w-[85%] h-auto md:h-[285px] space-x-0 md:space-x-24 flex flex-col md:flex-row justify-center items-center bg-studio-gradient bg-black rounded-md md:rounded-none bg-service-gradient md:rounded-tl-[120px] md:rounded-br-[120px] shadow-2xl">
              <img
                src={films}
                className="w-28 md:w-52 mt-2 md:mt-0"
                alt="Logo"
              />
              {/* Text Div */}
              <div>
                <h1 className="text-white text-center py-2 text-2xl md:text-4xl">
                IbiaTV
                </h1>

                
                {/* Services Container */}

              </div>
            </div>


            {/* Service Card 4 */}

            <div className="w-[90%] pt-0 md:pt-8 md:w-[85%] h-auto md:h-[285px] space-x-0 md:space-x-24 flex flex-col md:flex-row justify-center items-center bg-studio-gradient bg-black rounded-md md:rounded-none bg-service-gradient md:rounded-tl-[120px] md:rounded-br-[120px] shadow-2xl">
              <img
                src={ERP}
                className="w-28 md:w-52 mt-2 md:mt-0"
                alt="Logo"
              />
              {/* Text Div */}
              <div>
                <h1 className="text-white text-center py-2 text-2xl md:text-4xl">
                  Software And Application Development
                </h1>
                {/* Services Container */}

              </div>
            </div>
          </div>
        </section>
      );
}

export default MuhokoStudioCards;