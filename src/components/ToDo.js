import React, {useState} from "react";
import { useState } from "react/cjs/react.development";
import ToDoForm from './ToDoForm'


export default function ToDoList(){
    
    const [todos, setTodos]= useState([]);
    const addTask = task => {
        if(!task.text){
            return
        }
    const oldTask= todos;
    todos.push(task);
    }
  return<div>
    <ToDoForm addTask={addTask}></ToDoForm>
  </div>  

}
