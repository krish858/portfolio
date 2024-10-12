import Default from "../Assets/default.png";

function Projectcard({
  img,
  title,
  description,
  link,
}: {
  img?: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div
      className="rounded-xl w-[80%] lg:w-[25%] shadow-lg shadow-slate-400"
      onClick={() => {
        window.location.href = link;
      }}
    >
      <div className="flex items-center">
        <div className=" w-[42%] p-2">
          <img
            src={img || Default}
            className="rounded-xl h-[80px] lg:h-[100px]"
          />
        </div>
        <div className="flex flex-col justify-center  space-y-2 items-center w-full">
          <h1 className="text-white font-Raleway">{title}</h1>
          <h1 className="text-gray-400">{description}</h1>
        </div>
      </div>
    </div>
  );
}

export default Projectcard;
