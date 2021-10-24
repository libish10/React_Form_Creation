import React, { Component } from 'react';
import FormComponents from "./Components/FormComponents.js";
import ListUserComponents from "./Components/ListUserComponents.js"


class App extends Component {
    render() {
        return ( <div>
            <FormComponents />
            <ListUserComponents />
            </div>
        );
    }
}

export default App;