import React, { Component} from "react";
import './Todoites.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faTrash} />



export class TodoItem extends Component {

    handelChange = () => {
    
    if(this.props.todo.complete) {
    return true;
    }
    else{
    return false;
    }
    
    }

    oncheck = () => {
    
    
    }

    render() {
    const {title , id} = this.props.todo;
    
    return (
        <div className={`items ${this.handelChange() ? "hidden" : ""}`}>
        <p>
        <input type="checkbox"
        //pass up
        onChange={this.props.markChanged.bind(this, id)}/>
        {title}
        <button className="btn" onClick={this.props.delete.bind(this, id)}> {element} </button>
        </p>   
        </div>
    )
}

}



export default TodoItem
