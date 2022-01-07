
import React, {useState,useEffect,Fragment} from 'react'
import axios from 'axios'
//import { BrowserRouter , Routes, Route } from 'react-router-dom'

import { useParams } from "react-router-dom";
const Todo = () => {

    const[todo , setTodo] = useState([])
    const[todoitems , setTodoitems] = useState([])

    const [loaded,setLoaded] =  useState(false)

    let props = useParams()

    useEffect ( () => {
        // get todo 
        // get all todositems
        const url ='/api/v1/todos/' + props.id
        
        axios.get(url)
        .then( resp => {
            console.log(resp.data.included)
            
            setTodo(resp.data)
            setTodoitems(resp.data.included)
            
            setLoaded(true)

            
        })
        .catch( resp => console.log(resp))

    },[todo.length])

    const Todoitems_List = todoitems.map(todo => {
        return (<li key={todo.id} className="list-group-item" >{todo.attributes.name}</li>)
    }) 
    return (
        <div className="container">
            <div className="row">
            <div className="col-6">
                <div className="card" style={{margin:"10px"}}>
                    <div className="card-header">
                        <h5> { loaded && todo.data.attributes.title}
                        </h5>
                    </div>              
                        <ul className="list-group">
                            {Todoitems_List}
                            
                        </ul>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default Todo