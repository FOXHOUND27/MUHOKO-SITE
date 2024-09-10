import { MuhokoTechnology, muhokoStudio } from "@/assets";
function DepartmentCard() {
    return (
        <>
        <section>

            <div className="flex bg-black text-white w-[80%] mx-auto my-5 rounded-xl ">

                <img className="object-cover rounded-tl-xl rounded-bl-xl" src={MuhokoTechnology} alt="" />

                <div className="px-5 py-5">
                    <h1>
                    MUHOKO TECHNOLOGY
                    </h1>
                    
                    <p className="w-[90%] my-5">
                    Muhoko  Technology began with a simple belief  in serving people who use machines.
                 
                    The Company believes that by taking time to understand each clients business and
                    operations , it can build a level of trust and understanding that will allow us to 
                    deliver the highest of quality technology services.
                    </p>
                    
                    <button className="bg-[#ED2330] text-white rounded-xl p-2">  
                    Learn more about Muhoko Technology
                    </button>
                </div>
            </div>



            <div className="flex bg-black text-white w-[80%] mx-auto my-5 rounded-xl ">

                <img className="object-cover rounded-tl-xl rounded-bl-xl w-[31%]" src={muhokoStudio} alt="" />

                <div className="px-5 py-5">
                    <h1>
                    MUHOKO STUDIO
                    </h1>
                    
                    <p className="w-[90%] my-5">
                    Muhoko Studio is a division of Muhoko  that is dedicated to quality game-making,
                    creative graphical representations such as animations , sounds and phenomenal
                    entertainment to consumers throughout Namibia.

                    It is dedicated to providing a wide range of entertainment options to the people
                    of Namibia.               
                    </p>
                    
                    <button className="bg-[#8351A1] text-white rounded-xl p-2">  
                    Learn more about Muhoko Studio
                    </button>
                </div>
            </div>




        </section>

        
        </>
    );

}

export default DepartmentCard;