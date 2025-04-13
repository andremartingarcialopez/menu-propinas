import { MenuItemsQuantity } from "../types/types"


type ConsumoProps = {
  state: MenuItemsQuantity[]
}

export default function Consumo({ state }: ConsumoProps) {

  

  return (
    <>
      <h2 className="text-2xl md:text-3xl font-semibold mb-5">Consumo</h2>

      <div className="p-10 border rounded-xl border-blue-600 border-dashed">


        {state.map(function (item) {
          
          return (
              <div key={item.id} className="border-b border-b-blue-600/50 p-5 mb-5 flex justify-between items-center ">
                <div>
                  <p>{item.name} - <span>${item.price}</span></p>
                  <p className="font-bold">Cantidad: {item.quantity}  - <span>${item.price}</span></p>
                </div>

                <div>
                  <button className="bg-red-600 h-8 w-8 rounded-full text-white hover:bg-red-500 cursor-pointer hover:font-semibold">X</button>
                </div>
              </div>
            
          )
        })}
      </div>


    </>
  )
}
