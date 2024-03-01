import FilterButton from "./FilterButton";

export default function Filter () {
    return (
        <div className="flex flex-col items-center w-[25%] h-full font-bold pr-20">
            <button className="flex items-center justify-center h-16 w-full bg-[#EBE1BE] border-2 border-black mb-10 shadow-lg">
                Mostrame todo
            </button>
            <div className="flex flex-col items-center justify-center w-full h-fit border-2 border-black bg-[#EBE1BE]">
                <p className="text-xl m-4 underline">Colecciones</p>
                <FilterButton/>
                <FilterButton/>
                <FilterButton/>
                <FilterButton/>
            </div>
        </div>
    )
}