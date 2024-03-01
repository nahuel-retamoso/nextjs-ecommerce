import Image from "next/image";
import Link from "next/link";

export default function ItemRelated () {
    return (
        <Link href='/item/13' className="bg-[#EBE1BE] w-64 h-[350px] flex flex-col justify-center items-center">
            <div className="relative h-3/4 w-[100%] bg-red-400">
                <Image src='/black-cat.png' alt='sticker' fill={true}/>
            </div>
            <div className="w-full flex flex-col items-center h-1/4 font-bold">
                <p className="mt-5 font-semibold">Titulo del item</p>
                <p className="m-2">$160</p>
            </div>

        </Link>
    )
}