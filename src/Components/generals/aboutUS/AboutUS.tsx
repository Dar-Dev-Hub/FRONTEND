export const AboutUs = () => {
    return (
      <div className='h-[50vh]  w-full relative z-[5] px-0 border
      max-md:px-5
      max-md:max-h-fit
      mb-5
     flex gap-0
      '>
        <div className="w-1/2 h-full bg-red-200"></div>
        <div className="w-1/2 h-full bg-red-500 
        flex flex-col justify-center items-center
        ">
  
          <span className=' text-secondary text-5xl 
         p-5
        font-bold  max-md:text-5xl
            
            whitespace-nowrap '>About Us</span>
  
  
          <span className=' mx-5   text-center text-white'>
            GLOBAL ADKACH is a global company of smartphone business, it is an advertising medium between companies and the public through the development of web applications software and smartphone applications.
            <br />
            <br />
          {/*   </span>
           <span className=' px-5 border w-1/2'> */}
          GLOBAL ADCASH is a subsidiary of the parent company GLOBAL GOLDEN AXE, which is specialized in e-commerce e-marketing and digital projects.
         {/*  </span>
          <span className=' px-5 border w-1/2'> */}
          <br />
          <br />
             The Operating principle of GLOBAL ADKACH is to integrate the advertising sector with the work of smartphone applications within the framework of the profit sharing system.
          </span> 
        </div>
      </div>
    )
  }