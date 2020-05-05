import React, {Component} from 'react';
import PropTypes from 'prop-types'

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
            <React.Fragment>
                <h1 onClick={this.updateClicks}> {this.props.children} {this.props.title} {year} - ({this.state.clicks})</h1>
            </React.Fragment>
        )
    }
}

Welcome.propTypes={
    title:PropTypes.string.isRequired,
    year:PropTypes.number,
    password(props, propName, component){
        if(!(propName in props)){
          return new Error(`missing ${propName}`)
        }
        if(props[propName].length < 6){
          return new Error(`${propName} was too short in ${component}` )
        }
      }
}

Welcome.defaultProps={
    year:2022
}

export default Welcome;