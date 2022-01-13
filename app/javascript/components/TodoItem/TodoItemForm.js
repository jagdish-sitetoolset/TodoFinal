import React, {useState} from 'react'
import { useNavigate,Link } from "react-router-dom";
import axios from 'axios'

const TodoItemForm = (props) => {

    return (
        <div className="card" >
            <div className="card-header">
                Create new Todo
            </div>
            <div className="card-body">
                <form onSubmit={props.handleSubmit} >
                
                    <div className="mb-3">
                        <label  className="form-label">Todo Item Name</label>
                        <input  className="form-control" onChange={props.handleChange}   type="text" name="name" placeholder="Todo Item Title" />
                    </div>
                    <div className="mb-3">
                        <input className="form-check-input" onChange={props.handleChange} type="checkbox" value="" name="completed"/>
                        <label className="form-check-label" >
                            &nbsp;Completed
                        </label>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Enter tags</label>
                        <input  className="form-control" onChange={props.handleChange} type="text" name="tags" placeholder="Tags" />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Completed Date</label>
                        <input className="form-control" onChange={props.handleChange} type="date" data-date="" name="datecompleted" data-date-format="DD MMMM YYYY" ></input>

                    </div>
                    <div className="mb-3">
                       <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
            
                </form>
            </div>
        </div>
    )
}

export default TodoItemForm