import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import Footer from "./Footer";
import UserContext from "../utils/UserContext";

class About extends React.Component{
    constructor(props){
        super(props);
       // console.log("parent constructor")
    }

    componentDidMount(){
     //   console.log("Component DidMount  parent")
    }
    render(){
        console.log("Parent render")
        return(
            <div>
                <h1>About</h1>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {({loggedInUser})=>
                        <h1 className="text-xl font-bold">{loggedInUser}</h1>
                        }
                    </UserContext.Consumer>
                </div>
                <h2>This is React Web Service</h2>
                <UserClass name={"Palanivel(class)"} Location={"salem(class)"} Contact={"9791609316(class)"}/>
                {/* <UserClass name={"karthirvel(class)"} Location={"Bangalore(class)"} Contact={"7708323090(class)"}/> */}
            </div>
        )
    }
}

export default About;