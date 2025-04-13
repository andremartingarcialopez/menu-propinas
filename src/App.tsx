import { useState } from "react"
import Consumo from "./components/Consumo"
import Menu from "./components/Menu"
import { MenuItemsQuantity,  } from "./types/types"

function App() {

  const [state, setState] = useState<MenuItemsQuantity[]>([])



  return (
    <>
      <header className="p-5 bg-blue-600/60">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-center text-2xl md:text-4xl font-bold text-white uppercase">Consumo y Propinas</h1>
        </div>
      </header>

      <section className="">
        <div className="grid grid-cols-2 gap-5 py-5 mx-auto max-w-4xl">

          <div>
            <Menu
            state={state}
            setState={setState}
            />
          </div>


          <div>
            <Consumo
            state={state}
            />
          </div>

        </div>

      </section>
    </>
  )
}

export default App
