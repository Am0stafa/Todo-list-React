import React, { Component } from 'react'
import '../Layout/header.style.css'



export class AddTodo extends Component {
    constructor(){
    super();
    this.state = {
    title: ''
    }
    
    }
    
    onchange = (e) => {
  
    
    this.setState({[e.target.name]: e.target.value})
  
    }
    
    onsub =(e)=>{
    
   
    e.preventDefault();
    this.props.addtodo(this.state.title);
    this.setState({title:''})
    }
    
    //bind props msh state
    //this.props.addtodo.bind(this, this.state.title)

    render() {
        return (
            <form className="form" onSubmit={this.onsub}>  
            <input type="text" name="title" placeholder="Add todo to the list..." className="form-control" value={this.state.title} onChange={this.onchange} 
           />
            <button className="submitbtn">Submit</button>
            </form>
        )
    }
}

export default AddTodo


//<input type="submit" value="Submit" className="submitbtn"/>