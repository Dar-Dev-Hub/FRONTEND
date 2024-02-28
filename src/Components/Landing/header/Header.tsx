import { Link } from "react-router-dom"

 const Header = () => {
  return (
   
        <header className='flex  w-full h-screen
      
    overflow-hidden
     pb-5 
     bg-header-bg 
     bg-no-repeat
     bg-cover 
     bg-center 
     relative' >
             <div className='flex gap-6 flex-col max-xl:w-[70%] t- ml-20 max-md:ml-0
            px-2
            lg:w-[50%]
            md:w-[100%]
            md:ml-5 md:pt-9
           
             max-md:w-full justify-center max-md:items-center ' >
                <span className='text-blue-500
                 uppercase w-fit
                h-fit 
                text-[2rem] font-bold 
                max-lg:text-[2rem]
                max-md:text-[1.1rem]
                '>
                    Bienvenue chez Netverse, une fusion entre 
                </span>
                <span className='text-blue-500
                
                 uppercase w-fit
                h-fit 
                text-[2rem] font-bold 
                max-md:text-[1rem]
                '>
                    le monde du marketing de réseau et l'univers virtuel.
                </span>
                <span className='
                max-md:bg-red-50 max-md:bg-opacity-50 
                text-[#57534e] max-md:text-center
                max-md:text-black text-md 
                 w-full
                 font-bold
                '>
                Nous fournissons des opportunités tangibles en proposant des packages de formation et<br/> d'outils de travail concrets. Dès votre inscription, choisissez parmi nos packs de démarrage, <br/>chacun offrant des formations adaptées à vos besoins, du niveau débutant à l'expert. <br/>Chez Netverse, l'aventure commence virtuellement, mais les bénéfices sont bien réels.<br/> Rejoignez-nous, parrainez d'autres partenaires et partagez les succès d'un réseau de marketing unique.
                <br/>Chez Netverse, l'aventure commence virtuellement, mais les bénéfices sont bien réels. <br/>Rejoignez-nous, parrainez d'autres partenaires et partagez les succès d'un réseau de marketing unique.
                                </span>
                {/* <Link to='/landing/our-company' className='   group zz w-fit  relative 
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
                </Link> */}

            </div> 


        </header>
    
  )
}
export default Header
