import Profile from "./Profile";
import { Component } from "react";
class About extends Component{
    constructor(props){
        super(props);
        console.log("parent constructor");
    }
    componentDidMount(){
        console.log("parent componentDidMount");
    }
    render(){
        console.log("parent render");
        return(
            <>
            <h1>About Us</h1>
            <p>This is out about us page</p>
            <Profile name={"First child"} />
            </> 
        );
    }
}
export default About;
/*
    This is react method lifecycle. First we have the render phase in which all the redering is done in all components
    after that we have commit phase in which all the componentDidMount process will be called. 
    First we are rendering and then we are updating the dom.    

    Parent Constructor
    Parent render
    First child constructor
    first child render
    second child constructor
    second child render
    first child componentDidMount
    second child componentDidMount
    Parent componentDidMount


*/
