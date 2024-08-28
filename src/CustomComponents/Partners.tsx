import "../CSS/Styles.css";

function Partners() {
  return (
    <section className="container">
      <div className=" w-full md:w-[85%] h-[300px] md:h-[400px] bg-[#e5e5e5] partner-radius mx-auto my-20 shadow-xl">
        {/* Div containing titlt and subtitle text */}
        <div className="md:text-center py-6 md:px-0 px-4">
          <h1 className="md:text-2xl text-xs font-semibold">
            Our Partners and Collaborations
          </h1>
          <p className="md:text-lg text-xs md:w-auto w-[80%] text-[#716E6F] font-medium">
            Companies We Currently Work With and Have Partnered With in the Past{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Partners;
