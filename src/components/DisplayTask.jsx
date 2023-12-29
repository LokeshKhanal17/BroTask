
const DisplayTask = () => {
  return (
   <>
   <section className="flex-col bg-slate-300 rounded-lg">
   <div className=" p-3 my-4  mx-4 flex justify-between items-center ">
        <div className="flex justify-between items-center gap-4">
        <span className="text-2xl font-extralight">Bro Task List</span>
        <span className="text-xl p-2 rounded-full bg-slate-100 font-extralight">0</span>
        </div>
        <button
        className="ml-2 p-2  rounded-lg bg-red-400 border-2 cursor-pointer"
        >Clear All</button>
    </div>
    <ul className="mx-4 flex flex-wrap justify-start items-center">
    <li  className=" p-2 flex justify-between bg-orange-200 m-3 rounded-lg">
            <div className="flex flex-col">
            <span className="justify-center text-center text-2xl">Task Title</span>
            <span className="text-l font-extralight mt-4 ml-4">I want to go to superStore</span>
            </div>
            <div className="flex flex-col">
            <button className="ml-2 p-2   rounded-lg bg-red-500 cursor-pointer span-style">
                x
            </button>
            <button className="m-2 p-2 rounded-lg bg-green-500 cursor-pointer span-style">
                    -
            </button>
            </div>
            
        </li>
        <li  className=" p-2 flex justify-between bg-orange-200 m-3 rounded-lg">
            <div className="flex flex-col">
            <span className="justify-center text-center text-2xl">Task Title</span>
            <span className="text-l font-extralight mt-4 ml-4">I want to go to superStore</span>
            </div>
            <div className="flex flex-col">
            <button className="ml-2 p-2   rounded-lg bg-red-500 cursor-pointer span-style">
                x
            </button>
            <button className="m-2 p-2 rounded-lg bg-green-500 cursor-pointer span-style">
                    -
            </button>
            </div>
            
        </li>
        <li  className=" p-2 flex justify-between bg-orange-200 m-3 rounded-lg">
            <div className="flex flex-col">
            <span className="justify-center text-center text-2xl">Task Title</span>
            <span className="text-l font-extralight mt-4 ml-4">I want to go to superStore</span>
            </div>
            <div className="flex flex-col">
            <button className="ml-2 p-2   rounded-lg bg-red-500 cursor-pointer span-style">
                x
            </button>
            <button className="m-2 p-2 rounded-lg bg-green-500 cursor-pointer span-style">
                    -
            </button>
            </div>
            
        </li>
        <li  className=" p-2 flex justify-between bg-orange-200 m-3 rounded-lg">
            <div className="flex flex-col">
            <span className="justify-center text-center text-2xl">Task Title</span>
            <span className="text-l font-extralight mt-4 ml-4">I want to go to superStore</span>
            </div>
            <div className="flex flex-col">
            <button className="ml-2 p-2   rounded-lg bg-red-500 cursor-pointer span-style">
                x
            </button>
            <button className="m-2 p-2 rounded-lg bg-green-500 cursor-pointer span-style">
                    -
            </button>
            </div>
            
        </li>
        </ul>

    </section>
    
   </>
  )
}

export default DisplayTask