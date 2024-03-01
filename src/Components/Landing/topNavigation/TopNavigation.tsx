import { useEffect, useState } from 'react'
import { Logo } from '../../../imports/import'
import { Link, NavLink } from 'react-router-dom';

export const navigation = [
  {name:"Home",path:"/landing"},
  {name:"our Company",path:"/landing/our-company"},
  {name:"Contact Us",path:"/landing/contact-us"},
  {name:"Recrutement",path:"/landing/Recrutement"},
  // {name:"Login",path:"/login"},
]

export const TopNavigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  let scrolY = 0
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      const currentYscroll = window.scrollY
      const topNav = document.getElementById('Topnav')
      setScrollPosition((prev: number) => ((prev < 100 && 
        topNav?.classList.contains("scrollDown"))?
         100 
        : 
        (prev > 0 && 
          topNav?.classList.contains("scrollUp")) 
          ?
          0 : prev));

      if(currentYscroll<=0) {
        topNav?.classList.remove("scrollUp")
    }
      if(currentYscroll>scrolY && !topNav?.classList.contains("scrollDown"))
      { 
        

        topNav?.classList.remove("scrollUp")
        topNav?.classList.add("scrollDown")

    }
    if(currentYscroll<scrolY && topNav?.classList.contains("scrollDown"))
      { 
        topNav?.classList.remove("scrollDown")
        topNav?.classList.add("scrollUp")

    }
    scrolY=currentYscroll
    })
  },[])

  const translateY = 
    `   translate3d(0, ${-scrollPosition}%, 0)   `
    ;

  return (
      <nav id='Topnav'
      style={{ transform: translateY }}
      className="w-full 
       bg-transparent z-[99]  dark:bg-[#313038] 
       border-b fixed top-0 transition-all duration-700
      lg:h-[10vh] max-md:h-[10vh]">
        <div className="w-full-xl flex flex-wrap items-center h-full
    justify-between lg:mx-4   md:mx-2 max-sm:mx-0  ">
          <Link to="/" className="h-full flex   items-center space-x-3 
          rtl:space-x-reverse">
            <img src={Logo} className="  h-[110px] w-[130px]" alt="ntverse Logo" />
            <span className="self-center lg:text-2xl md:text-2xl font-semibold max-sm:hidden
          whitespace-nowrap dasrk:text-white text-white max-sm:text-blue-600
           sm:text-red-300
           md:text-green-500" >
         
            </span>
          </Link>
          <button data-collapse-toggle="navbar-default"
            type="button"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center 
      text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
      focus:outline-none focus:ring-2 focus:ring-gray-200
      dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 max-sm:pr-3 "
            aria-controls="navbar-default"
            aria-expanded={isMobileMenuOpen ? 'true' : 'false'}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`
          
          z-[99]
            mr-auto
            block
            overflow-hidden
            transition-all
              duration-500 w-full md:block md:w-auto
              ${isMobileMenuOpen ? 'h-screen py-5 bg-gray-500 w-full m-0' : 'max-h-0  '}
              md:max-h-full
              `}
            id="navbar-default">
            <ul className=" ml-10 font-medium flex flex-col p-4 md:p-0 mt-4 border h-full 
        border-red-500 rounded-lg 
          md:flex-row md:space-x-8 rtl:space-x-reverse
          md:mt-0 md:border-0 max-md:mx-5
            md:dark:bg-[#313038] dark:border-gray-700">
                {
                  navigation.map(((nav,i)=>(
                <li key={i}>
                <NavLink  to={nav.path} onClick={()=>setMobileMenuOpen(false)} className="group transition duration-300 hover:bg-primary block py-2 px-3 text-gray-900 rounded 
            md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-red-700
              dark:hover:text-white md:dark:hover:bg-transparent focus:text-blue-700">{nav.name}
                  <span className="block max-md:hidden max-w-0 group-hover:max-w-full group-focus:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                </NavLink>

              </li> 
                  )))
                }
            </ul>
          </div>
        </div>
      </nav>

  )
}
