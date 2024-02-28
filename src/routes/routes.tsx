import { Link, Navigate, createBrowserRouter } from "react-router-dom";
import Root, { Root2 } from "./root";
import ErrorPage from "./errorElem";
import { Landing } from "../Components/Landing/Landing";
import { OurComapny } from "../Components/Landing/ourComapny/OurComapny";
import { ContactUs } from "../Components/Landing/contactus/ContactUs";
import { Login } from "../Components/logIn/Login";
import { Recrutement } from "../Components/Landing/Recrutement/Recrutement";

export const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage />,
      children:[
        {
          path: "/", // Catch-all route
          element: <Navigate to="/landing" /> // Redirect to the "/landing" route
        },
        {
          path:'/landing',
          element:<Root2/>,
          children:[
            {
              path:"/landing",
              element:<Landing/>
            },
            {
              path:"/landing/our-company",
              element:<OurComapny/>
            },
            {
              path:"/landing/contact-us",
              element:<ContactUs/>
            },
            {
              path:"/landing/Recrutement",
              element:<Recrutement/>
            },
            
            
          ]
        },
       
         {
          path:"/login",
          element:<Login/>
        }
      ]

    },
    {path:"*",
  element:<div>   Not ready yet Go back to <Link to="/landing" className="text-blue-500 underline font-bold" > Home</Link> </div>}
  ]);