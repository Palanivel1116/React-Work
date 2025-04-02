import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { CON_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const{resData}=props; 
    const{loggedInUser}=useContext(UserContext)
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla
     }=resData?.info;
    return(
      <div className="m-4 p-4 w-[250px] h-[520px] rounded-lg bg-gray-100 hover:bg-gray-300">
        <div>
        <img 
        className="rounded-lg"
        alt="res-log"
        src=
        {
      CON_URL+
      cloudinaryImageId
    }
    />
    </div>
    <div>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join("-")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} Minutes</h4>
        <h4>User: {loggedInUser}</h4>
      </div>
       </div>
    );
  };
  export const withPromtedLabel=(RestaurantCard)=>{
    return (props)=>{
      return(
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
          <RestaurantCard{...props}/>
        </div>
      );
    };
  };
  export default RestaurantCard;