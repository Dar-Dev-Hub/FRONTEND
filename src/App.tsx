import './App.css'
import {
  RouterProvider,
} from "react-router-dom";
import { Routes } from './routes/routes';
function App() {
 
  return (
    <RouterProvider router={Routes} />
  )
}

export default App
