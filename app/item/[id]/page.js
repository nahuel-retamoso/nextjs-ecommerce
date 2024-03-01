import AddToCartButton from "./AddToCartButton";
import QuantitySelector from "./QuantitySelector";
import RelatedList from "../../components/RelatedList";
import Image from "next/image";

export default function page() {
    return(
        <div className="w-full">
            <div className="flex w-full h-[80vh] border-b-2 border-black">
                <div className="flex items-center justify-center w-3/5 h-full">
                    <div className="relative w-[500px] h-[500px] bg-[#FFDA7B]">
                        <Image src="/black-cat.png" alt="sticker" fill={true} className="w-full h-full object-contain"/>
                    </div>
                </div>
                <div className="flex flex-col justify-center w-2/5 h-full pr-32">
                    <p className="font-semibold text-4xl m-5">Nombre del item</p>
                    <p className="font-bold text-2xl m-5 ml-10">$150</p>
                    <QuantitySelector/>
                    <AddToCartButton/>
                </div>
            </div>
            <div className="w-full flex flex-col items-center p-10">
                <p className="text-2xl font-bold mb-10">Relacionados</p>
                <RelatedList/>
            </div>
        </div>
    )
}