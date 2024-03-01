
import Header from './header/Header'
import { Cards } from '../generals/cards/Cards'
import { OrdreList } from '../generals/orderdList.tsx/OrdredList'
import { ContactUsLanding } from '../generals/contactUs/ContactUs'
import { Link } from 'react-router-dom';
import YouTubePlayer from '../YoutubePlayer/YoutubePlayer';
export const CheckSvg = () => {
  return (
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
  const videoId = 'yourYouTubeVideoId';
  return (
    <div className='flex flex-col w-full
     gap-2 overflow-x-hidden relative 
     transition-all duration-300
    
    '>
      <Header />
      <YouTubePlayer videoId={videoId} />
      <Cards cardInfo={cardArray} />
      <OurAppl displ={ourapp} />
      <OrdreList displ={subscription} />
      <ContactUsLanding />
    </div>
  )
}
/* Cards  */
const cardArray = [
  {
    title: "Pack Startup",
    description: ["Lorsque vous parrainez avec le Pack Startup, vous bénéficiez exclusivement des recrutements directs"],
    color: "#b08d57"
  },
  {
    title: "Pack 1",
    description: [
      "Profitez de gains générés par le recrutement jusqu\'a 3 niveaux.",
      "Recevez des cadeaux associés à trois différents grades."
    ],
    color: "#808080"
  },
  {
    title: "Pack 2",
    description: [
      " Maximisez vos gains en recrutant sur 6 niveaux.",
      " Recevez des cadeaux de trois grades différents.",
      "Obtenez un salaire mensuel basé sur vos performances."
    ],
    color: "#D4AF37"
  },
  {
    title: "Pack 3",
    description: [
      " Débloquez le potentiel de gains sur 6 niveaux de recrutement.",
      "Accédez à des cadeaux de trois grades distincts."
    ],
    color: "#8a87b3"

  },
]

/* PART 3 */
const ourapp =
{
  title: "Application Web et Applications Mobiles",
  subtitle: <span className='text-red-600'> et comment fonctionnent-ils ??</span>,
  text: [
    {
      title: <span className='flex ' > <CheckSvg /> Netverse</span>,
      text: "Netverse vous offre la liberté de rester connecté où que vous soyez. Notre application web et nos applications mobiles, disponibles sur Android et iOS, vous permettent d'accéder à vos formations, outils de travail et opportunités de réseau à tout moment. Restez informé, parrainez des partenaires et suivez vos bénéfices, le tout à portée de main."
    },

  ],
  footer: <div className='flex self-center justify-start items-center gap-2'>
    <div className="   ">

      <figure className="wpb_wrapper vc_figure">
        <a href="#" target="_blank"
          className="vc_single_image-wrapper   vc_box_border_grey"><img width="150" height="50" src="https://github.com/jassemb/netverseimage/blob/main/androiddownlowd.png?raw=true" className="vc_single_image-img attachment-full" alt="" loading="lazy" title="app-google" /></a>
      </figure>
    </div>
    <div className="   ">

      <figure className="wpb_wrapper vc_figure">
        <a href="#" target="_blank" className="vc_single_image-wrapper   vc_box_border_grey"><img width="150" height="50" src="https://github.com/jassemb/netverseimage/blob/main/apple-app-store-logo.jpg?raw=true" alt="" loading="lazy" title="app-google" /></a>
      </figure>
      
    </div>
    <div>
      
    </div>
  </div>,
  sideImg: "https://github.com/jassemb/netverseimage/blob/main/netverse_pohne-removebg-preview.png?raw=true",
  bgIxmage: "bg-subs-bg",

}

const subscription = {
  title: "Étapes d'Inscription pour Commencer à Gagner avec Netverse :",
  
  text: [
    {
      title: "Rejoindre Notre Site ou Application :",
      text: "- Si vous êtes invité par une personne, inscrivez-vous avec son ID. Notez que l';inscription ne se fait pas uniquement par invitation.",
      text2: "- Si vous n'avez pas de parrain, trouvez un lien de support pour remplir un formulaire et être contacté par la société pour vous aider à vous inscrire.",

    },
    {
      title: "Démarrage avec le Pack de Démarrage ou Achat des Packs Souhaités :",
      text: "- La société Netverse propose 5 packs successifs, accessibles uniquement via l'upgrade.(Exemple : Pack Startup, puis Pack 1, puis Pack 2, puis Pack 3.)",
      text2: "- Enregistrez-vous avec votre parrain et remplissez votre formulaire d';inscription."
    },
    {
      title: "Procédez au Paiement Direct à la Société :",
      text: "- Connectez-vous à votre espace partenaire personnalisé.",
    },
    {
      title: "Accédez à Votre Espace Partenaire:",
      text: "- Effectuez le paiement à la société pour activer votre abonnement annuel.",
      text2: "- Note aux Parrains : La commission dépend des points alpha coin provenant de la visualisation de publicités dans l'application. Assurez-vous de fournir ces points pour que la commission entre dans votre wallet. Cela s'applique uniquement aux parents existants et non aux nouveaux inscrits."
    },
    {
      title: "Explorez Vos Formations:",
      text: "- Passez à l'action en développant votre réseau. Parrainez de nouveaux partenaires et créez des connexions qui contribuent à votre succès et à celui de la communauté.",
    },
    {
      title: "Démarrez Votre Réseau :",
      text: "- Démarrez vos cours de formation en ligne, avec un contenu spécifique à chaque pack pour évelopper vos compétences et atteindre vos objectifs.",
      text2:"- Note : Visualisez les publicités dans l'application pour que la commission de parrainage entre dans votre wallet."
    },
    {
      title: "Suivez Vos Progrès :",
      text: "- Utilisez nos tableaux de bord intuitifs pour suivre vos progrès, vos revenus et l'évolution de votre réseau.",
      text2: "- Obtenez les grades et les cadeaux associés et commencez votre histoire de succès."
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
    <Link to='/landing/contact-us' className='text-xl px-10 py-4  group-hover:text-white transition-colors duration-500  font-semibold relative  z-10 h-full w-full whitespace-nowrap
              '>more info
    </Link>
  </button>,
  sideImg: "https://github.com/jassemb/netverseimage/blob/main/c2.png?raw=true",
  bgIxmage: "bg-subs-bg",
  other: <div className=' 
  absolute w-full h-full left-0 top-0 z-[-1] bg-[#2f2e36] 
opacity-90' ></div>

}
interface OurApplProps {
  displ: {
    title?: string | JSX.Element,
    subtitle?: string | JSX.Element,
    text?: {
      title?: string | JSX.Element,
      text?: string | JSX.Element
    }[],
    footer?: JSX.Element,
    sideImg?: string,
    bgImage?: string,
    classNames?: string
  }
}
export const OurAppl = ({ displ }: OurApplProps) => {
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
      {displ?.sideImg && <div className='w-1/2 max-md:w-[100%] '>
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
            (displ?.text instanceof Array) && displ?.text.map((text, i) => (
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
