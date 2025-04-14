import { MenuItemsQuantity } from "../types/types"
import { formatUSD } from "../helpers/helpers"


type ConsumoProps = {
  state: MenuItemsQuantity[]
  deleteDish: (id: number) => void
}

export default function Consumo({ state, deleteDish }: ConsumoProps) {



  return (
    <>
      <h2 className="text-2xl md:text-3xl font-semibold mb-5">Consumo</h2>

      <div className="h-96 overflow-y-auto">
        {state.map(function (item) {

          return (
            <div key={item.id} className="border-b border-b-blue-600/50 p-5 mb-5 flex justify-between items-center ">
              <div>
                <p>{item.name} - <span>{formatUSD(item.price)}</span></p>
                <p className="font-bold">Cantidad: {item.quantity}  - <span>{formatUSD(item.price * item.quantity)}</span></p>

              </div>

              <div>
                <button onClick={() => deleteDish(item.id)} className="bg-red-600 h-8 w-8 rounded-full text-white hover:bg-red-500 cursor-pointer hover:font-semibold">
                  X
                </button>
              </div>
            </div>
          )
        })}
      </div>


    </>
  )
}
