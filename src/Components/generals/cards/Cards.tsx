import { useRef } from "react";
import { CardHolder } from "./CardHolder"
export const Cards = () => {


const container :any = useRef(null)
    return (
      <div className="h-fit w-full self-center  px-20 ">
      <div className='
      
      w-full h-fit py-5 mx-0 max-md:mx-5 bg-grasy-50 '>
  
        <div 
        ref={container}
        className='h-fit w-full mt-9 relative
       max-md:h-fit
      gap-2   
      grid 
      xl:grid-cols-4
      lg:grid-cols-3 
      sm:grid-cols-2 
      max-sm:grid-cols-1
      ' 
      id='card_Container'
      >
          { Array(4).fill(null).map((_,i)=>{
            return  <CardHolder 
            container={container} 
             key={i} 
             index={i} 
              />
          })
        }
           {/* Part 2 */}
    
        </div>
      </div>
      </div>
    )
  }

