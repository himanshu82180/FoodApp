import React from "react";
import  ReactDOM  from "react-dom/client";
import '../index.css';
//DEFAULT import
import HeadingComponent  from "./components/Header";
//named imports
import Header, {Title} from "./components/Header"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
//import InstaMart from "./components/InstaMart";
import {lazy ,Suspense} from 'react';
import UserContext from "./Utils/UserContext";
import {useContext, useState} from 'react';
import MainBody from "./components/MainBody";
import { Provider } from "react-redux";
import store from "./Utils/store";
//import cart from "./components/cart";

const InstaMart=lazy(()=> import('./components/InstaMart'));
const About=lazy(()=> import('./components/About'));
const Cart=lazy(()=>import ('./components/Cart'));



//React.createElement->object->HTML(DOM)
// const heading1 = React.createElement(
//   "h1",
//   {
//     id: "title",
//     key: "123",
//   },
//   "Namaste React heading1"
// );
//JSX->React.createElement->object->HTML(DOM) BY BABEL

//React.Fragment-is a component which is exported by the component
//jsx can only have one parent. if we want to have more than one parent, we will use React.Fragment for the same requirement.
// const HeadingComponent=()=>{
//   return (
//     <div className="header">
//       <Title />
//       <div className="nav-item">
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//           <li>Cart</li>
//         </ul>
//       </div>

//     </div>
    
//   );
// };
//config driven UI

const Applayout=()=>{
  const [user,SetUser]= useState({
    
      name:'himanshu verma',
      email:'hv331229@gmail.com',
    
  });
  return(
  <Provider store={store}>
  <UserContext.Provider value={{
    user:user,
    SetUser:SetUser, 
  }}>
  <Header />
  <Outlet />
  </UserContext.Provider>
  </Provider>
  );
}

const pathrouter=createBrowserRouter([
  {
    path:'/',
    element:<Applayout />,
    errorElement:<Error />,
    children:[
      {
        path:'/About',
        element:(
        <Suspense>
        <About />
        </Suspense>),
      },
      {
        path:'/',
        element:<MainBody />
      },
      {
        path:'/Contact',
        element:<Contact />
      },
      {
        path:'/Restaurant/:id',
        element:<RestaurantMenu />
      },
      {
        path:'/InstaMart',
        element:(
        <Suspense fallback={<h1>Loading....</h1>}>
        <InstaMart />
        </Suspense>)
      },
      {
        path:'/Cart',
        element:(
        <Suspense fallback={<h1>Loading....</h1>}>
        <Cart />
        </Suspense>)
      }
    ]
  },
  
])
//Component using in another component is known as Composing component
// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [heading1, heading2]
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={pathrouter} />);
