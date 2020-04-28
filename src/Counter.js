//1. Import react library
//2. Create class that extends Component
//3. Implement render method that must return JSX
//4. Export it out as module so it can be imported somewhere else

import React, {Component} from 'react'


class Counter extends Component{
    constructor(){
        super();

        this.state={
            count:0
        }
    }

    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    decrement=()=>{
        this.setState({
            count:this.state.count-1
        })
    }

    render(){
        return(
            <div>
                <h1>Counter</h1>
                <h3>{this.state.count}</h3>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

export default Counter;