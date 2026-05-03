import React from 'react'

function InputBox({
    label,
    putCurr,
    putAmt,
    changeCurr,
    changeAmt,
    dis=false,
    option_list = []
}) {
    // if (option_list !== null && option_list !== undefined) {
    //     for (const [key, value] of Object.entries(option_list)) {
    //         console.log(`${key} : ki value is ${value}`);
    //     }
    // }
    return (
        <>
            <div className={`bg-white p-3 rounded-lg text-sm flex `}>
                <div className="w-1/2">
                    <label className="text-black/40 mb-2 inline-block">
                        {label}
                    </label>
                    <input
                        className="outline-none w-full bg-transparent py-1.5"
                        type="number"
                        placeholder="Enter Amount Here"
                        disabled={dis}
                        value={putAmt}
                        onChange={(e) => (
                            changeAmt(Number(e.target.value)))}
                    />
                </div>
                <div className="w-1/2 flex flex-wrap justify-end text-right">
                    <p className="text-black/40 mb-2 w-full">Currency Type</p>
                    <select
                        value={putCurr}
                        onChange={(e) => (changeCurr(e.target.value))}
                        className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    >
                        {option_list.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    )
}

export default InputBox;