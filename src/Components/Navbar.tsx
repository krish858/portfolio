import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="flex invisible md:visible justify-center md:p-8">
      <div className="flex flex-row justify-around items-center w-auto bg-[#211F23] font-Raleway text-xl text-purple-400 rounded-full p-3 md:p-6">
        <div className="cursor-pointer px-2">
          <span
            onClick={() => {
              navigate("/portfolio/");
            }}
          >
            Krish
          </span>
        </div>
        <div className="cursor-pointer px-2">
          <span onClick={() => navigate("/portfolio/experience")}>
            experience
          </span>
        </div>
        <div className="cursor-pointer px-2">
          <span
            onClick={() => {
              navigate("/portfolio/projects");
            }}
          >
            projects
          </span>
        </div>
        <div className="flex justify-center px-2">
          <div className="px-2">
            <a href="https://github.com/krish858">
              <span className="cursor-pointer">
                <BsGithub />
              </span>
            </a>
          </div>
          <div className="px-2">
            <a href="https://www.linkedin.com/in/krishpandey858/">
              <span className="cursor-pointer">
                <BsLinkedin />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
