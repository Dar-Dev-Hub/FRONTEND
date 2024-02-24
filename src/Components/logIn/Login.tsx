import React,{useState} from 'react'
import { Logo } from '../../imports/import'
import { LoginForm } from './LoginForm'
import { RegistrationForm } from './RegistrationForm'
import { Link } from 'react-router-dom'

export const Login = () => {
  const [loginDispl,setLoginDispl]= useState<boolean>(true)
  return (
    <section className="h-screen w-full  border-2 border-black
        flex justify-center
    bg-neutral-200 dark:bg-neutral-700"  style={{
      background:
        `linear-gradient(90deg, rgba(218,170,0,1) 0%, rgba(117,180,251,1) 0%, rgba(21,96,189,1) 76%)
         `,
    }}>
      <div className="w-full h-full p-5 relative" >
        <Link to="/landing" className="h-fit absolute top-5 left-4  border ">
          <img src={Logo} className=" border h-[100px] w-[110px]" alt="netverse Logo" />
        </Link>
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200" >
          <div className="w-full flex" >
            {/* <!-- Left column container--> */}
            <div
            className="flex items-center rounded-b-lg lg:w-5/12 md:w-1/3 max-md:hidden lg:rounded-r-lg lg:rounded-bl-none"
           
            /* linear-gradxient(to right, #ee7724, #d8363a, #dd3675, #b44593) */
            >
            <div className="px-4 py-6 text-white md:mx-0 md:p-12">
              <h4 className="mb-6 text-xl font-semibold">
                We are more than just a company
              </h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            </div>


{/* <!-- Right column container with background and description--> */}
<div className="p-5 md:px-0 lg:w-7/12 max-md:w-full md:w-2/3 bg-white rounded-lg ">
<div className="md:mx-6 md:p-12">
  {/* <!--Logo--> */}
  <div className="text-center  flex items-center flex-col">
 
    <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
   <span className='text-4xl font-playFait text-primaryy  underline'> {loginDispl ?  "Login" : "Registration"  } </span>
    </h4>
  </div>

{loginDispl ?  <LoginForm  loginToggle={setLoginDispl}/> : <RegistrationForm loginToggle={setLoginDispl}/> }

</div>
</div>
          </div>
        </div>
      </div>
    </section>
  )
}
/*     */




/*  <section className="h-screen w-full  border-2 border-black
        flex justify-center
    bg-neutral-200 dark:bg-neutral-700"  style={{
      background:
        `linear-gradient(90deg, rgba(218,170,0,1) 0%, rgba(117,180,251,1) 0%, rgba(21,96,189,1) 76%)
         `,
    }}>
      <div className="container h-full p-10 relative" >
        <Link to="/landing" className="h-fit border flex absolute top-5 left-4 items-center space-x-3 
                      rtl:space-x-reverse">
                    <img src={Logo} className="  h-[130px] w-[140px]" alt="netverse Logo" />
                    </Link>
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200" >
          <div className="w-full" >
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800" >
              <div className="g-0 flex lg:flsex-wrap max-lg:flex-col-reverse max-md:gap-3" 
              
              >
                {/* <!-- Left column container--> 
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      `linear-gradient(90deg, rgba(218,170,0,1) 0%, rgba(117,180,251,1) 0%, rgba(21,96,189,1) 76%)
                       `,
                  }}
                  /* linear-gradxient(to right, #ee7724, #d8363a, #dd3675, #b44593) *
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                

                {/* <!-- Right column container with background and description--> 
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> 
                    <div className="text-center  flex items-center flex-col">
                   
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                     <span className='text-4xl font-playFait text-primaryy  underline'> {loginDispl ?  "Login" : "Registration"  } </span>
                      </h4>
                    </div>

                  {loginDispl ?  <LoginForm  loginToggle={setLoginDispl}/> : <RegistrationForm loginToggle={setLoginDispl}/> }

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */