import { Link } from "react-router-dom"

export const ContactUsLanding = () => {
    return (
      <div className='h-fit w-full 
      px-40
      max-md:px-5
      my-5
      min-h-[70vh]
      bg-contact-bg
      bg-no-repeat
      bg-cover 
      bg-center 
      bg-fixed items-center
      flex 
      justify-end
      relative
      z-[5] 
      '>
         <div className=' absolute w-full h-full left-0 top-0 z-[-1] bg-[#2f2e36] 
      opacity-40' ></div>
        <div className="
          mr-[]
          relative 
          
          bg-none
         
          min-h-[50vh]
          float-right
          max-md:min-w-[70%]
          h-fit
          max-md:float-center
          max-md:ml-0
         ">
         {/*  <div className="absolute   w-[90%] h-fit px-4 text-white  
                left-[50%] top-[50%]  
                translate-y-[-50%]
                translate-x-[-50%]
                
                flex flex-col gap-6
                items-center
                py-5
                max-md:bg-red-500
                ">
            <h1 className='text-4xl text-center' >Interested To <br />
              Digging Dipper?</h1 >
  
            <span className=' text-center'>
              We shed light on the basic economic areas related to the company’s activity, by monitoring statistics, and analyzing important data about it, to provide our business partners with what helps them understand the company’s strategy and its path
            </span>
            <button className='   group zz w-fit  relative 
                  bg-transparent border 
                  hover:border-primaryy
                  px-10 py-4 rounded-[30px]
  
                  ' >
              <div className='text-xl 
             
              group-hover:text-[rgb(255,94,121,100%)] transition-all duration-[500ms]
              font-semibold relative px-0 z-10 h-full w-full whitespace-nowrap
                      '>Contact Us
  
              </div>
              <div className=' z-[5] absolute top-0 left-0 w-full h-0 
                      group-hover:h-full transition-all duration-[500ms]
                      
                      bg-primaryy' > </div>
            </button>
          </div> */}
          <div className='w-[500px] h-[500px] 
          max-md:w-full 
          max-md:h-fit
           bg-test bg-no-repeat max-md:bg-none  flex items-center' >
          <div className="   w-[90%] h-fit px-4 text-white  
               
                
                flex flex-col gap-6
                items-center
                py-5
                max-md:bg-red-500
                ">
            <h1 className='text-4xl text-center' >Intéressé à  <br />
            creuser plus profondément ?</h1 >
  
            <span className=' text-center text-xs	'>
            Nous fournissons des opportunités tangibles en proposant des packages de formation et
d'outils de travail concrets. Dès votre inscription, choisissez parmi nos packs de démarrage,
chacun offrant des formations adaptées à vos besoins, du niveau débutant à l'expert.
Chez Netverse, l'aventure commence virtuellement, mais les bénéfices sont bien réels.
Rejoignez-nous, parrainez d'autres partenaires et partagez les succès d'un réseau de marketing unique.
Chez Netverse, l'aventure commence virtuellement, mais les bénéfices sont bien réels.
Rejoignez-nous, parrainez d'autres partenaires et partagez les succès d'un réseau de marketing unique.
            </span>
            <Link to='/landing/contact-us' className='   group zz w-fit  relative 
                  bg-transparent border 
                  hover:border-primaryy
                  px-10 py-4 rounded-[30px]
                  overflow-hidden
  
                  ' >
              <div className='text-xl 
             
              group-hover:text-[rgb(255,94,121,100%)] transition-all duration-[500ms]
              font-semibold relative px-0 z-10 h-full w-full whitespace-nowrap
                      '>Contact Us
  
              </div>
              <div className=' z-[5] absolute top-0 left-0 w-full h-0 
                      group-hover:h-full transition-all duration-[500ms]
                      rounded-[30px]
  
                      
                      bg-primaryy' > </div>
            </Link>
          </div>
          </div>
        
        </div>
      </div>
    )
  }