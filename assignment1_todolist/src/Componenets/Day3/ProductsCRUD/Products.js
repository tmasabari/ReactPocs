import React, { useState, useEffect } from 'react';
import { Endpoints, createApiService }  from '../../../Services/Axios'; // Adjust the path

const apiService = createApiService('http://localhost:3002'); // Specify your API base URL

export default function ProductsCRUD()
{
    const [data, setData] = useState([]);

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState("");
    const [unitPrice, setUnitprice] = useState("");

    useEffect(() => {
        fetchData();
    }, 
    []); //do this operation only when no fields are modified or for the first time alone

    const fetchData = async () => {
        try {
            const response = await apiService.get(Endpoints.DATA); // Specify the endpoint
            setData(response.data);
        } catch (error) {
            alert(error);
            console.error('Error fetching data:', error);
        }
    };
    const fetchById = async (id) => {
        try {
            const response = await apiService.getById(Endpoints.DATA, id); // Specify the endpoint
            setObjectToUI(response.data);
        } catch (error) {
            alert(error);
            console.error('Error fetching data:', error);
        }
    };

    const getObjectFromUI = () => {
        return {
            id: id, 
            name: name, 
            quantity: quantity, 
            category: category, 
            unitPrice: unitPrice
        };
    }
    const setObjectToUI = (data) => {
        setId(data.id);
        setName(data.name);
        setQuantity(data.quantity);
        setCategory(data.category);
        setUnitprice(data.unitPrice);
    }
    const create = () => {
        const employee = getObjectFromUI();
        apiService.post(Endpoints.DATA, employee).then((resData) => {
            alert("New Employee is added to database");
            fetchData();
        });
    }
    const update = () => {
        const employee = getObjectFromUI();
        apiService.put(Endpoints.DATA, employee).then((resData) => {
            alert(employee.id  + " employee is updated to database");
            fetchData();
        });
    }
    function deleteData(id) {
        let confirmDelete = window.confirm("Are you sure you want to delete?");

        if (confirmDelete === true) {
            apiService.delete(Endpoints.DATA, id).then(resData => {
                alert("Selected data is deleted from the servers...!");
                fetchData();
            });
        }
    }
    let resultsArray = data.map(item =>
        <tr>
            <td>  {item.id} </td>
            <td>  {item.name} </td>
            <td>  {item.quantity} </td>
            <td>  {item.category} </td>
            <td>  {item.unitPrice} </td>
            <td>
                <a href="javascript:void(0);" onClick={() => deleteData(item.id)}> Delete </a>  |
                <a href="javascript:void(0);" onClick={() => fetchById(item.id)}> Select </a>  |
            </td>
        </tr>);

    return (
        <div>
            <h3>CRUD Operations on JSON Server - using Axios</h3>
            <hr />
            Id:<input type="text" value={id} placeholder="id"
                onChange={(event) => setId(event.target.value)} /><br/>

            Name: <input type="text" value={name} placeholder="name"
                onChange={(event) => setName(event.target.value)} /><br />

            Quantity: <input type="number" value={quantity} placeholder="quantity"
                onChange={(event) => setQuantity(event.target.value)} /><br />

            Category: <input type="text" value={category} placeholder="category"
                onChange={(event) => setCategory(event.target.value)} /><br />

            Unit price: <input type="number" value={unitPrice} placeholder="unitPrice"
                onChange={(event) => setUnitprice(event.target.value)} />
            <br /><br />

            <input type="button" onClick={fetchData} value="Get Depts" />
            <input type="button" onClick={create} value="Add Dept" />
            <input type="button" onClick={update} value="Update Dept" />
            <br /><br />

            <table border="2">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Category</th>
                    <th>Unit Price</th>
                    <th></th>
                </tr>

                {resultsArray}
            </table>
        </div>
    );
}