import {  useRef, useEffect, memo, useState } from "react";

export const CardHolder = memo(({index/* ,show, setShow */,container,cardinfo}:any) => {
   const [show, setShow] = useState(false); 
const cardRef :any =useRef(null)
const width = container?.current?.offsetWidth
const x : any = cardRef?.current?.offsetHeight
const cardRefWidth : any = cardRef?.current?.offsetWidth
const descRef:any = useRef(null)
const cardRefLeft=cardRef?.current?.offsetLeft

const drop = document.getElementById(`drop_${index}`)
console.log("azeaze",drop?.offsetHeight )
const test = () =>{


     let x :number=cardRef?.current?.offsetHeight; 

    x = drop?.offsetHeight + cardRef?.current?.offsetHeight
    //cardRef.current.style.height = x


    return(drop?.offsetHeight,cardRef?.current?.offsetHeight)
}
console.log(test())
   useEffect(() => {
    const handleClickOutside = (event:any) => {
     console.log(cardRef.current && show  && !cardRef.current?.contains(event.target))
      if (cardRef.current && show  && !cardRef.current?.contains(event.target)  ) {

        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }); 

  return (
    <div style={{
      height: show ? `500px` : 'fit-content'
    }} className={` `} onClick={()=>{setShow(!show);}} ref={cardRef}>
    <div className="flex flex-col gap-2 relative" >

      <div
       
        className="group py-5  w-full h-full gap-2   cursor-pointer  rounded-md relative  justify-center items-center flex flex-col shadow-shadowCard bg-white"
      >
  <div
          className={`absolute transition-all duration-300 group-hover:h-full group-hover:w-full h-0 w-full bottom-0 z-0 rounded-md`}
          style={{ backgroundColor: cardinfo.color }}
        ></div>
        <div className="z-[4]  justify-center items-center flex flex-col  ">
          <div className="flex flex-col items-center">
            <span className="font-bold text-black text-2xl  group-hover:text-white transition-all duration-500">
             {cardinfo.title}
            </span>

          </div>
          <div className="bg-[#FFE1EE] p-[10px] rounded-full">
            <img className="h-[50px] w-[50px]" src="../src/assets/OPPORTYNITY-1-1.webp" alt="" />
          </div>
          <span className=" group-hover:text-white transition-all duration-500">Click to Know more</span>
          <span className="self-end pr-7 group-hover:text-white transition-all duration-500">ReadMore</span>
        </div>
      </div>

        <div ref={descRef} id={`drop_${index}`} style={{width:width, left:-cardRefLeft}}
        className={`mr-5 transition-h  duration-300 max-h-0 overflow-hidden ${show && "max-h-full "} 
        absolute top-full ws-[${width}px]  `}>
         <div className="h-full p-5 mb-6 " >
          {
            cardinfo.description.map((desc:string,i:number)=>{
              return <p key={i}>- {desc} </p>
            })
          }
          </div> 
        </div>
    </div>
    </div>
  );
});