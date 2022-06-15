import React, { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        if(this.props.name !== ""){
            return (
                <ul>
                    {this.props.value.map((x, y) =>
                    <li key={y}>{x}</li>)}
                </ul>
            );  
        }
    }
}

export default List