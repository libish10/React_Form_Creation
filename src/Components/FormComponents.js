import React, { Component } from 'react';
import "./FormComponents.css";

export class FormComponents extends Component {
    render() {
        return ( <div id = "Container">
            <form id = "myForm">
            <p id = "form_title"> Personal Details </p>     
            <ul>
            <li className = "detail-text"> First Name </li> 
            <li> <input type = "text" className = "type" name = "Fname" id = "fname" /> </li> 
             <li className = "detail-text"> Last Name </li> 
             <li> <input type = "text" className = "type"  name = "Lname" id = "lname" /> </li>  
             <li className = "detail-text"> Email Id </li> 
             <li> <input type = "email" className = "type"  name = "Email" id = "eMail" /> </li> 
             <li className = "detail-text"> Phone Number </li> 
             <li> < input type = "number" className = "type"  name = "phoneNumber" id = "phone_number" /> </li>
            </ul>  
            <p> < input type = "submit"  id = "Submit" /> </p>
            </form > 
            </div>
        )
    }
}

export default FormComponents;