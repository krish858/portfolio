
interface type{
    Title: string;
    Data: Array<data>;
}
export interface data{
    image: string;
    name: string;
}

function StackTemplate({Title,Data}:type) {
    function renderer(){
        return(
            Data.map(data=> <div className="flex flex-row py-2 items-center"><div className="px-2"><img className="h-[35px] rounded-full" src={data.image} alt={data.name} /></div><div>{data.name}</div></div>)
        );
    }
  return (
    <div className=" w-[250px] border rounded-md border-gray-400 p-3">
        <div>
            <h1 className="text-2xl">{Title}</h1>
            <div className=" flex flex-col p-3 text-xl">
                {renderer()}
            </div>
        </div>
    </div>
  )
}

export default StackTemplate