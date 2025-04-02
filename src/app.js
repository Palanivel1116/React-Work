
//import { title } from "process";
import React, { lazy,Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from"./components/Body";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu.js";
//import Grocery from "./components/Grocery.js";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react";
const Grocery=lazy(()=>import("./components/Grocery.js"));

const About =lazy(()=>import("./components/About.js"))
 //        3-episode;
 //        React Element;

//  const heading = React.createElement(
//   "h1", 
//   {id:"heading"},
//   "Palanivel React🚀"
//  );
//  console.log(heading);
  // it will print the react element in console.
  //JSX - HTML-like  or XML-like synatax
  
  // const jsxHeading = <h1 className="head" tabIndex="5"> Subash React JSX 🚀 </h1>;
  // console.log(jsxHeading);
  // it will print the JSX element in console.

  // Rendering the React Component

 // const elem=<span>Palani</span>

  

 // const number=1000;
// React  functional Component
//Class Based Component -OLD
// Functional Component -NEW 
// const Title = () =>( 
//   <h1 className="head" tabIndex="5">
  
//     Palanivel react using JSK🚀 
   
//   </h1>
// ); 
// //const data=api.getData(); 
// const HeadingComponent=()=>(
 
//   <div id="container">
//  {Title()} 
//  <Title/>
//   <Title></Title>
//   <h1 className="heading">Palanivel using React Component 🚀</h1>
//   </div>
// );



// FOOD DELIVERY APPLICATION


//const styleCard = ;




//not using keys(not acceptable)<<<<<<<<unique id(best practice)

const AppLayout=() =>{
  const [userName,setUserName]=useState();

  useEffect(()=>{
    const data={
      name:"Palanivel"
    }
    setUserName(data.name)
  },[])

  return(
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="app">
     <Header/>
     <Outlet/>
</div>
</UserContext.Provider>

  )
}
  
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/grocery",
        element:(
          <Suspense fallback={<h1>Loading</h1>}>
            <Grocery/>
          </Suspense>

        ),
      },
      {
        path:"/Contact",
        element:<Contact/>,
      },
      {
        path:"/restaurants/:resid",
        element:<RestaurantMenu/>
      },
    ],
    errorElement:<Error/>,
},
])

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render( <RouterProvider router={appRouter}/>);      