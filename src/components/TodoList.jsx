import React, { Component } from 'react'
import axios from "axios";

class TodoList extends Component {

  borrarTodos = (id) => {
    
    axios.delete(`http://localhost:8000/todos/${id}`).then(
      this.props.removeTodo(id)
    )
  }

    render() {

        console.log("render")

        const todos = this.props.todos || [];

        return (
            <div className="todo-list">
            <ul>
            
              {todos.map((i) => (
                <li key={i.id}>
                  {i.todo}<button onClick={()=>this.borrarTodos(i.id)}>Borrar</button>
                  {i.done ? " Hecho ":" Pendiente "}
                  </li>
              ))}

            </ul>
          </div>
        )
    }
  }

export default TodoList
