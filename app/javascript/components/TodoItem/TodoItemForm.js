import React, {useState} from 'react'
import { useNavigate,Link } from "react-router-dom";
import axios from 'axios'

const TodoItemForm = (props) => {

    const [errormsg, setErrorMsg] = useState('')
    const[todoitem_new , setTodoitem_new] = useState([{name:'',completed: false, datecompleted:'',tags:'',isrecurring:false,todo_id:0}])


    const handleChange = (e) => {
        if (e.target.name == 'completed' || e.target.name == 'isrecurring'){
            // checkbox value
            console.log(e.target.checked)
            setTodoitem_new(Object.assign({}, todoitem_new, {[e.target.name]: e.target.checked.toString()}))
        }
        else{
            setTodoitem_new(Object.assign({}, todoitem_new, {[e.target.name]: e.target.value.toString()}))
        }
        props.handleChange(e)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(todoitem_new[0])
        console.log(todoitem_new[0].name)

        if (todoitem_new[0].name == ""){
            setErrorMsg("Please enter title")
            return
        }
        if (todoitem_new[0].tags == ""){
            setErrorMsg("Please enter tag")
            return
        }
        //console.log(errormsg.trim().length)
        if (errormsg.trim() == "")
        {
            props.handleSubmit(e)
        }
    }    

    return (
        <div className="">
            { (errormsg.trim().length > 0 ? 
                    <div className="alert alert-danger"  >{errormsg}</div> : "")} 
            <div className="card" >
                <div className="card-header">
                    Create new Todo
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit} >
                    
                        <div className="mb-3">
                            <label  className="form-label">Todo Item Name</label>
                            <input  className="form-control" onChange={handleChange}   type="text" name="name" placeholder="Todo Item Title" />
                        </div>
                        <div className="mb-3">
                            <input className="form-check-input" onChange={handleChange} type="checkbox" value="" name="completed"/>
                            <label className="form-check-label" >
                                &nbsp;Completed
                            </label>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Enter tags</label>
                            <input  className="form-control" onChange={handleChange} type="text" name="tags" placeholder="Tags" />
                            <div id="tagHelp" className="form-text">Add tags separated by ",".</div>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Completed Date</label>
                            <input className="form-control" onChange={handleChange} type="date" data-date="" name="datecompleted" data-date-format="DD MMMM YYYY" ></input>

                        </div>
                        <div className="mb-3">
                            <input className="form-check-input" onChange={handleChange} type="checkbox" value="" name="isrecurring"/>
                            <label className="form-check-label" >
                                &nbsp;Is Recurring
                            </label>
                        </div>
                        <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                
                    </form>
                </div>
            </div>
        </div>    
    )
}

export default TodoItemForm