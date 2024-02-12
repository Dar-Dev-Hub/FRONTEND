interface WhoAreWeProps {
    displ:{title?:string | JSX.Element,
    subtitle?:string | JSX.Element,
    text?:{
  title?:string | JSX.Element,
  text?:string | JSX.Element
    }[],
    footer?:JSX.Element,
    sideImg?:string | JSX.Element,
    bgImage?:string | JSX.Element,
    classNames?:string ,
    other?:JSX.Element}
  }
export const SideToSide = ({displ}:WhoAreWeProps) =>{
    const x:string = displ?.classNames ? displ?.classNames : "items-center justify-center"
    return(
        <div  className= {`w-full my-6  p-3 flex  
        ${displ?.bgImage}
        bg-cover 
        bg-center 
        bg-fixed
        z-[5]
        
        ${x}`} >
            {displ?.other}
            <div className={`w-1/2 text-center flex flex-col
            max-md:w-3/4
            `} >
                <span className='uppercase text-3xl font-extrabold pb-1' >{displ.title}</span>
                <span className=' font-bold relative
                        before:content-[""]
                        before:bg-red-700
                        before:block before:absolute 
                        before:bottom-[-10px]
                        before:left-[45%]
                        max-md:before:w-[40%]
                        max-md:before:left-[30%]
                        before:w-[15%] before:h-[5px]  
                '>
                {displ.subtitle} </span>
                <div className='text-lg font-[300] mt-5 flex flex-col gap-5  '>
                    {
                        (displ?.text instanceof Array) && displ?.text?.map((text:{title?:string | JSX.Element,text?:string | JSX.Element},i:number)=>(
                            <span key={i}>
                                {text?.text}
                            </span  >
                        ))
                    }
                </div>
            </div>
        </div>
    )
}