import React from 'react';
import TodoItem from '../Todoitems/Todoitems.component'
  

export const Todos = (props) => ( 

    props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markChanged={props.markChanged} delete={props.delete} />
      ))
      
      
)


export default Todos;