import { useRouteError } from "react-router";

const Error=()=>{
    const err=useRouteError();
    const {status,statusText}=err;
    return (
        <>
        <h1>Opps</h1>
        <p>Something went wrong</p>
        <h2>{status +" : "+statusText}</h2>
        </>
    );
}
export default Error;