
import React, {useState,useEffect,Fragment} from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom";

import TodoitemForm from '../TodoItem/TodoItemForm'
import { Collapse } from 'bootstrap';
import { end } from '@popperjs/core';
import Todoitem from "../TodoItem/Todoitem"
const Todo = () => {

    const[todo , setTodo] = useState([])
    const[todoitems , setTodoitems] = useState([])

    const[todoitem_new , setTodoitem_new] = useState([{name:'',completed: false, datecompleted:'',tags:'',isrecurring:false,todo_id:0}])
    const [loaded,setLoaded] =  useState(false)

    let props = useParams()
    let navigate = useNavigate();

    useEffect ( () => {
        // get todo 
        // get all todositems
        const url ='/api/v1/todos/' + props.id
        axios.get(url)
        .then( resp => {
            setTodo(resp.data.data.attributes)
            setTodoitems(resp.data.included)
            setLoaded(true)
        })
        .catch( resp => console.log(resp))

    },[loaded])

    const handleDestroy = (id, e) => {
        e.preventDefault()

        axios.delete(`/api/v1/todos/${id}`)
        .then( (data) => {
            navigate('/todo');
        })
        .catch( data => console.log('Error', data) )
    } 

    const handleChange = (e) => {
        if (e.target.name == 'completed' || e.target.name == 'isrecurring'){
            // checkbox value
            console.log(e.target.checked)
            setTodoitem_new(Object.assign({}, todoitem_new, {[e.target.name]: e.target.checked.toString()}))
        }
        else{
            setTodoitem_new(Object.assign({}, todoitem_new, {[e.target.name]: e.target.value.toString()}))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(todoitem_new)

        axios.post('/api/v1/todoitems',{...todoitem_new,todo_id: props.id})
        .then( resp => {
            console.log(12)
            setTodoitem_new({name:'',completed: false, datecompleted:'',tags:'',isrecurring: false});
            setTodoitems([...todoitems,resp.data.data])
        })
        .catch( resp => console.log(resp))
            
    }   

    const handleIncomplete_todoItem = (id,e) => {
        e.preventDefault()
        
        axios.post(`/api/v1/todoitems/${id}/incomplete`)
        .then( resp => {

            const included = [...todoitems]
            const index = included.findIndex( (data) => data.id == id )
            included[index].completed = resp.data.data.attributes.completed
            included[index].datecompleted = resp.data.data.attributes.datecompleted

            setTodoitems(included)
            setTodo(todo)
            setLoaded(false)

        })
        .catch( resp => console.log(resp))
    }

    const handleComplete_todoItem = (id,e) => {
        e.preventDefault()
        
        axios.post(`/api/v1/todoitems/${id}/complete`)
        .then( resp => {

            const included = [...todoitems]
            const index = included.findIndex( (data) => data.id == id )
            included[index].completed = resp.data.data.attributes.completed
            included[index].datecompleted = resp.data.data.attributes.datecompleted

            setTodoitems(included)
            setTodo(todo)
            setLoaded(false)
        })
    }

    const handleDestroy_todoItem = (id,e) => {
        e.preventDefault()

        axios.delete(`/api/v1/todoitems/${id}`)
        .then( (data) => {
            const included = [...todoitems]
            const index = included.findIndex( (data) => data.id == id )
            included.splice(index, 1)
    
            setTodoitems(included)  
        })
        .catch( data => console.log('Error', data) )
    }

    
    const Todoitems_List = todoitems.map(todoitem => {

        return (<Todoitem 
            key={todoitem.id}
            id={todoitem.id}  
            name = {todoitem.attributes.name}
            datecompleted = {todoitem.attributes.datecompleted} 
            completed = {todoitem.attributes.completed}
            isrecurring = {todoitem.attributes.isrecurring}

            handleDestroy_todoItem = {handleDestroy_todoItem}
            handleIncomplete_todoItem = {handleIncomplete_todoItem}
            handleComplete_todoItem = {handleComplete_todoItem}
            /> )
    }) 


    return (
        <div className="container">
            <div className="row">
            <div className="col-7">
                <div className="card" style={{margin:"10px"}}>
                    <div className="card-header">
                        <h5> { loaded && todo.title}
                        </h5>
                    </div>   
                    <div className="card-body">
                        <p className="card-text">{ loaded && todo.description}</p>           
                        <ul className="list-group">
                                {Todoitems_List} 
                        </ul>
                    </div>
                    <div className="card-footer">
                        <Link to={"/todo-edit/"+todo.id} className="btn btn-primary btn-sm">Edit Todo</Link>&nbsp;
                       <button type="submit" onClick={handleDestroy.bind(this, todo.id)} className="btn btn-danger btn-sm">Delete Todo</button>
 
                    </div>
                </div>
                </div>
                <div className="col-5">
                    <TodoitemForm handleChange={handleChange} todoitem={todoitem_new}  handleSubmit={handleSubmit} />
                </div>
            </div>    
           
        </div>
    );
}

export default Todo