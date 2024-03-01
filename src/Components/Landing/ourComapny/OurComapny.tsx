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
            pt-[100px]
            py-2
            w-full h-screen gap-2
            flex justify-center items-center flex-col overflow-hidden' >
           {/*  <Curve /> */}
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
    
        title: <span> <span className='text-red-500 font-extrabold'>Business Model de 
        </span> Netverse </span>,
        text:[
            {   
                text:  `Notre modèle d'affaires repose sur la distribution de packages de formation, chaque pack offrant des avantages spécifiques.`,
            },
            {
                
                text:`Du recrutement direct à la progression de votre pack, en passant par des commissions basées sur les niveaux de réseau,`
            },
            {   
                text:  `Netverse offre des opportunités diversifiées pour maximiser vos gains. Le parrainage est le seul moyen d'entrer dans notre communauté, garantissant une croissance organique et des relations solides.`,
            },
            
           
        ],
        classNames:"text-white justify-center  items-center relative",
        sideImg:"",
       bgImage:"bg-niceword",
       other: <div className=' 
       absolute w-full h-full left-0 top-0 z-[-1] bg-[#2f2e36] 
     opacity-80' ></div>
       
    }

const ourApp = {
    title:"OUR APPLICATIONS",
    text:[
        
        {   title:" ",
            text:  `Netverse vous offre la liberté de rester connecté où que vous soyez. Notre application web et nos applications mobiles, disponibles sur Android et iOS, vous permettent d'accéder à vos formations, outils de travail et opportunités de réseau à tout moment. `,
        },
        {
            title:" ",
            text:` Restez informé, parrainez des partenaires et suivez vos bénéfices, le tout à portée de main.`
        },
       
    ],
    sideImg:"https://github.com/jassemb/netverseimage/blob/main/netverse_pohne-removebg-preview.png?raw=true",
   bgImage:"bg-niceword",
   other: <div className=' 
  absolute w-full h-full left-0 top-0 z-[-1] bg-[#2f2e36] 
opacity-90' ></div> 
   
}
const smartIdea ={
    title: <span > Notre Smart Idea
        <br />
     
   <span className='pl-2 font-playFait text-red-500 font-extrabold italic' >Netverse</span> </span>,
    text:[
        {
            text:  "Notre idée intelligente repose sur la fusion du marketing de réseau avec un produit numérique innovant et des formations de qualité."
        },
        {
            text:`Netverse ne se limite pas à une simple plateforme en ligne; c'est une communauté où la croissance personnelle et professionnelle sont au cœur de chaque interaction.`
        },
        {
            text:  "Notre approche intelligente vise à créer une synergie entre le virtuel et le réel, offrant des opportunités illimitées à nos partenaires."   ,
        },
       
    ],
    bgImage:"bg-ourCompanySmartIdea",
    classNames:" justify-start  items-start pl-9"
}

const ImagesCaroucel = [
    "https://github.com/jassemb/netverseimage/blob/main/cover2.png?raw=true" ,
    "https://github.com/jassemb/netverseimage/blob/main/cover.png?raw=true",
    "https://github.com/jassemb/netverseimage/blob/main/phT.png?raw=true" ,
    "https://github.com/jassemb/netverseimage/blob/main/tlakB2.png?raw=true" ,
    "https://github.com/jassemb/netverseimage/blob/main/cover.png?raw=true",
    "https://github.com/jassemb/netverseimage/blob/main/c1.jpg?raw=true" ,
    "https://github.com/jassemb/netverseimage/blob/main/tlakB.png?raw=true" ,
]
const newEquation ={
    title:"Notre Nouveau Business dans le Monde Virtuel",
    text:[
            {
            text:"Netverse redéfinit le marketing de réseau avec un focus particulier sur les produits numériques et les formations. Notre modèle d'affaires novateur s'appuie sur la vente en réseau, créant ainsi des opportunités lucratives pour chaque partenaire.",
            },
            {text:"En unissant le potentiel du marketing de réseau avec des produits digitaux de qualité, Netverse façonne l'avenir des opportunités professionnelles en ligne."
            },
            {text:" "
            }
    ],
    classNames:" justify-end  items-end pr-9",
    bgImage:"bg-ourCompanySmartIdea",

    
  }
const whoareWe ={
    title:"Qui Sommes-Nous?",
    subtitle: <span className=' text-3xl   
    '>
        <NetVerse  net={{size:"1.8rem"}}  V={{size:"2.4rem"}} 
        className='
        '/>
    
    company!</span>,
    text:[
            {
            text:"Netverse, c'est bien plus qu'une plateforme en ligne; c'est une communauté dynamique de personnes partageant les mêmes idées,désireuses de réussir et de grandir ensemble. Nous sommes déterminés à créer des opportunités significatives dans le monde virtuel,  en unissant nos forces et en favorisant la prospérité collective.",
            },
            
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
    sideImg:"",
    bgIxmage:"bg-subs-bg",
    
  }

const ourVision = {
    part1:{
        title:"Notre Vision",
        text:[
            {
            text:"Chez Netverse, nous aspirons à être la plateforme de référence en matière de croissance personnelle et de succès partagé. Nous visons à créer un environnement où chaque partenaire peut atteindre son potentiel maximal, propulsé par notre engagement envers l'excellence et l'innovation.",
            },
        ],
  
},
part2:{
    title:"Nos Objectifs",
    text:[
        {
        text:"Faciliter l'accès à des formations de qualité.",
        },
        {
            text:"Établir un réseau solide et prospère.",
        },
        {
            text:"Fournir des opportunités de revenus stables et croissants pour nos partenaires.",
        },
        {
            text:"Devenir une référence dans le domaine du marketing de réseau virtuel.",
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
