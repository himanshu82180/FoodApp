import { useState, useEffect } from "react";
import { Item_Api } from "../Config";
const useRestaurant=(id)=>{
    const [restaurantData,setrestaurantData]=useState(null);
    const [menuItem,setMenuItem]=useState([]);
    useEffect(()=>{
        getData();    
    },[])
    async function getData(){
        const data=await fetch(Item_Api+id);
        const parsedData=await data.json();
        //console.log(parsedData.data.cards[0].card.card);
        setrestaurantData(parsedData?.data?.cards[0]?.card?.card);
        const menu=parsedData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
        //const filteredmenu=menu.filter((ele)=>ele?.card?.card?.title==="Recommended");
        const filteredmenu=menu.filter((ele)=>ele?.card?.card?.hasOwnProperty("itemCards"));
        //console.log(temp);
        console.log(filteredmenu);
        setMenuItem(filteredmenu);
        //setMenuItem(filteredmenu[0]?.card?.card?.itemCards);
        //setMenuItem(parsedData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
        //console.log(parsedData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].name)
    }
    const list=[restaurantData,menuItem];
    return list;

}
export default useRestaurant;