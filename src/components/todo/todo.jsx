import React, { Component } from 'react';
import './todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    };
  }

  handleChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  addTodo = () => {
    this.setState({ todos: [...this.state.todos, this.state.newTodo] });
  };

  deleteTodo = (index) => {
    const updatedTodos = [...this.state.todos];
    updatedTodos.splice(index, 1);
    this.setState({ todos: updatedTodos });
  };

  render() {
    return (
      <div className="todo">
        <h1 id='head'>Todo List</h1>
        <input type="text" onChange={this.handleChange} className='input' placeholder='Write your task here...'/>
        <button onClick={this.addTodo}><span class="text">Add Task</span><span>Added!</span></button>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button className="delete-button" onClick={() => this.deleteTodo(index)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
