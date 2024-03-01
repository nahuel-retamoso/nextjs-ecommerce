import ItemCartList from "./ItemCartList";

export default function CartList () {
    return (
        <div className="w-1/2 h-full flex flex-col items-center justify-center">
            <p className="font-bold text-xl my-5">Tu carrito</p>
            <div className="w-4/5 overflow-auto no-scrollbar no-scrollbar::-webkit-scrollbar">
                <ItemCartList/>
                <ItemCartList/>
                <ItemCartList/>
                <ItemCartList/>
                <ItemCartList/>
                <ItemCartList/>
            </div>
            <div className="h-32 w-4/5 bg-[#D9D9D9] border-2 border-black shadow-xl flex items-center justify-center m-10">
                <p className="font-bold text-xl w-4/6">
                    Total= $160
                </p>
                <button className="bg-red-400 h-10 p-3 flex items-center justify-center text-white border-2 border-black shadow-lg font-bold">
                    Vaciar carrito
                </button>

            </div>
        </div>
    )
}