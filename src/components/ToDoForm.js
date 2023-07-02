import React, {useState} from "react";




export default function ToDoForm(props){
    
    const [input, setInput]= useState('');

    const handleChange = e =>{
        setInput(e.target.value)
    }

    const HandleSubmit = (e) => {
        e.preventdefault();
        props.addTask({
            id:Math.floor(Math.random()*100),
            text:input,
            isComplete:false
        })
    }



    return <form>
        <input type="text" placeholder="Write your Task here..." onChange={handleChange} className="todo-input" value={input} name="text"  />
        <button type="Submit" onClick={HandleSubmit} className="ToDoButton">Add ToDo</button>
    </form>
}
