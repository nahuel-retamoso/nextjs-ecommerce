import Filter from "./Filter";
import Item from "./Item";

export default function () {
    return (
        <div className="flex w-full h-[90vh] px-20 pt-20">
            <Filter/>
            <div className="grid grid-cols-4 gap-6 w-[75%] h-full overflow-auto no-scrollbar no-scrollbar::-webkit-scrollbar">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </div>
    )
}