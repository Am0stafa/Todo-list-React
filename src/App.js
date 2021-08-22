import './App.css';
import React, { Component } from 'react';
import Todos from '../src/components/Todos/todos.component.jsx'
import Header from '../src/components/Layout/Header.component.jsx'
import AddTodo from '../src/components/Layout/Addtodo.component.jsx'

class App extends Component {
  constructor(){
    super();
    
    this.state = {
    todos: [

    ],
    
  };
  }
  
  
  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=25')
      .then(res => (res.json()))
      .then((data) =>this.setState({todos:data})) 
  }
  
  
    markChanged = (id) => {
      this.setState({todos: this.state.todos.map((todo) => {
      if(todo.id === id){
      todo.complete =!todo.complete;
      }
      return todo;
      }) 
      
    });
  
    }
    lastkeyincrmentor =() => {
      let iddd = 0;
      this.state.todos.forEach((todo)=>{
      
      if (todo.id >= iddd){
      iddd = todo.id
      }
      
      })
      iddd+=1;
      return iddd ;
    
    }
    delete = (id) => {
    this.setState({todos: this.state.todos.filter((todo)=>{
    return todo.id !== id
    
    })})
    
    }
    addtodo = (title) => {
    // we can write title only inted of title:title es6
     this.setState({todos:[...this.state.todos, {title:title,id:this.lastkeyincrmentor(),complete:false}]})
    }

 
    

render() {
  return (
    <div className="App">
    <Header/>
    <AddTodo addtodo={this.addtodo}/>
     <Todos todos={this.state.todos} markChanged={this.markChanged} delete={this.delete} />
    </div>
  );
}
}

export default App;
