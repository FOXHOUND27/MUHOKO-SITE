import { cover } from "@/assets";

function InfoCardSection() {
  return (
    <section className=" py-5">
      <div className="w-[80%] h-auto relative flex justify-center items-center flex-row-reverse left-[150px]">
        {/* Info Text */}
        <div className="mx-10">
          <h1 className="text-5xl w-[400px] text-left font-semibold">
            Leading the Future of Technology in Africa
          </h1>
          <p className="w-[400px] text-left text-base font-medium my-5">
            Muhoko Innovation Studio is a pioneering technology company based in
            Namibia, dedicated to delivering cutting-edge AI and futuristic
            technology solutions. With a mission to provide quality technology
            services tailored to the unique needs of each client
          </p>
        </div>
        {/* img/video div */}
        <div className="relative">
          <div className="w-[500px] h-[400px] flex justify-center items-center">
            <img src={cover} className="w-[500px] h-[400px] p-4 z-10" alt="" />
            {/* Square behind video */}
            <div className=" w-[450px] h-[350px] bg-muhoko-gradient absolute z-[5] top-[60px] right-[50px] rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoCardSection;
