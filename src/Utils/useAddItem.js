import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const useAddItem=(item)=>{
    const data=useSelector((store)=>store.cart.item);
    const dispatch=useDispatch();
    useEffect(()=>{
        const idx=data.findIndex((ele)=>item?.card?.info?.id===ele?.card?.info?.id);
        console.log("index"+idx);
        if(idx===-1){
            item.quantity=1;
            dispatch(addItem(item));
        }
        else{
            dispatch(appendItem(idx));
        }
    },[])
    
       //dispatch(add(restData));

}
export default useAddItem;