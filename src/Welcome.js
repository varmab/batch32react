import React, {Component} from 'react';

class Welcome extends Component{
    constructor(){
        super();

        this.state={
            clicks:0,
            x:2
        }
    }

    updateClicks=()=>{
        this.setState({
            clicks:this.state.clicks+1
        })
    }

    render(){
        var year=this.props.year;
        return (
            <h1 onClick={this.updateClicks}>Welcome to {this.props.title} {year} - ({this.state.clicks})</h1>
        )
    }
}

export default Welcome;