import React from "react";
import Form_components from "./Components/Form_components.js";
import { Listing_Users_Components } from "./Components/Listing_Users_Components.js";

class App extends React.Component {
    render() {
        return ( <
            div > < Form_components / >
            <
            Listing_Users_Components / > < /div >
        )
    }
}

export default App;