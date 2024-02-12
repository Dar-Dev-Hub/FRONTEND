import { Logo } from "../../../imports/import"
import { FacebookIcon, InstagramIcon, LinkedInIcon, XLogo, YoutubeIcon } from "../logos/Logos"
import { NetVerse } from "../netVerse"
import { FooterList } from "./FooterList"

export const Footer = () =>{
    return(
      <div className='w-full px-40  h-fit flex justify-evenly flex-wrap mb-9
      max-md:px-1
      max-lg:px-5
      gap-[0 5rem]
      gap-x-0
      gap-y-8
      '>
        <div className='w-[30%] 
        
          max-md:w-1/2
          max-md:items-center
          max-md:px-5
        flex flex-col gap-5'>
          <div className='flex items-center justify-center gap-3'>
          <img src={Logo} className=' h-[90px] w-[90px]
          
          '  />
          
           <NetVerse  net={{size:"1.5rem",color:"black"}}  V={{size:"1.875rem",color:"black"}}/>
          </div>
          <div className='w-[100%] text-center'>
            <span className='text-[15px]   text-gray-500'>
            Duis aute irure dolor inasfa reprehenderit in voluptate velit esse cillum
            </span>
          </div>
          <div className='w-[50%] max-md:w-[90%] flex justify-between gap-1 self-center'>
            <a href="#" className='w-[25px] h-[25px] hover:rotate-[360deg] transition-all duration-500 cursor-pointer' ><InstagramIcon/> </a>
            <a href="#" className='w-[25px] h-[25px] hover:rotate-[360deg] transition-all duration-500 cursor-pointer' ><FacebookIcon/></a>
            <a href="#" className='w-[25px] h-[25px] hover:rotate-[360deg] transition-all duration-500 cursor-pointer' ><LinkedInIcon/></a>
            <a href="#" className='w-[25px] h-[25px] hover:rotate-[360deg] transition-all duration-500 cursor-pointer' ><YoutubeIcon/></a>
            <a href="#" className='w-[25px] h-[25px] hover:rotate-[360deg] transition-all duration-500 cursor-pointer' ><XLogo/></a>

          </div>
  
        </div>
        <div className=' max-md:w-1/2 w-[17%] h-full  ' > 
        <FooterList 
        title="Navigation"
        items={["Home","our Company", "Contact us","login"]}
        />
        </div>
        <div className=' max-md:w-1/2 w-[17%] h-full ' > 
        <FooterList 
        title="Support"
        items={["Home","our Company", "Contact us","login"]}
        /></div>
        <div className=' max-md:w-1/2 w-[17%] h-full ' > 
        <FooterList 
        title="Services"
        items={["Home","our Company", "Contact us","login"]}
        /></div>
       
      </div>
    )
  }