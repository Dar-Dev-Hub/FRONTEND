interface netversProps {
    net?:{
        size?:string,
        color?:string
    },
    V?:{
        size?:string,
        color?:string
    }
    className?:string
}
export const NetVerse = ({net,V,className=""}:netversProps) => {
  return (
    <span 
        style={{color:net?.color, fontSize:net?.size}}
    className={`text-primaryy  text-lg relative mx-2 ${className}`}>Net
    <span style={{color:V?.color, fontSize:V?.size}} 
    className='text-xl text-secondary'>V</span>erse
    </span>

  )
}
