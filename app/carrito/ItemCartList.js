import Image from "next/image";

export default function ItemCartList (){
    return(
        <div className="w-full h-24 bg-[#EBE1BE] my-5 flex items-center justify-center text-lg">
            <div className="relative w-[20%] h-full bg-red-400">
                <Image src='/black-cat.png' alt='resume' fill={true}/>
            </div>
            <p className="w-[40%] pl-5 font-semibold">Nombre del item</p>
            <p className="w-[15%] flex justify-center">$160</p>
            <p className="w-[10%] flex justify-center font-semibold">x3</p>
            <div className="h-full w-[15%] flex items-center justify-center">
                <button className="w-8 h-8 bg-red-400 flex items-center justify-center text-white border-2 border-black shadow-lg">X</button>
            </div>
        </div>
    )
}