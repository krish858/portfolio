import Navbar from "../Components/Navbar";

function Experience() {
  return (
    <div className="w-screen flex flex-col bg-[#000000]">
      <Navbar />
      <div className="flex justify-center items-center my-10 ">
        <div className="px-6">
          <h1 className=" md:text-2xl font-Raleway text-center text-gray-400">
            Get to know me better and explore my journey as a{" "}
            <span className="text-white">Fullstack Software engineer</span>
          </h1>
        </div>
      </div>
      <div className="w-full flex flex-col space-y-8 lg:space-y-10 mt-16 items-center justify-center"></div>
    </div>
  );
}

export default Experience;
