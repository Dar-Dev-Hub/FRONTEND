export const FooterList = ({title,items}:any) =>{
    return(
      <div className='w-full h-full max-md:items-center flex flex-col gap-4' > 
      <span className='text-lg mb-2'> {title}</span>
      
      {
        items && items.length > 0 &&
        items.map((item:string,i:number)=>{
          return(
            <span key={i} className='ml-2 text-md text-gray-500 font-light '> {item}</span>
  
          )
        })
      }
     
  
      </div>
    )
  }