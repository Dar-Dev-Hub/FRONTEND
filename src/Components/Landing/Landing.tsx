
import Header from './header/Header'
import { Cards } from '../generals/cards/Cards'
import { OrdreList } from '../generals/orderdList.tsx/OrdredList'
import { ContactUsLanding } from '../generals/contactUs/ContactUs'
export const CheckSvg = () =>{
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="24"
    height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round"
    className="feather feather-check text-red-500"
  ><polyline points="20 6 9 17 4 12">
    </polyline></svg>
  )
}

export const Landing = () => {
  return (
    <div className='flex flex-col w-full
     gap-2 overflow-x-hidden relative 
     transition-all duration-300
    
    '>
      <Header />
      <Cards cardInfo = {cardArray}/>
      <OurAppl displ={ourapp} />
      <OrdreList displ={subscription}/>
      <ContactUsLanding /> 
    </div>
  )
}
/* Cards  */
const cardArray = [
  {title:"Pack Startup",
  description:["Lorsque vous parrainez avec le Pack Startup, vous bénéficiez exclusivement des recrutements directs"]
},
  {title:"Pack 1",
  description:[
    "Profitez de gains générés par le recrutement jusqu&#39;à 3 niveaux.",
    "- Recevez des cadeaux associés à trois différents grades."
  ]},
  {title:"Pack 2",
  description:[
   " Maximisez vos gains en recrutant sur 6 niveaux.",
" Recevez des cadeaux de trois grades différents.",
 "Obtenez un salaire mensuel basé sur vos performances."
  ]},
  {title:"Pack 3",
  description:[
   " Débloquez le potentiel de gains sur 6 niveaux de recrutement.",
    "Accédez à des cadeaux de trois grades distincts."
  ]

},
]

/* PART 3 */
const ourapp = 
{
  title:"Application Web et Applications Mobiles",
  subtitle:<span className='text-red-600'> et comment fonctionnent-ils ??</span> ,
  text:[
      {
          title: <span className='flex ' > <CheckSvg/> Netverse</span> ,
          text: "Netverse vous offre la liberté de rester connecté où que vous soyez. Notre application web et nos applications mobiles, disponibles sur Android et iOS, vous permettent d'accéder à vos formations, outils de travail et opportunités de réseau à tout moment. Restez informé, parrainez des partenaires et suivez vos bénéfices, le tout à portée de main."
        },
      
  ],
  footer: <div className='flex self-center justify-start items-center gap-2'>
  <div className="   ">

    <figure className="wpb_wrapper vc_figure">
      <a href="#" target="_blank"
        className="vc_single_image-wrapper   vc_box_border_grey"><img width="150" height="50" src="https://adkach.com/wp-content/uploads/2018/02/app-google.png" className="vc_single_image-img attachment-full" alt="" loading="lazy" title="app-google" /></a>
    </figure>
  </div>
  <div className="   ">

    <figure className="wpb_wrapper vc_figure">
      <a href="#" target="_blank" className="vc_single_image-wrapper   vc_box_border_grey"><img width="150" height="50" src="https://adkach.com/wp-content/uploads/2018/02/app-mac.png" alt="" loading="lazy" title="app-google" /></a>
    </figure>
  </div>
</div>,
  sideImg:"https://github.com/jassemb/netverseimage/blob/main/netverse_pohne.png?raw=true",
  bgIxmage:"bg-subs-bg",
  
}

const subscription ={
  title:"Subscription steps",
  subtitle:"to start earning",
  text:[
    {
    text:    "Download the free trial version of the ADCOIN APP from the company's website www.adkach.com or Google Play or App store, and activate your ADCOIN account for a small investment of no more than 25€.",
  },
  {text:    "Download the free trial version of the ADCOIN APP from the company's website www.adkach.com or Google Play or App store, and activate your ADCOIN account for a small investment of no more than 25€."
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
  sideImg:"https://github.com/jassemb/netverseimage/blob/main/test.png?raw=true",
  bgIxmage:"bg-subs-bg",
  other: <div className=' 
  absolute w-full h-full left-0 top-0 z-[-1] bg-[#2f2e36] 
opacity-90' ></div> 
  
}
interface OurApplProps {
  displ:{title?:string | JSX.Element,
  subtitle?:string | JSX.Element,
  text?:{
title?:string | JSX.Element,
text?:string | JSX.Element
  }[],
  footer?:JSX.Element,
  sideImg?:string,
  bgImage?:string ,
  classNames?:string }
}
export const OurAppl = ( {displ}:OurApplProps) => {
  return (
    <div className={`w-full  h-fit flex  gap-1  px-20 md:px-5 mb-5 
        py-5 my-5 
        max-md:flex-col
      mx-auto
      bg-map-bg  bg-no-repeat
      bg-cover 
      bg-center 
      bg-fixed ${displ?.classNames} `}
      >
       { displ?.sideImg &&  <div className='w-1/2 max-md:w-[100%] '>
      <img src={displ?.sideImg} alt="" />
      </div>}
     
      <div className='w-1/2 max-md:w-[100%]  flex justify-center flex-col'>
      <div className='flex gap-2 flex-col justify-center items-center  px-5'>
        <span className='  uppercase
         text-3xl
         max-md:text-3xl
         font-bold
         '
        > {displ?.title} </span>
        <span className='  text-2xl
        max-md:text-xl
         text-primaryy font-playFait font-[800] italic
         ' >
          {displ?.subtitle} </span>
      </div>  
        <ul className="">
         {
          (displ?.text instanceof Array) && displ?.text.map((text,i)=>(
            <li key={i} className='flex justify-center items-center flex-col pl-5 	text-[1.2rem] '  >
           <span className='flex '><strong>  {text?.title} </strong></span>
            <span className='flex gap-1 items-center'>
             
             
            </span>

            <span className='pl-2 leading-[3rem]'>
              {text?.text}
            </span>
          </li>
          ))
         }
        
        </ul>
     
      {displ?.footer}
      </div>
    </div>
  )
}


export { OrdreList }
