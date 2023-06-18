import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo:{
            name:"dummy",
            location:"dummy",
        },
        count:0,
    };
    console.log(this.props.name +"constructor");
  }
  //call in first render
  async componentDidMount(){
    console.log(this.props.name+" componentDidMount");
    const data=await fetch('https://api.github.com/users/himanshu82180');
    const json=await data.json();
    this.setState({
        userInfo:json,
    });
    console.log(json);
  }
  //it is called in every render
  componentDidUpdate(){
    console.log("componentDidUpdate");
  }
  componentWillUnmount(){
    console.log("component will unmount");
  }
  render() {
    console.log(this.props.name+" render");
    return (
      <>
        <h2>{"This is " + this.props.name}</h2>
        <h3>{"Name: "+this.state.userInfo.name}</h3>
        <h3>{"this is count: "+this.state.count}</h3>
        {/* we do not mutate state directly */}
        <button onClick={()=>{
            this.setState({
                count:this.state.count+1,
            });
        }}>setCount</button>
      </>
    );
  }
}
export default Profile;
