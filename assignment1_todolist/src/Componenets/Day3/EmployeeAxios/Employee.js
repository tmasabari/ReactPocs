import React from "react";
import { useState } from 'react';

import axios from 'axios';


export default function Employee() {

    const [employeesArray, setEmployeesArray] = useState([]);
    function getEmployeeData()
    {
        //let url = "https://dummy.restapiexample.com/api/v1/employees"; throws error for too many requests
        let url = "http://localhost:3500/Data";
        axios.get(url).then(resData =>
        {
            //  console.log(resData.data.records);
            setEmployeesArray(resData.data);
        });
    }
    var result = employeesArray.map((item, index) =>
        <tr key={item.id}>
            <td> {item.employee_name}  </td>
            <td> {item.employee_salary}  </td>
            <td> {item.employee_age}  </td>
        </tr>);

    return (
        <>
            <h5>Employee Data AJAX Call in React using Axios Package</h5>
            <hr />

            <input type="button" value="Get Data" onClick={getEmployeeData} />
            <hr />
            <table border="2" width="700">
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Salary</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {result}
                </tbody>
            </table>

        </>
    );
}