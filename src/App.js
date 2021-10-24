import React from "react";
import FormComponents from "./Components/FormComponents.js";
import ListingUsersComponents from "./Components/ListingUsersComponents.js";

class App extends React.Component {
    render() {
        return ( <div> 
                    <FormComponents/>
                    <ListingUsersComponents/> 
                </div>
        )
    }
}

export default App;