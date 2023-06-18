import { useState ,useContext,useEffect} from "react";
import DataContext from "../Utils/DataContext";
const Search=()=>{
    const [SearchText,setSearchText]=useState("");
    const {restrutentList,setRestaurant}=useContext(DataContext);
    const searchfun= (event)=>{
        setSearchText(event.target.value);
    }
    useEffect(()=>{
        if(SearchText.trim().length==''){
            setRestaurant(restrutentList);
        }
        else{
        const data=restrutentList.filter((rest)=>rest?.data?.name?.toLowerCase().includes(SearchText.toLowerCase()));
        setRestaurant(data);
        }
    },[SearchText])
    return (
        <div className="py-5 my-2 text-center">
        <input type="text" className="border border-black rounded-xl bg-pink-50 w-96 h-8 pl-4" value={SearchText} placeholder="Search"
        onChange={(e)=>{searchfun(e)}} />
    </div>
    );
}
export default Search;