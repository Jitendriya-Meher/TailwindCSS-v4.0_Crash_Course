import React from 'react'

const App = () => {
  return (
    <div>

      <div className=" bg-deepblue p-12 my-container rounded-md flex flex-col items-center justify-center gap-4">

        <h1 className=' text-5xl font-bold text-white text-center animate-pulse'>
          This is TailwindCSS v4
        </h1>

        <button className=' bg-amber text-alabaster text-2xl font-bold mt-12 rounded-2xl px-6 py-4 border-4 animate-bounce cursor-pointer'>
          Click Here!
        </button>

        <input type="text" 
          placeholder='Enter your Name'
          className=' bg-white text-lg border-4 text-amber p-4 rounded-2xl ml-4 outline-0'
        />

      </div>

      <div className=" @container border p-4 my-2">

        <div className=" grid grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-4 gap-4">

          <div className="h-40 bg-blue-500"></div>

          <div className="h-40 bg-green-500"></div>

          <div className="h-40 bg-red-500"></div>

          <div className="h-40 bg-yellow-500"></div>

        </div>

      </div>


      <div className=" @container border p-4 my-2">

        <div className=" flex gap-4">

          <div className="h-40 w-64 bg-blue-500"></div>

          <div className="h-40 w-64 bg-green-500 @max-md:@max-xl:hidden"></div>

          <div className="h-40 w-64 bg-red-500"></div>

        </div>

      </div>

      <div className=" my-2 min-h-screen flex items-center justify-center bg-gray-100 perspective-1000">

        <div className=" bg-blue-500 h-96 w-96
         flex items-center justify-center text-white text-4xl font-bold transform rotate-x-35 rotate-y-35 hover:scale-150 hover:translate-z-20 transition-transform duration-300 hover:rotate-x-0 hover:rotate-y-0">
          3D Rotate
         </div>

      </div>

      <div className=" my-2 flex items-center justify-center bg-gray-100 flex-col gap-4">

        <div className=" bg-linear-45 from-blue-500 to-green-500 rounded text-2xl font-bold text-white p-8 my-4">
          Angle Gradient
        </div>

        <div className=" size-64 rounded-full bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600">
        </div>

        <div className=" bg-radial from-yellow-500 to-red-500 h-64 w-64 rounded-full">
        </div>

      </div>

      <div className=" min-h-screen grid gap-4 place-items-center bg-deepblue">

        <input type="text" 
          placeholder='Enter your Name'
          className=' inset-shadow-sm inset-shadow-amber-500 border-4 rounded-sm w-96 h-18 p-4 text-xl text-amber outline-none'
        />

        <input type="text" 
          placeholder='Enter your Name'
          className=' inset-shadow-sm inset-shadow-amber-500 ring-4 rounded-sm w-96 h-18 p-4 text-xl text-amber outline-none'
        />

        <input type="text" 
          placeholder='Enter your Name'
          className=' inset-ring-4 inset-shadow-amber-500 rounded-sm w-96 h-18 p-4 text-xl text-amber outline-none'
        />

      </div>

      <div className=" min-h-screen flex items-center justify-center bg-gray-100">

        <ul className=' space-y-4 text-center'>

          <li className=' bg-gray-200 p-4 rounded-2xl not-active:bg-red-500'>Item 1</li>

          <li className=' bg-gray-200 p-4 rounded-2xl active'>Item 2 (Active)</li>

          <li className=' bg-gray-200 p-4 rounded-2xl not-active:bg-red-500'>Item 3</li>

        </ul>

      </div>

    </div>
  )
}

export default App