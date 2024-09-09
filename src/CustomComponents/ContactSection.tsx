function ContactSection() {
  return (
    <section>
      {/* Contact Form Container */}
      <div className="w-[85%] h-[685px] bg-[#D9D9D9] mx-auto mt-10 rounded-[100px] shadow-2xl mb-10 relative">
        {/* Gradient Div on right */}
        <div className="h-full w-[20%] bg-black ml-auto rounded-tr-[100px] rounded-br-[100px] bg-muhoko-gradient"></div>
        {/* Gradient Div ending */}

        {/* Form Container */}
        <div className="w-[50%] h-[70%] rounded-[30px] bg-black absolute top-1/2 left-[450px] transform -translate-x-1/2 -translate-y-1/2">
          {/* Text Div */}
          <div className="p-5 shadow-2xl">
            <h1 className="text-5xl font-semibold text-white">
              Get in <span className="text-red-600">Touch</span>
            </h1>
            <p className="text-white">
              Have any questions or queries? Fill out the form below, and we’ll
              get back to you as soon as possible!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
