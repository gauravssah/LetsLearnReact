import { useState } from "react"

function App() {
  const [color, setColor] = useState("grey");

  return (
    <>
      <div className=" w-full h-screen duration-200 " style={{ background: color }}>
        <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl cursor-pointer">
            <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ background: "red", fontWeight: "bold" }}>Red</button>

            <button onClick={() => setColor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ background: "pink", fontWeight: "bold" }}>Pink</button>

            <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ background: "blue", fontWeight: "bold" }}>Blue</button>

            <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ background: "orange", fontWeight: "bold" }}>Orange</button>

            <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ background: "green", fontWeight: "bold" }}>Green</button>


          </div>
        </div>
      </div>
    </>
  )
}

export default App
