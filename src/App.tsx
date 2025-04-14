import { useState } from "react"
import Consumo from "./components/Consumo"
import Menu from "./components/Menu"
import { MenuItemsQuantity, } from "./types/types"
import Propina from "./components/Propina"
import Totales from "./components/Totales"

function App() {

  const [state, setState] = useState<MenuItemsQuantity[]>([])
  const [tip, setTip] = useState(0);


  function deleteDish(id: number) {
    const remove = state.filter(function (item) {
      return item.id !== id
    })

    setState(remove)
  }



  return (
    <>
      <header className="p-5 bg-blue-600/60">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-center text-2xl md:text-4xl font-bold text-white uppercase">Consumo y Propinas</h1>
        </div>
      </header>

      <section className="">
        <div className="lg:grid grid-cols-2 gap-5 py-5 mx-auto max-w-4xl px-3">

          <section>
            <Menu
              state={state}
              setState={setState}
            />
          </section>

          {state.length ?
            <section className="p-10 border rounded-xl border-blue-600 border-dashed">
              <Consumo
                state={state}
                deleteDish={deleteDish}
              />

              <Propina
                tip={tip}
                setTip={setTip}
              />

              <Totales
                state={state}
                tip={tip}
                setState={setState}
                setTip={setTip}


              />
            </section>
            :
            <p className="text-center font-semibold text-xl">Ninguna orden registrada</p>
        }

        </div>

      </section>
    </>
  )
}

export default App
