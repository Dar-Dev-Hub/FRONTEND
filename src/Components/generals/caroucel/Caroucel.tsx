import React, { useState,useEffect } from "react"
interface CaroucelProps {
    images:string[]
}
 const Caroucel = ({images}:CaroucelProps) =>{
    const [curr,setCurr]=useState<number>(0)
   
  return(  
  <div id="controls-carousel" className="relative overflow-hidden h-full w-full" data-carousel="static" >
    
    <CaroucelImagesDisplay images={images} curr={curr} setCurr={setCurr} />  
    
    <CaroucelSideButtons curr={curr} setCurr={setCurr} len={images.length}/>
    
    
</div>)
}
export default Caroucel

interface  CaroucelSideButtonsProps {
    curr:number,
    setCurr:(curr:number)=>void,
    len:number
}
export const CaroucelSideButtons = ({curr,setCurr,len}:CaroucelSideButtonsProps) => {
    return(
        <div style={{zIndex:999}} className= {`py-2  "bg-yellow-500" w-[60px] absolute right-0 top-[50%] translate-y-[-50%]  flex flex-col h-fit gap-10 items-center
            transition-opacity ease-in duration-700  
            `} >
              

                {Array(len).fill(null).map((_,i)=>{return <div key={i} onClick={()=>setCurr(i)}  
                    className={`transition-all duration-[1s] ${i === curr ? 
                        "shadow-activeCaroucel bg-white":"bg-black bg-opacity-[0.4]"} 
                    cursor-pointer w-[15px] h-[15px]  dark:bg-black rounded-full `} ></div>})}
            </div> 
    )
}
interface  CaroucelImagesDisplayProps {
    images:string[],
    curr:number,
    setCurr:React.Dispatch<React.SetStateAction<number>>,
}
export const CaroucelImagesDisplay = ({curr,setCurr, images }: CaroucelImagesDisplayProps) => {
    const ModImages= [...images,images[0]]
    const next =()=>{
        setCurr((curr: number) => curr === ModImages.length  ? 0 : curr + 1)
        }
      useEffect(() => {
        const slideInterval = setInterval(next, 5000)
        return () => clearInterval(slideInterval)
      }, [])  
 
      const transitionSmooth = () => {
        let timeoutId
        const cont = document.getElementById("car");
       
        if (cont ) {
        if (curr === ModImages.length - 1) {
          cont.style.transform = `translateX(-${curr*100}%)`
          timeoutId = setTimeout(() => {
                cont.classList.remove("transition-transform", "ease-out", "duration-[3000ms]");
                cont.style.transform = "translateX(0%)"
              setTimeout(()=>{
                  cont.classList.add("transition-transform", "ease-out", "duration-[3000ms]");
              },1000)
              setCurr(0)
            }, 3000);
        } else {
            clearTimeout(timeoutId);
            cont.style.transform = `translateX(-${curr*100}%)`
        }
        }
      };

      useEffect(()=>{
            transitionSmooth()
      },[curr])

    return (
   
        <div id="car" className="  w-full h-full  flex items-center rounded-lg  transition-transform ease-out duration-[3000ms] " 
    style={{transform:`translateX(-${curr*100}%)`}}>   
            {ModImages.map((src: string, i: number) => 
                ( <div key={i} className='min-w-full h-full flex flex-col px-2 relative
                items-center max-md:h-fsit ' >
                    <div className='h-[20%] mb-8 flex flex-col gap-2 items-center justify-center'>
                        
                        <span id="subtitle" className={`z-10 text-5xl max-md:text-2xl font-semibold text-white w-fit  ${i === curr &&  curr!== 0 ?'animate-rightTrans':''}`} > Alpha Universe </span>
                    </div>
                    
                   {/*  <img src={src} className="w-fit h-[100%] " alt="..." /> */}
                    <div className="h-2/3 w-full 
                    bg-cover bg-bottom
                    absolute
                    mx-4
                    "
                    style={{backgroundImage:`url(${src})`}}
                    >

                    </div>
                </div>
))}
        </div>
    );
};