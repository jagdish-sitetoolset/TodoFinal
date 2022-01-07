import React, {useState,useEffect,Fragment} from 'react'
import axios from 'axios'
import { awaitExpression } from '@babel/types'

import TodoCard from "./TodoCard"

const Todos = () => {

    const[todos , setTodos] = useState([])

    useEffect ( () => {
        // get all todos
        
        axios.get('/api/v1/todos.json')
        .then( resp => {
            //console.log(resp.data.data);
            setTodos(resp.data.data);
        })
        .catch( resp => console.log(resp))

    },[todos.length])

    const Todos_List = todos.map(todo => {

        console.log(todo.relationships.todoitems.data)
         
        return (<TodoCard key={todo.id} todoitems={todo.relationships.todoitems.data} attributes={todo.attributes}></TodoCard>)
    }) 

    return (
        <Fragment>
            
            <div className="container">
                <div className="row">
                    
                    {Todos_List}
                </div>
            </div>
            
        </Fragment>
    );
}

export default Todos