import React, { Component } from 'react';
import "./FormComponents.css"

const details = [{
    id: 1,
    title: "First Name",
    idName: "FName",
    type: "text",
}, {
    id: 2,
    title: "Last Name",
    idName: "LName",
    type: "text",

}, {
    id: 3,
    title: "Email Id",
    idName: "EMail",
    type: "email",

}, {
    id: 4,
    title: "Phone Number",
    idName: "PhoneNO",
    type: "number",

}, {
    id: 5,
    idName: "Submit",
    type: "submit"
}]

class FormComponents extends Component {
    render() {
        return ( <div id = "Container">
            <form id = "myForm">
            <p id = "form_title"> Personal Details </p>    
            {
            details.map((detail) => {
                    // const { title, type } = detail;
                    return ( <List key = { detail.id } detail = { detail } > </List>)
                    })
            }

            </form>

            </div>
        );
    }
}

export default FormComponents;

const List = (props) => {
    const { title, type, idName } = props.detail;
    return ( <div>
        <p className = "detail-text" > { title } </p>   
        <input type = { type } name = { title } className = "type" id = { idName }/> 
        </div>
    );

}