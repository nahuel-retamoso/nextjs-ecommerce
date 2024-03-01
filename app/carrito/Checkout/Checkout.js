import Form from "./Form";

export default function Checkout () {
    return(
     <div className="w-1/2 h-full flex flex-col items-center justify-center">
       <Form/>
        <button className="bg-[#81B28F] border-2 text-white font-bold border-black h-12 w-1/3 m-8 shadow-lg">
            Confirmar    
        </button>
    </div>
    )
}