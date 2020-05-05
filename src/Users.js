import React, { Component } from 'react'
import "./User.css";

class Users extends Component{
    constructor(){
        super();

        this.state={
            users:[],
            loading:true,
            error:false
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholderxxxx.typicode.com/users')
        .then(response=>response.json())
        .then(users=>{
            this.setState({
                users:users,
                loading:false
            })
        })
        .catch((err)=>{
            this.setState({
                loading:false,
                error:true
            })
        })
    }

    render(){
        if(this.state.loading==true){
            return(
                <React.Fragment>
                    <h1 className="heading">Users</h1>
                    <p>Loading.. Please wait</p>
                </React.Fragment>
            )
        }

        if(this.state.error==true){
            return(
                <React.Fragment>
                    <h1>Users</h1>
                    <p>Sorry.. Our server is down. Please try later</p>
                </React.Fragment>
            )
        }
        return(
            <React.Fragment>
                <h1>Users</h1>
                <ul>
                {
                    this.state.users.map((user)=>{
                        return <li key={user.id}>{user.name}</li>
                    })
                }
                </ul>
            </React.Fragment>
        )
    }
}

export default Users;