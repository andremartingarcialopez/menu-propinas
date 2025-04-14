
const tips = [
    { tip: 10, value: .10, id: "10" },
    { tip: 20, value: .20, id: "20" },
    { tip: 30, value: .30, id: "30" },
]

type PropinaProps = {
    tip: number
    setTip: React.Dispatch<React.SetStateAction<number>>
}

export default function Propina({ tip, setTip }: PropinaProps) {



    return (
        <>
            <h2 className="text-xl font-semibold">Propina:</h2>
            <div>
                {tips.map(function (tipOption) {
                    return (
                        <form key={tipOption.id} className="flex gap-2">
                            <label htmlFor="">{tipOption.tip}%</label>
                            <input value={tipOption.value}
                                type="radio"
                                name="tip"
                                id={tipOption.id}
                                onChange={e => setTip(+e.target.value)}
                                checked={tipOption.value == tip}
                            />
                        </form>



                    )
                })}
            </div>
        </>
    )
}
