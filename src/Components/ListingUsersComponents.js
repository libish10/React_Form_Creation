import React, { Component } from 'react'
import "./ListingUsersComponents.css";

export class ListingUsersComponents extends Component {
    render() {
        return ( <div id = "table_container" >
            <table>
            <thead>
                <tr>
                    <th>First Name</th> 
                    <th>Last Name</th> 
                    <th>Email Id</th>
                    <th>Phone Number</th> 
                </tr>
            </thead> 
            <tbody>
            <tr>
                <td>John</td>
                <td>Christopher</td> 
                <td>johnChristopher@gmail.com</td> 
                <td>67894321678</td> 
            </tr> 
            <tr>
                <td>Mary</td> 
                <td>Christopher</td> 
                <td>maryChristopher@gmail.com</td> 
                <td>1234567899</td> 
            </tr> 
            <tr>
                <td>Dean</td>
                <td>Winchester</td> 
                <td>deanWinchester@gmail.com</td>
                <td>678326718932</td> 
            </tr>
            <tr>
                <td>Sammy</td>
                <td>Winchester</td> 
                <td>sammyWinchester@gmail.com</td>
                <td>2345678909876</td> 
            </tr>
            <tr>
                <td>Smitten</td> 
                <td>Moose</td> 
                <td>smittenmoose@gmail.com</td> 
                <td>127878484428</td> 
            </tr> 
          </tbody>
            </table> 
            </div>
        )
    }
}

export default ListingUsersComponents