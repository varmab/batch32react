import React, { Component } from 'react'

export class Friend extends Component{
    render(){
        return(
            <h1>Friend</h1>
        )
    }
}

class Friends extends Component {
    constructor(){
        super();

        this.state={
            friends:[
                "Ram","Robert","Rahim","Ram"
            ]
        }
    }

    render(){
        return(
            <div>
                <h1>Friends</h1>
                <ul>
                    {
                        this.state.friends.map((friend,index)=>{
                            return <li key={index}>{friend}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Friends;