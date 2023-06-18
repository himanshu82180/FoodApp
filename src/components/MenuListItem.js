import { useDispatch } from "react-redux";
import { item_img_cdn } from "../Config";
import { useEffect,useState } from "react";
import { addItem ,appendItem,removeItem} from "../Utils/cartSlice";
import { add } from "../Utils/restaurantSlice";
import { useSelector } from "react-redux";
const MenuListItem=({item,restData})=>{
    const [exist,setExist]=useState(false);
    const [quantity,setQuantity]=useState(0);
    //const cart=useSelector((store)=>store.cart.item);

    const data=useSelector((store)=>store.cart.item);
    const dispatch=useDispatch();
    const handleClick=(item,action)=>{
        const idx=data.findIndex((ele)=>item?.card?.info?.id===ele?.card?.info?.id);
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
        
        dispatch(add(restData));
    }
    useEffect(()=>{
        const idx=data.findIndex((ele)=>item?.card?.info?.id===ele?.card?.info?.id);
        if(idx!==-1){    
            setExist(true);
            setQuantity(data[idx].quantity);
        }   
    },[data])
    return (
        <div className="flex justify-between my-2"> 
                <div className="text-left">
                    <h1>{item?.card?.info?.name}</h1>
                    <h4 className="text-xs text-gray-500">Rs. {item?.card?.info?.price/100}</h4>
                    
                </div>
                <div className="w-24 relative">
                    <img className="rounded-md" src={item_img_cdn+item?.card?.info?.imageId} alt="" />
                    {exist===false && <button className=" bg-white shadow-gray-400 border border-gray-300 text-green-400 py-1 px-3 rounded-lg absolute top-[95%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:shadow-2xl"
                    onClick={()=>handleClick(item,"add")}>Add</button>}
                    {exist===true && <div className="flex">
                    <div className="border-[1px] border-gray-400 bg-white flex justify-between mx-5 w-14 absolute top-[95%] left-[50%] translate-x-[-80%] translate-y-[-50%]"> 
                        <div><button className="text-green-400 font-bold" onClick={()=>handleClick(item,"remove")}>-</button></div>
                        <div className="mx-2">{quantity}</div>
                        <div className="text-green-400 font-bold"><button onClick={()=>handleClick(item,"add")}>+</button></div>
                    </div>
                    </div>

                    }
                </div>
            </div>
    );
}
export default MenuListItem