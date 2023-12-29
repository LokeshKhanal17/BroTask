
const Header = () => {
  return (
    
    <header 
    className='
    flex 
    justify-between
    items-center
    w-full 
    h-20 
    p-15
    bg-white-200
    rounded-lg
    box-shadow-lg
    mb-5
    '>
       <section 
       className="flex items-center">

            <img  
            src="https://i.ibb.co/0jZzQYH/Logo.png" 
            alt="Logo"
            className="rounded-full max-w-12"/>
            <span
            className="ml-3 cursor-pointer text-3xl">BRO TASK</span> 
        </section>

        <section className="flex gap-2 mt-4">
            {
                //theme selector
            }
<span className="bg-green-200 span-style"></span>
<span className="bg-red-200 span-style"></span>
<span className="bg-orange-200 span-style"></span>
<span className="bg-slate-200 span-style"></span>
<span className="bg-pink-200 span-style"></span>
<span className="bg-yellow-200 span-style"></span>
        </section>
    </header>
  )
}

export default Header