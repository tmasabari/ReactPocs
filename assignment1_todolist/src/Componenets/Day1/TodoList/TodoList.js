import React from "react";
import { Button } from 'react-bootstrap';

import TodoListItem from './TodoListItem'
export default class TodoList extends React.Component
{
    constructor()
    {
        super();
        this.state =
        {
            descriptionToAdd: '',
            todoItems: [
                { itemDescription: "I will wake up 8 am in the morning" },
                { itemDescription: "I will practice HTML for 1 hour" },
                { itemDescription: "I will give time for 2 hours css" },
                { itemDescription: "then i will have breakfast" },
            ]
        };

        this.descriptionChanged = this.descriptionChanged.bind(this);
        this.todoItemAddClicked = this.todoItemAddClicked.bind(this);
        this.todoItemRemove = this.todoItemRemove.bind(this);
    }
 
    descriptionChanged(event) { this.setState({ descriptionToAdd: event.target.value }); }

    todoItemAddClicked()
    {
        let todoItems = this.state.todoItems;
        const { descriptionToAdd } = this.state;
        todoItems.push({ itemDescription: descriptionToAdd });
        this.setState({ todoItems });

        //clear the text box
        this.setState({ descriptionToAdd: '' });

    }

    todoItemRemove(id)
    {
        let todoItems = this.state.todoItems;
        let index = todoItems.findIndex(item => item.itemDescription === id); 
        if(index > -1) {
            todoItems.splice(index, 1);
            this.setState({ todoItems });  
        }
    }

    render()
    {
        var result = this.state.todoItems.map(item =>
            <TodoListItem onTodoItemRemoved={this.todoItemRemove} TodoItem={item} />
        );

        return (
            <div style={{ marginLeft: "25%", marginRight: "25%", width: "50%" }}>
                <h5 align="center">TodoItem list using the Parent - Child Communication in React Applications </h5>
                <input type="text" value={this.state.descriptionToAdd} onChange={this.descriptionChanged}></input>
                <Button onClick={this.todoItemAddClicked}>
                    Add
                </Button>

                {result}
            </div>
        );
    }
}