import { useEffect, useState } from "react";
import { MENU_API } from "./utils/constants";
const useRestaurantMenu=(resid)=>{
    
const [resInfo,setresInfo]=useState(null)
    useEffect(()=>{
    fetchData();
    },[])
    const fetchData=async()=>{
        const data=await fetch(MENU_API+resid);
        const json=await data.json()
        setresInfo(json.data)
    }

    // useEffect(()=>{
    //     fetchMenu();

    // },[]);

    // const fetchMenu =async()=> {
    //     const data = await fetch(MENU_API+resid);
    //     const json = await data.json();
    //     console.log(json);
    //     setresInfo(json?.data);
        
    // };
    // console.log(fetchMenu);
    return resInfo;
}
export default useRestaurantMenu;