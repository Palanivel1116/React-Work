import RestaurantCard, {withPromtedLabel} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../useOnlineStatus";
// import RestaurantMenu from "./RestaurantMenu";
import UserContext from "../utils/UserContext";

const Body=()=>{

  //State Variable -Super powerful variable
 const [listOfRestaurants,setlistofRestaurants]=useState([]);
 const [filteredrest,setfilteredrest]=useState([]);
 const [searchtext,setsearchtext]=useState(" ");
 console.log("body Rendered",listOfRestaurants);

 const RestaurantCardPromoted=withPromtedLabel(RestaurantCard)
useEffect(()=>{
  FetchData();
},[]);

const FetchData=async()=>{
  const data= await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    
    )
    const json =await data.json();
    console.log(json);
    setlistofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredrest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }

  const onlineStatus=useOnlineStatus;
  if(onlineStatus==false)
  return (<h1>Looks like you're offline !! please your internet connection</h1>);
  const {loggedInUser,setUserName}=useContext(UserContext)


  // Normal  JS Variable
    return listOfRestaurants.length==0 ?(
      <Shimmer/>
      ):(
      <div className="body">
       <div className="filter flex">
        <div className="search m-4 p-4">
          <input 
          type="text"
           className="border border-solid border-black rounded-lg" 
           value={searchtext}
           onChange={(e)=>{
            setsearchtext(e.target.value);
           }}
           />
          <button
          className="px-3 py-1.5 bg-gray-200 m-4 rounded-lg"
          onClick={()=>{
            console.log(searchtext)

            const filteredrest=listOfRestaurants.filter(
              (res)=> res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
         
            setfilteredrest(filteredrest)
          }}

          >Search</button>
        </div>
       <div className="search m-6 p-4 flex items-center " >
       <button 
        className="px-4 py-2 bg-pink-100 rounded-lg" 
        onClick={()=>{
       const filteredList=listOfRestaurants.filter(
            (res)=>res.info.avgRating > 4
          );
          setlistofRestaurants(filteredList);
      }}
  
      >Top Rated Restaurants</button>
       </div>

       <div className="search m-6 p-4 flex items-center " >
        <label>UserName : </label>
        <input className="border border-black p-2 "
        value={loggedInUser}
         onChange={(e)=>setUserName(e.target.value)}/>
        
     
       </div>

       </div>
       <div className="flex flex-wrap">
      {filteredrest.map((restaurant)=> (
       <Link
       key ={restaurant.info.id}
        to={"/restaurants/"+restaurant.info.id}>
          {restaurant.info.promoted ?(
            <RestaurantCardPromoted resData={restaurant}/>
          ):
      ( <RestaurantCard resData={restaurant}/>)
          }
       </Link>  
        ))}
        </div>
      </div>
    );
      };
    export default Body;