import { Link } from "react-router-dom"

 const Header = () => {
  return (
   
        <header className='flex  w-full header-height   
    overflow-hidden
     pb-5 
     bg-header-bg 
     bg-no-repeat
     bg-cover 
     bg-center 
     relative' >
             <div className='flex gap-6 flex-col max-xl:w-[40%]  ml-20 max-md:ml-0
            px-2
            max-lg:w-[60%]
             max-md:w-full justify-center max-md:items-center ' >
                <span className='text-black 
                 uppercase w-fit
                h-fit 
                text-[3rem] font-bold 
                max-lg:text-[2rem]
                max-md:text-[1rem]
                '>
                    smartphone business company
                </span>
                <span className='text-black 
                
                 uppercase w-fit
                h-fit 
                text-[3rem] font-bold 
                max-md:text-[2rem]
                '>
                    New equation in business
                </span>
                <span className='max-md:bg-red-50 max-md:bg-opacity-50 
                 text-black max-md:text-center max-md:text-black text-2xl font-thin w-2/3
                 max-md:w-full
                '>
                    we integrate the advertising sector with the work of smartphone apps within the framework of the profit-sharing system
                </span>
                <Link to='/landing/our-company' className='   group zz w-fit  relative 
                bg-secondary overflow-hidden
                hover:border-primaryy
                px-10 py-4 rounded-[30px]

                ' >
                    <div className='text-xl  font-semibold relative px-0 z-10 h-full w-full whitespace-nowrap
                    '>more info
                    <div className='text-xl  font-semibold  z-20 absolute top-0 left-0 w-0 h-full 
                    whitespace-nowrap 
                    overflow-hidden
                    text-white
                     group-hover:w-full 
                     transition-all duration-[500ms] 
                      ml-0  mt-0
                    '> more info</div>
                    </div>
                    <div className=' z-[5] absolute top-0 left-0 w-0 h-full 
                    group-hover:w-full transition-all duration-[500ms]
                    
                    bg-primaryy' > </div>
                </Link>

            </div> 


        </header>
    
  )
}
export default Header
