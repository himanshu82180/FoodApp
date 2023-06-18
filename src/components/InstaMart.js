import { useState } from "react";
const Section=({title,description,isVisible,setIsVisible})=>{
    //const[isVisible,setIsVisible]=useState(false);
    return (
        <div className="border border-black p-2 m-2">
            <h1 className="cursor-pointer text-lg font-bold border border-grey" onClick={()=>{
                isVisible?setIsVisible(""):setIsVisible()}}>{title}</h1>
            {isVisible&&<p>{description}</p>}
        </div>
    );
}
const InstaMart=()=>{
    const[sectionConfig,setSectionConfig]=useState("");
    return (
        <div>
            <h1 className="text-3xl font-bold p-2 m-2">InstaMart</h1>
            <Section title={"About Instamart"} description={"On the other hand , we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish."}
            isVisible={sectionConfig==="About"} setIsVisible={(data)=>{data===""?setSectionConfig(""):setSectionConfig("About")}}/>
            <Section title={"Team Instamart"} description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish."} 
            isVisible={sectionConfig==="Team"} setIsVisible={(data)=>{data===""?setSectionConfig(""):setSectionConfig("Team")}} />
            <Section title={"Career"} description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish."} 
            isVisible={sectionConfig==="Career"} setIsVisible={(data)=>{data===""?setSectionConfig(""):setSectionConfig("Career")}} />
        </div>
    );
}
export default InstaMart;