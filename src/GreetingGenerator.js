import React, { Component } from 'react'

class GreetingGenerator extends Component{
    constructor(){
        super();

        this.state={
            greeting:'',
            name:''
        }
    }

    onNameChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            name:e.target.value
        })
    }

    generate=()=>{
        this.setState({
            greeting:`Happy Birthday, ${this.state.name}`,
            name:''
        })
    }

    render(){ 
        return(
            <>
                <h1>Greeting Generator</h1>
                <input type="text" value={this.state.name} onChange={this.onNameChange} name="name"/>
                <button onClick={this.generate}>Generate</button>
                <h3>{this.state.greeting}</h3>
            </>
        )
    }
}

export default GreetingGenerator;