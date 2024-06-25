
interface type{
    Title: string;
    Data: Array<object>;
}

function StackTemplate({Title,Data}:type) {
    function renderer(){
        return(
            <div></div>
        );
    }
  return (
    <div className="border rounded-md border-gray-400 p-3">
        <div>
            <h1 className="text-2xl">{Title}</h1>
            <div className="p-3 text-xl">
                
            </div>
        </div>
    </div>
  )
}

export default StackTemplate