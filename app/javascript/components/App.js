import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'

import Todos from "./Todos/Todos"
import Todo from "./Todo/Todo"

import TodoNew from "./Todo/TodoNew"
import TodoEdit from "./Todo/TodoEdit"
import Home from "./Home"


const App = () =>{
    return (
      <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
              <a className="navbar-brand" href="#">Todo Project</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="/">Home</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/todo-new">Add New Todo</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo/" element={<Todos />} />
            <Route path="/todo/:id" element={<Todo />} />  
            <Route path="/todo-new/" element={<TodoNew />} />
            <Route path="/todo-edit/:id" element={<TodoEdit />} />  
          </Routes>
        </BrowserRouter>
    </div>
    );
}

export default App;