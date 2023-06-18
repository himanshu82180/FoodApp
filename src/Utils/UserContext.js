import {createContext} from 'react';
const UserContext=createContext({
    user:{
        name:'Himanshu',
        email:'hv331229@gmail.com',
    }
});
UserContext.displayName="UserContext";
export default UserContext;