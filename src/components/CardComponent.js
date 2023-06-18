import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../Config";
const CardComponent=({name,cuisines,cloudinaryImageId,lastMileTravelString,id,avgRating,maxDeliveryTime,costForTwoString})=>{
    return (
    <>
    {/* <Link className="link-item" to={"/restaurant/"+id}>
    <div className="w-[200px] h-72 p-2 m-2 shadow-lg hover:shadow-2xl hover:text-pink-500">
      <img src={IMG_CDN_URL+cloudinaryImageId} alt="" />
      <h4 className="font-bold text-lg">{name}</h4>
      <p>{cuisines.join(", ")}</p>
      <p>{lastMileTravelString} distance</p>
    </div>
    </Link> */}
    <Link className="link-item" to={"/restaurant/"+id}>
    <div className="w-[300px] h-72 p-2 m-2 shadow-lg hover:shadow-2xl hover:text-pink-500">
      <div className="px-3">
      <div className="mx-1 my-1">
      <img src={IMG_CDN_URL+cloudinaryImageId} alt="" />
      </div> 
      <div className="text-lg">{name}</div>
      <div className="text-xs">{cuisines.join(", ")}</div>
      <div className="text-xs my-[4px]">
        <ul className="flex justify-between">
          <li className={parseFloat(avgRating)>3.9?"bg-green-500":"bg-yellow-300"}>{avgRating} rating</li>
          <li>{maxDeliveryTime+"min"}</li>
          <li>{costForTwoString}</li>
        </ul>
      </div>
      {/* <p>{lastMileTravelString} distance</p> */}
      </div>
    </div>
    </Link>
    </>
    
    );
  }
  export default CardComponent;