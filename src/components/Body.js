import CardComponent from "./CardComponent";
import { useState ,useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import "./Body.css";
import useOnline from "../Utils/useOnline";
import UserContext from "../Utils/UserContext";
import DataContext from "../Utils/DataContext";
const Body=()=>{
    const {restaurant,restrutentList}=useContext(DataContext);
    const isOnline=useOnline();
    if(!isOnline){
        return <h1>Please check your internet connection</h1>
    }
    console.log("outside useeffect");
    const {user,SetUser}=useContext(UserContext);
    return restrutentList.length===0?(<Shimmer />) : (
    <>
    <div className="flex flex-wrap">
    { restaurant.length!==0&& restaurant.map((rest)=>{
          return <CardComponent {...rest.data} key={rest.data.id} />
        })
    }
    {
        restaurant.length===0&& <h1>No result found</h1>
    }
    </div>
      </>
    );
}
export default Body;