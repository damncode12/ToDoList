//Write React code to create a commponent to be used in the App component that acts as a todo list and supports all functionalities.

import React, { Component } from 'react';
import './todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],

            newTodo: ''
        }
    }

    handleChange = (event) => {
        this.setState({ newTodo: event.target.value });
    }
    
    addTodo = () => {
        this.setState({ todos: [...this.state.todos, this.state.newTodo] });
    }
    
    deleteTodo = (index) => {
        this.state.todos.splice(index, 1);
        this.setState({ todos: this.state.todos });
    }

    render() {
        return (
            <div className="todo">
                <h1>Todo List</h1>
                <input type="text" onChange={this.handleChange} />
                <button onClick={this.addTodo}>Add</button>
                <ul>
                    {this.state.todos.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <button onClick={() => this.deleteTodo()}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

}

export default Todo;

