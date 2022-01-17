import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'

import Todos from "./Todos/Todos"
import Todo from "./Todo/Todo"

import TodoNew from "./Todo/TodoNew"
import TodoEdit from "./Todo/TodoEdit"
import Home from "./Home"

import Navbar from "./UI/Navbar"


const App = () =>{
    return (
      <div className='container'>
        <Navbar />
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