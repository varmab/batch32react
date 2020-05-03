import React, {Component} from 'react'

class Todos extends Component{
    constructor(){
        super();

        this.state={
            todos:[],
            todo:''
        }
    }

    onTodoChange=(e)=>{
        this.setState({
            todo:e.target.value
        })
    }

    addTodo=()=>{
        this.setState({
            todos:[
                ...this.state.todos,
                this.state.todo
            ],
            todo:''
        })
    }

    removeTodo=(todo)=>{
        console.log(todo)
        this.setState({
            todos:this.state.todos.filter((currentTodo)=>{
                return currentTodo!=todo;
            })
        })
    }

    render(){
        return(
            <>
                <h1>Todos</h1>
                <input type="text" value={this.state.todo} onChange={this.onTodoChange} name="todo"/>
                <button onClick={this.addTodo}>Add Todo</button>
                <ul>
                    {
                        this.state.todos.map((todo,index)=>{
                            return <li key={index}>{todo} <button onClick={()=> {
                                this.removeTodo(todo)
                            }}>Remove</button></li>
                        })
                    }
                </ul>
            </>
        )
    }
}

export default Todos;