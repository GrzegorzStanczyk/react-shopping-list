import React, { Component } from 'react';
import cn from 'classnames';
import './ListItem.css';

class ListItem extends Component {
    constructor () {
        super () 

        this.state = {
            done: false
        }
    }
    render () {
        // const className = "list-item" + (this.state.done ? " done" : "")
        const className = cn('list-item', { 'done': this.state.done })

        return ( 
            <li 
            className={className}
            onClick={() => this.props.changeStatus(this.props.index)}            
            >
                {this.props.value}
            </li>
        )
        
    }

}

export default ListItem