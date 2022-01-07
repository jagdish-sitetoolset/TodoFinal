import React from 'react'
import { BrowserRouter , Link } from 'react-router-dom'

const TodoCard = (props) => {

//const { title, description, id } = props.attributes



return ( 
    <div className="col-6">
        <div className="card" style={{margin:"10px"}}>
            <div className="card-header">
                <h5 className="card-title ">{props.attributes.title}</h5>
            </div>

            <div className="card-body">
            <p className="card-text">{props.attributes.description}</p>
            <Link to={"todo/"+props.attributes.id} className="btn btn-default">View Todo</Link>
            <Link to={"todo-edit/"+props.attributes.id} className="btn btn-primary">Edit Todo</Link>
                <ul className="list-group">
                                               
                </ul>
                <ul className="list-group ">
                 
                    <li className="list-group-item">A third item</li>
                </ul>            
            </div>
        </div>
    </div>    
);
}

export default TodoCard