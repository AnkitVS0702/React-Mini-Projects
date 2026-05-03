import { useState, useEffect } from 'react'
import InputBox from './components/InputBox'
import './App.css'
import useCurrencyInfoCustomHook from './hooks/useCurrencyInfoCustomHook.jsx'

function App() {
  // console.log(typeof(option_list));
  // for (const key in (data)) {
  //   console.log(`${key} ki value is ${data[key]}`)
  // }
  const [currFrom, setCurrFrom] = useState("usd");
  const [currTo, setCurrTo] = useState("inr");
  const [amtFrom, setAmtFrom] = useState(1);
  const option_list = useCurrencyInfoCustomHook(currFrom);
  const [amtTo, setAmtTo] = useState(0);

  function convert() {
    setAmtTo(amtFrom * option_list[currTo]);
  }

  useEffect(() => {
    convert();
  }, [amtFrom, currTo, option_list]);


  function palat() {
    setCurrFrom(currTo);
    setCurrTo(currFrom);
    setAmtFrom(amtTo);
    setAmtTo(amtFrom);
  }
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://t3.ftcdn.net/jpg/00/96/30/96/360_F_96309663_ctezJa3J2YlzUWYm6aZR6MNbYr9Yq7OJ.jpg')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  putCurr={currFrom}
                  putAmt={amtFrom}
                  changeCurr={(currFrom) => (
                    setCurrFrom(currFrom))}
                  changeAmt={(amtFrom) => (
                    setAmtFrom(amtFrom))}
                dis={false}
                  option_list={Object.keys(option_list)}
                />
              </div>
              <div className="relative w-full h-0.5">


                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={() => { palat() }}
                >
                  swap
                </button>


              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  putCurr={currTo}
                  putAmt={amtTo}
                  changeCurr={(currTo) => (
                    setCurrTo(currTo))}
                  changeAmt={(amtTo) => (
                    setAmtTo(amtTo))}
                  dis={true}
                  option_list={Object.keys(option_list)}
                />
              </div>
              <button type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                onClick={() => { convert() }}
              >
                Convert
              </button>
            </form>
          </div>
        </div>


      </div>
    </>
  )
}

export default App
