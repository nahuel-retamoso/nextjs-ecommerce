import RelatedList from "./components/RelatedList";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col w-full h-[70vh] items-center justify-center">
        <p className="text-5xl m-5 font-semibold">Polvo Estelar</p>
        <p className="text-lg">Descubri la nueva coleccion</p>
      </div>
      <div className="flex flex-col items-center border-t border-black p-10">
        <p className="text-xl font-semibold m-10">Los mas elegidos</p>
        <RelatedList/>
      </div>
    </div>
  )
}
