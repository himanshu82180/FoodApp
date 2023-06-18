import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../Config";
import useAddItem from "../Utils/useAddItem";
import { addItem,appendItem, removeItem } from "../Utils/cartSlice";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { clear } from "../Utils/restaurantSlice";
const Cart=()=>{
    const cart=useSelector((store)=>store.cart.item);
    const rest=useSelector((store)=>store.restaurant.item);
    const dispatch=useDispatch();
    const [total,setTotal]=useState();
    //const [exist,setExist]=useState(false);
    useEffect(()=>{
        let sum=0;
        cart.map((ele)=>sum=sum+ele?.card?.info?.price/100*ele?.quantity);
        if(sum===0) dispatch(clear());
        setTotal(sum);
    },[cart]);
    const handleClick=(item,action)=>{
        const idx=cart.findIndex((ele)=>item?.card?.info?.id===ele?.card?.info?.id);
        console.log("index"+idx);
        if(action==="add"){
        if(idx===-1){
            item.quantity=1;
            dispatch(addItem(item));
        }
        else{
            dispatch(appendItem(idx));
        }
        }
        if(action==="remove"){
            dispatch(removeItem(idx));
        }
        

    }
    return (
        <>
        {rest.length!==0&&<div className="max-w-3xl mx-auto">
            <div className="flex my-2">
            <div className="w-24 mx-3">
            <Link className="link-item" to={"../restaurant/"+rest[0][3]}>
                <img src={IMG_CDN_URL+rest[0][1]} alt=""/>
            </Link>
            </div>
            <div className="my-auto">
                <h1>{rest[0][0]}</h1>
                <h1>{rest[0][2]}</h1>
            </div>
            </div>
            <hr className="border-dashed border-[1px] border-black"/>
            
            {cart.map((e)=>
                <div className="flex justify-between my-3">
                    <div>{e?.card?.info?.name}</div>
                    <div className="flex">
                    <div className="border-[1px] border-gray-400 flex justify-between mx-5 w-14"> 
                        <div><button className="text-green-400 font-bold" onClick={()=>handleClick(e,"remove")}>-</button></div>
                        <div className="mx-2">{e?.quantity}</div>
                        <div className="text-green-400 font-bold"><button onClick={()=>handleClick(e,"add")}>+</button></div>
                    </div>
                    <div>₹{e.quantity*e?.card?.info?.price/100}</div>
                    </div>
                </div>
            )
            }
            <hr className="border-[1px] border-black"/>
            <div className="flex justify-between">
               <div>Total</div> 
               <div>₹{total}</div>
            </div>


        </div>}
        {rest.length===0 && <div>Cart is Empty</div>}

        </>
    );
}
export default Cart;