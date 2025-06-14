import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import About from "../pages/About";
import App from "../App";
import Contact from "../pages/Contact";
import Lipstick from "../pages/product/Lipstick";
import UserCart from "../users/UserCart";


const Rounting = createBrowserRouter([
  { path: "app", element: <App /> },
  { path: "home", element: <Home /> },
  { path: "about", element: <About /> },
  { path: "contact", element: <Contact /> },

  //products
  {path:"lipstick",element:<Lipstick/>},

  //usercart
  {path:"usercart", element:<UserCart/>}
]);





export default Rounting;
