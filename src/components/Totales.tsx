import { MenuItemsQuantity } from "../types/types"
import { formatUSD } from "../helpers/helpers"


type TotalesProps = {
    state: MenuItemsQuantity[]
    tip: number
    setState: React.Dispatch<React.SetStateAction<MenuItemsQuantity[]>>
    setTip: React.Dispatch<React.SetStateAction<number>>
}

export default function Totales({ state, tip, setState, setTip }: TotalesProps) {

    function subTotal() {
        const sub = state.reduce(function (total, item) {
            return total = total + (item.price * item.quantity)
        }, 0)
        return sub;
    }
    function tipTotal() {
        return subTotal() * tip
    }
    function totalToPay() {
        return subTotal() + tipTotal()
    }

    function finishOrder() {
        setState([])
        setTip(0)
    }

    return (
        <div className="mt-5 ">
            <h2 className="font-semibold text-xl">Totales y Propinas</h2>
            <div>
                <p>SubTotal: <span className="font-bold">{formatUSD(subTotal())}</span></p>
                <p>Propina: <span className="font-bold">{formatUSD(tipTotal())}</span></p>
                <p>Total: <span className="font-bold">{formatUSD(totalToPay())}</span></p>
            </div>

            <button onClick={() => finishOrder()} className=" mt-5 w-full bg-blue-600 p-2 font-semibold text-white hover:bg-blue-500/90 cursor-pointer">
                Terminar Orden
            </button>
        </div>
    )
}
