import Caroucel from '../../generals/caroucel/Caroucel'
import { Curve } from '../../generals/curve/Curve'
import { NetVerse } from '../../generals/netVerse'
import {  OrdreList } from '../Landing'
import { SideToSide } from '../../generals/sidetoside/SideToSide'
export const Recrutement = () => {
  return (
    <>
        <div className='relative
            pt-[10px]
           m-5
            flex justify-center items-center flex-col overflow-hidden' >

           
        </div>
        <SideToSide displ={ESPACE_RECRUTEMENT}/>
        <SideToSide displ={Formateurs}/>
        <SideToSide displ={Jeunes_Diplomes}/>
        <SideToSide displ={Freelancers}/>
        <SideToSide displ={Influenceurs}/>
        <SideToSide displ={buisnessModel}/>
        

              
        </>
  )
}
const buisnessModel = {
    
    title:  <span className='text-red-500 font-extrabold'>Netverse
     </span>,
    text:[
        {   
            text:  `Chez Netverse, nous croyons en la diversité des talents et des perspectives. Rejoignez-nous pour
            faire partie d'une communauté dynamique et contribuez à façonner l'avenir de notre plateforme.`,
        },
        {
            
            text:`Nous avons hâte de découvrir les compétences uniques que vous pouvez apporter à notre équipe !`
        },
        
        
       
    ],
    classNames:"text-white justify-center  items-center relative",
    sideImg:"https://adkach.com/wp-content/uploads/2022/08/OUR-APPS-1.png",
   bgImage:"bg-niceword",
   other: <div className=' 
   absolute w-full h-full left-0 top-0 z-[-1] bg-[#2f2e36] 
 opacity-80' ></div>
   
}
const Freelancers ={
    title: <span >Freelancers et Prestataires de Services : <br /></span>,
    text:[
        {
            text:  "- Si vous êtes un Freelancer capable de fournir des services exceptionnels, n'hésitez pas à déposer votre candidature en remplissant le formulaire."
        },
   
    ],
    bgImage:"bg-ourCompanySmartIdea",
    classNames:" justify-start ml-4  items-start pl-5"
}
const Influenceurs ={
    title: <span >Influenceurs dans les Médias Sociaux : <br /></span>,
    text:[
        {
            text:  "- Si vous êtes un influenceur dans les médias sociaux avec une idée créative à partager, veuillez nous contacter directement. Nous sommes ouverts à collaborer avec des esprits influents et innovants."
        },
   
    ],
    bgImage:"bg-ourCompanySmartIdea",
    classNames:" justify-start ml-4  items-start pl-5"
}

const Formateurs ={
    title: <span > Formateurs et Vendeurs de Produits <br /></span>,
    text:[
        {
            text:  "- Si vous êtes un formateur et souhaitez commercialiser vos produits au sein de notre plateforme"
        },
        {
            text:  "- remplir le formulaire de candidature. Vous pouvez joindre votre CV pour nous donner un perçu complet de votre expertise."
        },    
    ],
    bgImage:"bg-ourCompanySmartIdea",
    classNames:" justify-start ml-4  items-start pl-5"
}


const Jeunes_Diplomes ={
    title:"Jeunes Diplômés :",
    text:[
            {
            text:"- Si vous êtes un jeune diplômé à la recherche d'une opportunité dans votre domaine, que ce soit en comptabilité, administration, commerce, marketing digital, étude de projet, marketing, infographie, développement, ou tout autre domaine, déposez votre CV. Nous accueillons tous les domaines d'expertise.",
            }, 
    ],
    classNames:" justify-end  items-end pr-9",
    bgImage:"bg-ourCompanySmartIdea",
  }
const ESPACE_RECRUTEMENT ={
    title:"Espace Recrutement Netverse",
    subtitle: <span className=' text-3xl   
    '>
        </span>,
    text:[
            {
            text:"Bienvenue dans notre Espace Recrutement dédié aux esprits passionnés et talentueux qui souhaitent rejoindre l'aventure Netverse. Si vous vous trouvez dans l'une des catégories suivantes, nous vous invitons chaleureusement à explorer les opportunités qui s'offrent à vous :",
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
    sideImg:"https://adkach.com/wp-content/uploads/2022/08/STEPS.webp",
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
