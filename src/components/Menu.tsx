import { menuItems } from "../data/menuItems";
import { MenuItems, MenuItemsQuantity } from "../types/types";

type MenuProps = {
    state: MenuItemsQuantity[],
    setState: React.Dispatch<React.SetStateAction<MenuItemsQuantity[]>>
}

export default function Menu({ state, setState }: MenuProps) {

    const formatUSD = (value: number) =>
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(value);

    function addDish(item: MenuItems) {

        const existe = state.some(function (itemState) {
            return itemState.id == item.id
        });

        if (existe) {
            const update = state.map(function (iteamState) {
                if (iteamState.id == item.id) {
                    return { ...iteamState, quantity: iteamState.quantity + 1 }
                } else {
                    return iteamState
                }
            });

            setState(update)
        } else {
            const newIteam : MenuItemsQuantity = { ...item, quantity: 1 }
            setState([...state, newIteam])
        }
    }

    return (
        <>
            <h2 className="text-2xl md:text-3xl font-semibold mb-5">Menu</h2>
            {menuItems.map(function (item) {
                return (
                    <div key={item.id} className="w-full">
                        <button onClick={() => addDish(item)} className="border border-blue-600 hover:bg-blue-600/50 cursor-pointer hover:font-semibold w-full flex justify-between p-3 mb-3 rounded-xl ">
                            <p>{item.name}</p>
                            <p className="font-semibold">{formatUSD(item.price)}</p>
                        </button>
                    </div>
                )
            })}
        </>
    )
}
