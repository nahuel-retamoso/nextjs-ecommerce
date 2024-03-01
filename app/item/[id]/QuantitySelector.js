export default function QuantitySelector () {
    return(
        <div className="flex h-14 w-5/6 border-2 border-black shadow-lg m-5">
            <button className="h-full w-1/3 border-r-2 border-black flex items-center justify-center text-2xl text-bold">
                +
            </button>
            <p className="h-full w-1/3 flex items-center justify-center text-2xl font-bold">4</p>
            <button className="border-l-2 border-black flex items-center justify-center h-full w-1/3 text-2xl font-bold"> 
                -
            </button>
        </div>
    )
}