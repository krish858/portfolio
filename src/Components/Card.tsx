interface card{
    image: string,
    Title: string,
}


function Card({image,Title}:card) {
  return (
    <div className="flex md:flex-shrink-0 p-4">
        <div className="flex w-[175px] flex-col text-white border rounded-3xl border-gray-400 text-3xl p-4">
            <img src={image} alt={Title} className="h-[50px] w-[50px] rounded-md my-4" />
            <h1 className="pb-2">{Title}</h1>
        </div>
    </div>
    
  )
}

export default Card
