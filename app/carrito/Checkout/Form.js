export default function Form() {
    return (
        <div className="w-4/5 flex flex-col">
            <p className="font-bold my-2">Nombre</p>
            <input className="h-8 px-3" />
            <p className="font-bold my-2">Email</p>
            <input className="h-8 px-3" />
            <p className="font-bold my-2">Telefono</p>
            <input className="h-8 px-3" />
            <p className="font-bold my-2">Calle</p>
            <input className="h-8 px-3" />
            <div className="flex">
                <div>
                    <p className="font-bold my-2">Numero</p>
                    <input className="h-8 px-3 mr-2" />
                </div>
                <div>
                    <p className="font-bold my-2">Piso/Dep</p>
                    <input className="h-8 px-3" />
                </div>
            </div>
            <p className="font-bold my-2">Provincia</p>
            <input className="h-8 px-3" />
            <div className="flex">
                <div>
                    <p className="font-bold my-2">Barrio</p>
                    <input className="h-8 px-3 mr-2" />
                </div>
                <div>
                    <p className="font-bold my-2">CP</p>
                    <input className="h-8 px-3" />
                </div>
            </div>
        </div>
    )
}