import Body from "./Body";
import Search from "./Search";
import { useState,useEffect } from "react";
import DataContext from "../Utils/DataContext";
const MainBody=()=>{
    const [restrutentList,setRestaurantList]=useState([]);
    const [restaurant,setRestaurant]=useState([]);
    useEffect(()=>{
        getData();
        //setRestaurantList(restaurant);
    },[]);
    const getData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.323667&lng=78.032996&page_type=DESKTOP_WEB_LISTING");
        const parsedData=await data.json();
        const list=parsedData?.data?.cards[2]?.data?.data?.cards;
        setRestaurant(parsedData?.data?.cards[2]?.data?.data?.cards);
        setRestaurantList(parsedData?.data?.cards[2]?.data?.data?.cards);
    }
    return (
        <DataContext.Provider value={{
            restrutentList:restrutentList,
            setRestaurantList:setRestaurantList,
            restaurant:restaurant,
            setRestaurant:setRestaurant,
        }
        }>
            <Search />
            <Body/>
        </DataContext.Provider>
    );
}
export default MainBody;