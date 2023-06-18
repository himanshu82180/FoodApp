import { useParams } from "react-router";
import { useEffect, useState } from "react";

import './Restaurant.css';
import { IMG_CDN_URL } from "../Config";
import Shimmer from "./Shimmer";
import useRestaurant from "../Utils/useRestaurant";
import { addItem } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";
import MenuItem from "./MenuItem";

const RestaurantMenu=()=>{
    const params=useParams();
    const {id}=params;
    const dispatch=useDispatch();
    const [restaurantData,menuItem]=useRestaurant(id);
    
    const [restData,setRestData]=useState([]);
    useEffect(()=>{
        const arr=[];
        //arr.push()
        arr.push(restaurantData?.info?.name);
        arr.push(restaurantData?.info?.cloudinaryImageId);
        arr.push(restaurantData?.info?.areaName);
        arr.push(id);
        setRestData(arr);
    },[restaurantData])
    return (!restaurantData)?<Shimmer />:(
        <div className="max-w-2xl mx-auto">
        <div className="flex justify-between my-12"> 
            <div>
                {/* <h1>Restaurand id: {id}</h1> */}
                <h1 className="text-lg font-bold">{restaurantData?.info?.name}</h1>
                <h3 className="text-xs text-gray-500">{restaurantData?.info?.cuisines}</h3>
                {/* <img className="restaruant-img" src={IMG_CDN_URL+restaurantData?.info?.cloudinaryImageId} alt="" /> */}
                <h3 className="text-xs text-gray-500">{restaurantData?.info?.areaName}</h3>
            </div>
            <div>    
                <h3>⭐️{restaurantData?.info?.avgRating}</h3>
                {/* <h3>{restaurantData?.info?.costForTwo}</h3> */}
            </div>
        </div>
        <hr className="border-dashed border-[1px] border-black"/>
            {menuItem.length!==0&&<div>
                {/* <ul>
                    {menuItem.map((item)=>(<li key={item.card.info.id} >{item.card.info.name +" - "+item.card.info.price/100}
                    -<button className="p-1 m-1 bg-green-300" onClick={()=>handleClick(item)}>add</button></li>)
                   )}
                </ul> */}
                {
                    menuItem.map((item,index)=>(
                      <MenuItem key={index} title={item?.card?.card?.title} itemcard={item?.card?.card?.itemCards} restData={restData}  />  
                    ))
                }
            </div>}
        
        </div>
    );
}
export default RestaurantMenu