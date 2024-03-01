import React, { useState,useEffect } from "react"
interface CaroucelProps {
    images:string[]
}
 const Caroucel = ({images}:CaroucelProps) =>{
    const [curr,setCurr]=useState<number>(0)
   
  return(  
  <div id="controls-carousel" className="relative overflow-hidden h-full w-full" data-carousel="static" >
    
    <CarouselImagesDisplay images={images} curr={curr} setCurr={setCurr} />  
    
   
    
</div>)
}
export default Caroucel
interface CarouselImagesDisplayProps {
    images: string[];
    curr: number;
    setCurr: React.Dispatch<React.SetStateAction<number>>;
  }
  
  export const CarouselImagesDisplay = ({ curr, setCurr, images }: CarouselImagesDisplayProps) => {
    const ModImages = [...images, images[0]];
    const next = () => {
      setCurr((curr) => (curr === ModImages.length - 1 ? 0 : curr + 1));
    };
    useEffect(() => {
      const slideInterval = setInterval(next, 5000);
      return () => clearInterval(slideInterval);
    }, []);
  
    const transitionSmooth = () => {
      let timeoutId;
      const cont = document.getElementById("car");
  
      if (cont) {
        if (curr === ModImages.length - 1) {
          cont.style.transform = `translateX(-${curr * 100}%)`;
          timeoutId = setTimeout(() => {
            cont.classList.remove("transition-transform", "ease-out", "duration-[3000ms]");
            cont.style.transform = "translateX(0%)";
            setTimeout(() => {
              cont.classList.add("transition-transform", "ease-out", "duration-[3000ms]");
              setCurr(0);
            }, 1000);
          }, 3000);
        } else {
          cont.style.transform = `translateX(-${curr * 100}%)`;
        }
      }
    };
  
    useEffect(() => {
      transitionSmooth();
      const carElement = document.getElementById("car");
      if (carElement) {
        carElement.addEventListener("transitionend", () => {
          if (curr === ModImages.length - 1) {
            setCurr(0);
          }
        });
      }
    }, [curr]);
  
    return (
      <div id="car" className="w-full h-full flex items-center rounded-lg transition-transform ease-out duration-[3000ms]" style={{ transform: `translateX(-${curr * 100}%)` }}>
        {ModImages.map((src: string, i: number) => (
          <div key={i} className="min-w-[90%] h-[110%] flex flex-col px-2 relative items-center max-md:h-fsit">
            <div className="h-[20%] mb-5 flex flex-col gap-1 items-center justify-center">
              
            </div>
            <div className="h-[100%] w-full bg-cover bg-bottom absolute mx-4" style={{ backgroundImage: `url(${src})` }}>
            </div>
          </div>
        ))}
      </div>
    );
  };