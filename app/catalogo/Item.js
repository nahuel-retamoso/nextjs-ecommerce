import Image from "next/image";
import Link from "next/link";

export default function Item () {
    return(
    <Link href={'item/12'} className="h-full w-full bg-black/20 shadow-md">
        <div className="relative w-full h-56 bg-red-400">
            <Image src='/black-cat.png' alt='item-image' fill={true}/>
        </div>
        <div className="font-bold ml-5 mb-8">
            <p className="m-2">Nombre del item</p>
            <p className="m-2">$150</p>
        </div>
    </Link>
    )
}