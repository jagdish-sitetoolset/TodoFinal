import React from 'react'
import { BrowserRouter , Link } from 'react-router-dom'

const TodoCard = (props) => {

//const { title, description, id } = props.attributes



return ( 
    <div className="col-6">
        <div className="card" style={{margin:"10px"}}>
            <div className="card-header">
            <Link to={"todo/"+props.attributes.id} className="btn btn-default">
                <h5 className="card-title ">{props.attributes.title}</h5>
                </Link>
            </div>

            <div className="card-body">
            <p className="card-text">{props.attributes.description}</p>
            
            <Link to={"/todo/"+props.attributes.id} className="btn btn-info btn-sm">View Todo</Link>&nbsp;
            <Link to={"/todo-edit/"+props.attributes.id} className="btn btn-primary btn-sm">Edit Todo</Link>&nbsp;
            <button type="submit" onClick={props.handleDestroy.bind(this, props.attributes.id)} className="btn btn-danger btn-sm">Delete</button>
                <ul className="list-group ">
                 
                    
                </ul>            
            </div>
        </div>
    </div>    
);
}

export default TodoCard