import React, { Component } from 'react';
import "./ListUserComponents.css";

const tableDetails = [{
    fName: "First Name",
    lName: "Last Name",
    eMail: "Email Id",
    phoneNo: "Phone Number",
}]
const userDetails = [{
    fName: "Libish",
    lName: "J M",
    eMail: "libishjm@gmail.com",
    phoneNo: 9567901243,
}, {

    fName: "Mary",
    lName: "M",
    eMail: "marym@gmail.com",
    phoneNo: 8907901243,

}]

class ListUserComponents extends Component {
    render() {
            return ( <div id = "tableContainer">
                <table>
                 {
                    tableDetails.map((personalDetails) => {
                            return ( <TableHead personalDetails = { personalDetails } > </TableHead>)
                            })
                    } {
                        userDetails.map((personUserDetails) => {
                                    return ( <TableBody personUserDetails = { personUserDetails } > </TableBody>)
                                    })
                            } 
                </table>   
                </div>
                    );
                }
            }

            export default ListUserComponents;

            const TableHead = (props) => {
                const { fName, lName, eMail, phoneNo } = props.personalDetails;
                return (
                    <thead>
                    <th> { fName } </th>    
                    <th > { lName } </th>    
                    <th> { eMail } </th>    
                    <th> { phoneNo } </th>  
                    </thead>
                );
            }
            const TableBody = (props) => {
                const { fName, lName, eMail, phoneNo } = props.personUserDetails;
                return ( 
                <tr>
                    <td> { fName } </td>    
                    <td> { lName } </td>   
                    <td> { eMail } </td >
                    <td> { phoneNo } </td>    
                </tr>
                );
            }