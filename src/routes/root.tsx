import { Outlet } from "react-router-dom";
import { TopNavigation } from "../Components/Landing/topNavigation/TopNavigation";
import { Footer } from "../Components/generals/footer/Footer";

export default function Root() {
    return (
      <div className='ss  flex flex-col w-full min-h-screen gap-2 overflow-x-hidden relative'>
          <Outlet/>
        </div>
    );
  }

  export const  Root2 = () =>{
    return( <>
    <TopNavigation /> 
     <Outlet/>
     <Footer/>
   </>
    )
  }