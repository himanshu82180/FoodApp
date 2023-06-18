import { useDispatch } from "react-redux";
import { item_img_cdn } from "../Config";
import { useEffect, useState } from "react";
import { addItem ,appendItem} from "../Utils/cartSlice";
import { add } from "../Utils/restaurantSlice";
import { useSelector } from "react-redux";
import MenuListItem from "./MenuListItem";

const MenuItem=({title,itemcard,restData})=>{
   const [collapse,setCollapse]=useState(false);

    return (
        <div>
            <div className="font-bold bg-gray-200 my-3 cursor-pointer" onClick={()=>setCollapse(!collapse)}>{title} ({itemcard.length})</div>
            {
            collapse===false&&itemcard.map((item,index)=>
            <div>
            <MenuListItem key={index} item={item} restData={restData}/>
            {/* <div className="flex justify-between my-2"> 
                <div className="text-left">
                    <h1>{item?.card?.info?.name}</h1>
                    <h4 className="text-xs text-gray-500">Rs. {item?.card?.info?.price/100}</h4>
                </div>
                <div className="w-24 relative">
                    <img className="rounded-md" src={item_img_cdn+item?.card?.info?.imageId} alt="" />
                    <button className=" bg-white shadow-gray-400 border border-gray-300 text-green-400 py-1 px-3 rounded-lg absolute top-[95%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:shadow-2xl"
                    onClick={()=>handleClick(item)}>Add</button>
                </div>
            </div> */}
            <hr className="border-solid my-5" />    
            </div>
            )}
        </div>
    );
}
export default MenuItem;