import   Shimmer  from "./Shimmer";
import { Link,useParams } from "react-router";
import useRestaurantMenu from "../useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu =()=>{
 
   // const [resInfo,setresInfo]=useState(null);
    const {resid}=useParams();

    const resInfo=useRestaurantMenu(resid);

    const[showIndex,setShowIndex]=useState(null);

    if(resInfo===null) return <Shimmer/>;

    const{name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
    const itemCards=
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
    
   console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
   const categories=resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>
    c.card?.["card"]?.["@type"]===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

   );
  console.log(categories)
   return(
    <div className="text-center">
     <h1 className="font-bold my-6 text-2xl">{name}</h1>
     <p className="font-bold text-lg">
      {cuisines.join(", ")} - {costForTwoMessage}
      </p>
    
      {categories.map((category,index)=>(
      <RestaurantCategory 
      key={category?.card?.card.title} 
      info={category?.card?.card}
      showItems={index === showIndex ? true:false}
      setShowIndex={()=>setShowIndex(index)}
      />
      ))}
      </div>
  );  
};
export default RestaurantMenu;