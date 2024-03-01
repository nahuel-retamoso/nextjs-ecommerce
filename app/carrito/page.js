import CartList from "./CartList";
import Checkout from "./Checkout/Checkout";

export default function page () {
    return(
        <div className="h-[90vh] w-full flex">
            <CartList/>
            <Checkout/>
        </div>
    )
}