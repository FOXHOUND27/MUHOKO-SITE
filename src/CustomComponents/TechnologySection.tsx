import "../CSS/Styles.css";
import IconCloud from "@/components/magicui/icon-cloud";

function TechnologySection() {
  // Icon cloud Icons array
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  return (
    <section>
      {/* Main Content Container Div with styles */}
      <div className="w-[95%] h-[476px] bg-muhoko-gradient technology-radius mt-20 mb-10 mx-auto flex justify-center items-center space-x-10">
        {/* Div for text */}
        <div className="space-y-2 mt-16">
          <h1 className="w-[500px] text-white text-3xl text-left font-semibold">
            We make use of the most innovative technologies to provide our
            clients the highest of quality services{" "}
          </h1>
          <p className="w-[500px] text-white text-lg">
            Delivering exceptional quality services with cutting-edge
            technologies, ensuring unparalleled client satisfaction through
            innovative solutions and expertise
          </p>
          <button className="bg-black text-white py-2 px-5 rounded-lg hover:bg-white hover:text-black  transition-all duration-500">
            Enquire about our Services
          </button>
        </div>

        {/* Iconcloud Div  */}
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center pb-16 pt-5 pl-20  ">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </section>
  );
}

export default TechnologySection;
