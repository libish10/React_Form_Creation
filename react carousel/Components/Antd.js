import React from "react";
import {DatePicker,Button,version} from "antd";

class Antd extends React.Component{
    render(){
        return (
            <div className="App">
            <h1>antd version: {version}</h1>
            <DatePicker />
            <Button type="primary" style={{ marginLeft: 8 }}>Primary Button</Button>
        </div>
        )
    }
}
export default Antd;