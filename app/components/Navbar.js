import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='flex h-[10vh] w-full items-center border-b border-black'>
            <div className='w-1/3'>
                <h1 className='text-2xl font-bold ml-20'>SINGULAR EXPRESSION</h1>
            </div>
            <div className='w-1/3 flex justify-around items-center text-md'>
            <Link href={'/'}>Home</Link>
                <Link href={'/catalogo'}>Catalogo</Link>
            </div>
            <div className='flex w-1/3 items-center justify-end'>
                <Link href={'/carrito'} className='flex'>
                    <p className='text-2xl mr-2'>3</p>
                    <Image className='mr-20' src='/bag.png' alt='bag-icon' width={30} height={30} />
                </Link>
            </div>

        </div>
    )
}