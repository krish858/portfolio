import Navbar from "../Components/Navbar";

function Projects() {
  const projects = "<Projects/>";
  return (
    <div className="w-screen flex flex-col bg-[#000000]">
      <Navbar />
      <div className="flex justify-center items-center my-10 ">
        <div className="px-6">
          <h1 className=" md:text-2xl font-Raleway text-gray-400">
            Here is list to some of my{" "}
            <span className="text-white">{projects}</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Projects;
