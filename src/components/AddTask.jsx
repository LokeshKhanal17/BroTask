
const AddTask = () => {
  return (
    <>
        <section className="">
            <form className=" bg-slate-500 mx-4 rounded-lg border-red-200 flex justify-center items-center flex-col gap-2">
                <input 
                type="text" 
                placeholder="Task Title"
                className="p-2 mt-5 h-1/2 w-1/3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-green-400"/>
                <textarea 
                placeholder="Task Description"
                className="p-2 h-1/2 w-1/3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-green-400"></textarea>
                <button 
                type="submit" 
                className="w-1/6 mb-4 ml-2  p-2 rounded-lg bg-blue-400 border-2 cursor-pointer">
                    Add</button>
            </form>
        </section>
    </>
  )
}

export default AddTask