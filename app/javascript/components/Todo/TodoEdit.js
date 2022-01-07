import React, {useState} from 'react'
import { useNavigate,Link } from "react-router-dom";
import axios from 'axios'


const TodoEdit = (params)=> {

    const [todo , setTodo] = useState({ title: '', description: ''})
    let navigate = useNavigate();

    const handleChange = (e) => {
        setTodo(Object.assign({}, todo, {[e.target.name]: e.target.value}))
      }
    
      // Create a todo
      const handleSubmit = (e) => {
        e.preventDefault()
        console.log(todo)

        axios.post('/api/v1/todos',{...todo})
        .then( resp => {
            setTodo({title: '', description: ''});
            navigate('/todo');
        })
        .catch( resp => console.log(resp))
      }    

    return (
        <div className="card" >
            <div className="card-header">
                Create new Todo
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                
                    <div className="mb-3">
                        <label  className="form-label">Title</label>
                        <input onChange={handleChange} className="form-control" type="text" name="title" placeholder="Todo Title" value={todo.title}/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Description</label>
                        <input onChange={handleChange} className="form-control" type="text" name="description" placeholder="Todo Description" value={todo.description}/>
                        <div id="titleHelp" className="form-text">Add some more information about todo.</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to={"/todo/"} className="btn btn-default">Cancel</Link>
            
                </form>
            </div>
        </div>
    )


}

export default TodoEdit