import React from "react";
import { Button } from 'react-bootstrap';
import { Trash } from "react-bootstrap-icons";

import './TodoListItem.css';

export default class TodoListItem extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {};
        this.todoItemRemoveButtonClicked = this.todoItemRemoveButtonClicked.bind(this);
    }
    todoItemRemoveButtonClicked()
    {
        let n = this.props.TodoItem.itemDescription;  // Get current todo object description
        this.props.onTodoItemRemoved(n);   // it inovkes the parent method
    }
    render()
    {
        return (
            <div className="item">
                <span style={{ color: "Green" }}> {this.props.TodoItem.itemDescription} </span> 
                <Button onClick={this.todoItemRemoveButtonClicked}>
                    <Trash />
                </Button>
                
                <br />
            </div>);
    }
}