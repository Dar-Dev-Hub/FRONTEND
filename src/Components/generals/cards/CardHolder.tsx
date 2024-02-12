import {  useRef, useEffect, memo, useState } from "react";

export const CardHolder = memo(({index/* ,show, setShow */,container}:any) => {
   const [show, setShow] = useState(false); 
const cardRef :any =useRef(null)
const width = container?.current?.offsetWidth
//const x : any = cardRef?.current?.offsetHeight

const test = () =>{



    //const drop = document.getElementById(`drop_${index}`)

    console.log("cardHolder Width",cardRef?.current?.offsetWidth)
    console.log("cardHolder left",cardRef?.current?.offsetLeft)
    console.log("container Width",width)
    console.log("container left",container?.current?.offsetLeft)
    /* console.log(cardRef?.current?.offsetLeft,"drop",container?.current?.offsetLeft) */
    return(500)
}
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
    <div style={{height:show ? test() : 'fit-content'}} className="relative h-fit" onClick={()=>{setShow(!show);}} ref={cardRef}>
    <div className="flex flex-col gap-2 relative" >

      <div
       
        className="group py-5  w-full h-full gap-2   cursor-pointer  rounded-md relative  justify-center items-center flex flex-col shadow-shadowCard bg-white"
      >
        <div className="absolute  bg-[#192839]  transition-all duration-300 group-hover:h-full group-hover:w-full  h-0 w-full bottom-0 z-[0] rounded-md"></div>
        <div className="z-[4]  justify-center items-center flex flex-col  ">
          <div className="flex flex-col items-center">
            <span className="font-bold text-black text-2xl  group-hover:text-white transition-all duration-500">
              ADKACH
            </span>
            <span className="text-black font-playFait font-bold  group-hover:text-white transition-all duration-500">
              Worth 25 BC weekly
            </span>
          </div>
          <div className="bg-[#FFE1EE] p-[10px] rounded-full">
            <img className="h-[50px] w-[50px]" src="../src/assets/OPPORTYNITY-1-1.webp" alt="" />
          </div>
          <span className=" group-hover:text-white transition-all duration-500">voucher sales earnings</span>
          <span className="self-end pr-4 group-hover:text-white transition-all duration-500">ReadMore</span>
        </div>
      </div>

       <div  id={`drop_${index}`} style={{width:width, left:cardRef?.current?.offsetWidth * index * -1}}
        className={`mr-9 transition-h duration-300  h-0 overflow-hidden ${show && "h-[300px] "} 
        absolute top-full ws-[${width}px]  `}>
         <div className="h-full border border-red-500" >
          {`card ${index}`}
          </div> 
        </div>
    </div>
    </div>
  );
});