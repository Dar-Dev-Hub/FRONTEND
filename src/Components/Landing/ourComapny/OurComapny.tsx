import Caroucel from '../../generals/caroucel/Caroucel'
import { Curve } from '../../generals/curve/Curve'
import { NetVerse } from '../../generals/netVerse'
import {  OrdreList } from '../Landing'
import { SideToSide } from '../../generals/sidetoside/SideToSide'
export const OurComapny = () => {
  return (
    <>
        <div className='relative
        mb-5
            pt-[90px]
            py-2
            w-full h-screen gap-2
            flex justify-center items-center flex-col overflow-hidden' >
            <Curve />
            <Caroucel images={ImagesCaroucel}/>
        </div>
        <SideToSide displ={whoareWe}/>
        <OrdreList displ={ourApp}/> 
        <SideToSide displ={smartIdea}/>
        <SideToSide displ={newEquation}/>
        <SideToSide displ={buisnessModel}/>
        <OurVision displ={ourVision}/> 



        </>
  )
}

/*  OUR COMPANY OBJECT PARTS */
const buisnessModel = {
    
        title: <span> <span className='text-red-500 font-extrabold'>BUSINESS MODEL OF 
        </span> Global Adkach </span>,
        text:[
            {   
                text:  `GLOBAL ADKACH introduces a smart idea to the market, and introduces the ADCOIN APP and ADKACH WEB, which are the technical support that allows to take advantage of this idea.
                GLOBAL ADKACH is an advertising medium that provides a service for advertisers, which is to deliver their ads to the target audience in a fast, easy and most effective way.`,
            },
            {
                
                text:`The user of the ADCOIN APP and ADKACH WEB applications provides a service to GLOBAL ADKACH by subscribing to its applications, The more users of the applications, the greater their value in the market؛ The user also provides the service of viewing ads via ADCOIN APP, which helps to attract more ads.`
            },
            {   
                text:  `GLOBAL ADKACH appreciates the important and effective role of users in building its business and shares with them 85% of its profits in exchange for their services.`,
            },
            {
                
                text:`n fact, this model may not be completely new, as there are companies that work implicitly according to this model, but GLOBAL ADKACH is the first company to recognize and adopt it as a basic economic model for its business and is working to develop and theorize it.`
            },
           
        ],
        classNames:"text-white justify-center  items-center relative",
        sideImg:"https://adkach.com/wp-content/uploads/2022/08/OUR-APPS-1.png",
       bgImage:"bg-niceword",
       other: <div className=' 
       absolute w-full h-full left-0 top-0 z-[-1] bg-[#2f2e36] 
     opacity-80' ></div>
       
    }

const ourApp = {
    title:"OUR APPLICATIONS",
    text:[
        {   title:"ADCOIN Smartphone Application",
            text:  `ADCOIN is a Smartphone APP from GLOBAL ADKACH It displays advertisements in the form of images or short videos on the user's smartphone screen whenever he presses the "ad" button in the application. The application is downloaded for free (trial version) from the company's website, "Google Play" or “App Store” and the ADCOIN account is activated for a small investment value that does not exceed 25 €. The ADCOIN smartphone application is linked to the web application ADKACH.`,
        },
        {
            title:"ADCOIN Smartphone Application",
            text:`ADKACH is a WEB application from GLOBAL ADKACH available on the company's website www.adkach.com that is activated for a small investment of no more than 175 €/ annually. This application automatically organizes the profit-sharing process with subscribers within a global system (global forced matrix).`
        },
       
    ],
    sideImg:"https://adkach.com/wp-content/uploads/2022/08/OUR-APPS-1.png",
   bgImage:"bg-niceword",
   other: <div className=' 
  absolute w-full h-full left-0 top-0 z-[-1] bg-[#2f2e36] 
opacity-90' ></div> 
   
}
const smartIdea ={
    title: <span > SMART IDEA
        <br />
    From
   <span className='pl-2 font-playFait text-red-500 font-extrabold italic' >Global Adkach</span> </span>,
    text:[
        {
            text:  "GLOBAL ADKACH It is based on a simple idea, but it is considered a revolution in the smartphone business."
        },
        {
            text:`Where every person who owns a smartphone can rent his phone screen to the company and turn it into an advertising platform, by subscribing to our applications and watching ads through them, in return the company shares 85% of its revenues with all users.`
        },
        {
            text:  "Sharing revenue with users means better “user experience” and more loyalty from users, thus more use of our apps and more ad view, which means more ads, more revenue and more revenue sharing with users."   ,
        },
        {
            text:`It is a simple and smart idea for a permanent cycle of profit without effort, without experience and at the lowest investment cost.`
        }
    ],
    bgImage:"bg-ourCompanySmartIdea",
    classNames:" justify-start  items-start pl-9"
}

const ImagesCaroucel = [
    "https://adkach.com/wp-content/uploads/2022/08/STEPS.webp" ,
    "https://adkach.com/wp-content/uploads/2022/08/STEPS.webp" ,
    "https://adkach.com/wp-content/uploads/2022/08/STEPS.webp" ,
    "https://adkach.com/wp-content/uploads/2022/08/STEPS.webp" ,
]
const newEquation ={
    title:"NEW EQUATION in business",
    text:[
            {
            text:"The smart phone screen rental service from GLOBAL ADKACH is a new offer for users and advertisers, within the framework of the sharing economy.",
            },
            {text:"Our company considered as a new and pioneering model for rent investments within the sharing economy through smartphone applications: Resource Sharing – Profit Sharing."
            },
            {text:"The notion of participation that characterizes this economy and that our company adopts, changed the roles in the economic equation with regard to the relationship between companies and customers, as the customer became a service provider and not only a beneficiary of it."
            }
    ],
    classNames:" justify-end  items-end pr-9",
    bgImage:"bg-ourCompanySmartIdea",

    
  }
const whoareWe ={
    title:"WHO ARE WE?",
    subtitle: <span className=' text-3xl   
    '>
        <NetVerse  net={{size:"1.8rem"}}  V={{size:"2.4rem"}} 
        className='
        '/>
    
    company!</span>,
    text:[
            {
            text:"GLOBAL ADKACH is a global company of smartphone business, it is an advertising medium between companies and the public through the development of web applications software and smartphone applications.",
            },
            {text:"GLOBAL ADCASH is a subsidiary of the parent company GLOBAL GOLDEN AXE, which is specialized in e-commerce e-marketing and digital projects."
            },
            {text:"The Operating principle of GLOBAL ADKACH is to integrate the advertising sector with the work of smartphone applications within the framework of the profit sharing system."
            }
    ],
    footer: <button className='  
            group zz w-fit  relative  self-center
            bg-secondary overflow-hisdden
            justify-center items-center flex' >
      <div className=' z-[5] absolute  w-0 h-1 
                  group-hover:h-full group-hover:w-full transition-all duration-500
                bg-primaryy' >
      </div>
      <div className='text-xl px-10 py-4  group-hover:text-white transition-colors duration-500  font-semibold relative  z-10 h-full w-full whitespace-nowrap
                '>more info
      </div>
    </button>,
    sideImg:"https://adkach.com/wp-content/uploads/2022/08/STEPS.webp",
    bgIxmage:"bg-subs-bg",
    
  }

const ourVision = {
    part1:{
        title:"Our vision",
        text:[
            {
            text:"GLOBAL ADKACH the first online advertising medium for the next 5 years, which provides passive income for all layers of society and helps the largest number of smartphone users across the world to achieve financial security.",
            },
        ],
  
},
part2:{
    title:"Our Objectives",
    text:[
        {
        text:"Contribute to the transition of the advertising market from centralization to decentralization and ending the monopoly of advertising profits by companies and making it the right of the largest possible number of people across the world, with the simplest resources and the least investment.",
        },
        {
            text:"Spreading the culture of sustainable investment in the available resources within the field of free and smart business via the Internet.",
            },
    ],
    classNames:"text-black",
  

},
    bgIxmage:"bg-subs-bg",
    
  }
export const OurVision = ({displ}:any)=>{
    return(
        <div className="bg-ourVision  bg-no-repeat  relative z-5
        bg-cover 
        bg-center 
       ">
        <SideToSide displ={displ.part1}/>
        <OrdreList displ={displ.part2}/> 
        <div className=' 
        absolute w-full h-full left-0 top-0 z-[0] bg-[#2f2e36] 
        opacity-40' >
        </div> 
        </div>
        )
}
