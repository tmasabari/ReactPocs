import './App.css';
import React from 'react';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom'

import TodoList from './Componenets/Day1/TodoList/TodoList';
import ProductDetails from './Componenets/Day1/ProductDetails/ProductDetails';
import Employee from './Componenets/Day3/EmployeeAxios/Employee';
import Products from './Componenets/Day3/ProductsCRUD/Products';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <div style={{ textAlign: "center" }} >
          <h1>React Assignments</h1>
          <Link to="/">Day 1 - To do List</Link> | 
          <Link to="/Day1Product">Day 1 - Product Details</Link> |
          <Link to="/Day3Employee">Day 3 - Employee Axios</Link> |
          <Link to="/Day3Products">Day 3 - Product CRUD</Link>
        </div>
        <hr />
        <div>  
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/Day1Product" element={<ProductDetails />} />
            <Route path="/Day3Employee" element={<Employee />} />
            <Route path="/Day3Products" element={<Products />} />

            {/* <Route path="/Emps" element={
              <ProtectedRoute returnUrl="/Emps">
                <Emps />
              </ProtectedRoute>
            } /> 
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;
