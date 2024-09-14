import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { phone, email } from "../assets";

function ContactSection() {
  // initializing aos
  useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 1200, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    });

    // Refresh AOS to handle new elements dynamically added to the DOM
    AOS.refresh();
  }, []);
  return (
    <section>
      {/*Desktop Contact Form Container */}
      <div className="w-[85%] h-[685px] hidden md:block bg-[#D9D9D9] mx-auto mt-10 rounded-[100px] shadow-2xl mb-10 relative">
        {/* Gradient Div on right */}
        <div className="h-full w-[20%] bg-black ml-auto rounded-tr-[100px] rounded-br-[100px]"></div>
        {/* Gradient Div ending */}

        {/* Form Container */}
        <div className="w-[50%] h-[85%]  rounded-[30px] bg-black absolute top-1/2 left-[450px] transform -translate-x-1/2 -translate-y-1/2">
          {/* Text Div */}
          <div data-aos="zoom-out" className="p-4">
            <h1 className="text-5xl font-semibold text-white">
              Get in <span className="text-red-600">Touch</span>
            </h1>
            <p className="text-white">
              Have any questions or queries? Fill out the form below, and we’ll
              get back to you as soon as possible!
            </p>

            {/* Contact Form */}
            <form action="#" className="text-white  flex flex-col mt-10">
              {" "}
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="rounded-md mb-2 text-black p-1"
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="rounded-lg mb-5 text-black p-1"
              />
              <label>Message</label>
              <textarea
                name="message"
                className="rounded-md h-24 text-black p-1"
              />
              <input
                className="bg-white text-black my-4 cursor-pointer rounded-md py-1 hover:bg-red-600 hover:text-white  transition-all duration-500"
                type="submit"
                value="Send"
              />
            </form>
          </div>
          {/* Details Container */}
          <div className="flex">
            {" "}
            {/* Contact Details */}
            <div className="px-4 ">
              {/* Phone */}
              <div className="flex">
                <img src={phone} className="w-12 " alt="phone" />
                {/* Phone Text */}
                <div className="text-white ml-2">
                  <h1>PHONE</h1>
                  <h1>0810000000</h1>
                </div>
              </div>
            </div>
            {/* Email Details */}
            <div className="px-4 ">
              {/* Phone */}
              <div className="flex">
                <img src={email} className="w-12 " alt="phone" />
                {/* Phone Text */}
                <div className="text-white ml-2">
                  <h1>EMAIL</h1>
                  <h1>admin@muhoko.org</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile version of Contact Form */}
      <div className=" w-[85%] bg-black rounded-md py-5 px-4 mt-5 h-auto md:h-[400px] block md:hidden  mx-auto shadow-2xl relative ">
        {/* Contact Text Div */}
        <div className="block md:hidden">
          <h1 className="text-2xl font-semibold text-white">
            Get in <span className="text-red-600">Touch</span>
          </h1>
          <p className="text-white text-sm">
            Have any questions or queries? Fill out the form below, and we’ll
            get back to you as soon as possible!
          </p>
        </div>
        {/* Contact Form */}
        <form action="#" className="text-white flex flex-col mt-2">
          {" "}
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="rounded-md mb-2 text-black p-1"
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="rounded-lg mb-5 text-black p-1"
          />
          <label>Message</label>
          <textarea
            name="message"
            className="rounded-md h-24 text-black p-1 resize-none"
          />
          <input
            className="bg-white text-black my-4 cursor-pointer rounded-md py-1 hover:bg-red-600 hover:text-white  transition-all duration-500"
            type="submit"
            value="Send"
          />
        </form>

        <div className="flex flex-col items-center space-y-4 mt-2">
          {" "}
          {/* Contact Details */}
          <div>
            {/* Phone */}
            <div className="flex justify-center items-center">
              <img src={phone} className="w-12 " alt="phone" />
              {/* Phone Text */}
              <div className="text-white ml-2">
                <h1>PHONE</h1>
                <h1>0810000000</h1>
              </div>
            </div>
          </div>
          {/* Email Details */}
          <div>
            {/* Email */}
            <div className="flex justify-center items-center">
              <img src={email} className="w-12 " alt="phone" />
              {/* Email Text */}
              <div className="text-white ml-2">
                <h1>EMAIL</h1>
                <h1>admin@muhoko.org</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
