const Shimmer=()=>{
    return (
    <>
    <div className="flex flex-wrap">
        {Array(10).fill("").map((el,index)=><div key={index} className="h-64 w-52 shadow-lg p-2 m-2 bg-gray-200"></div>)}
        
    </div>
    </>
    );
};
export default Shimmer;