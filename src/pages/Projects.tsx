import Navbar from "../Components/Navbar";
import Projectcard from "../Components/Projectcard";
import { projectdata } from "../Assets/Arrays";

export interface projectdatatype {
  img?: string;
  title: string;
  description: string;
  link: string;
}

function Projects() {
  const projects = "<Projects/>";
  return (
    <div className="w-screen flex flex-col bg-[#000000]">
      <Navbar />
      <div className="flex flex-col justify-center items-center my-10 ">
        <div className="px-6">
          <h1 className=" md:text-2xl font-Raleway text-gray-400">
            Here is list to some of my{" "}
            <span className="text-white">{projects}</span>
          </h1>
        </div>
        <div className="w-full flex flex-col space-y-8 lg:space-y-10 mt-16 items-center justify-center">
          {projectdata.map((item, index) => (
            <Projectcard
              key={index}
              img={item.img}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
