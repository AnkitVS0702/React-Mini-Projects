import { useState, useEffect, useRef, useCallback } from 'react'
import './App.css'

function App() {

  const [pass, setPass] = useState("abcdefgh")
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [len, setLen] = useState(8);


  //useRef hook
  const passwordRef = useRef(null);


  const set_password = useCallback(() => {
    let str = "abcdefghijklmnopqrstuwxyz"
    if (num) {
      str += "0123456789";
    }
    if (char) {
      str += "!@#$%^&*(){}[]?/"
    }
    let s = "";
    for (let i = 0; i < len; i++) {
      let l = str.length;
      let idx = Math.floor((Math.random()) * (l))
      s += str[idx];
    }
    setPass(s);
  }, [num, len, char]
  );

    useEffect(() => {
    set_password()
  }, [len, num, char])


  //copy to clipboard function
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();// This line is  only for showing the selected text in blue
    window.navigator.clipboard.writeText(pass)
  }, [pass])


  return (
    <>
      <div className="flex h-screen items-center justify-center bg-black">
        {/* Main Container */}
        <div className="w-full max-w-lg rounded-xl bg-[#1a1c2e] p-21 shadow-2xl">

          {/* Top Row: Input and Copy Button */}
          <div className="mb-6 flex overflow-hidden rounded-lg bg-white shadow">
            <input
              type="text"
              value={pass}
              className="w-full px-4 py-3 font-medium text-orange-600 outline-none"
              readOnly
              ref={passwordRef}
            />
            <button className="bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95" onClick={copyPasswordToClipboard}>
              copy
            </button>
          </div>

          {/* Bottom Row: Controls */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-orange-500">

            {/* Range Slider */}
            <div className="flex items-center gap-x-2">
              <input
                type="range"
                min="6"
                max="50"
                defaultValue={len}
                className="cursor-pointer accent-blue-500"
                onChange={(e) => {
                  setLen(e.target.value)
                }}
              />
              <label className="font-medium">Length ({len})</label>
            </div>

            {/* Numbers Checkbox */}
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                id="numbers"
                defaultChecked={num}
                onChange={() => {
                  setNum(!num)
                }}
                className="h-4 w-4 cursor-pointer accent-blue-500"
              />
              <label htmlFor="numbers" className="cursor-pointer font-medium">Numbers</label>
            </div>

            {/* Characters Checkbox */}
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                id="characters"
                defaultChecked={char}
                onChange={() => {
                  setChar(!char)
                }}
                className="h-4 w-4 cursor-pointer accent-blue-500"
              />
              <label htmlFor="characters" className="cursor-pointer font-medium">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
