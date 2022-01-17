import React, {useState,useEffect,Fragment} from 'react'
import axios from 'axios'
import { awaitExpression } from '@babel/types'

import TodoCard from "./TodoCard"
import SearchbyTag from "./SearchbyTag"

const Todos = () => {

    const[todos , setTodos] = useState([])
    const[tagSearch,setTagSearch]= useState('')
    const[loaded,setLoaded] = useState(false)

    //  useEffect ( () => {
    //      // get all todos
    //      console.log(11)
    //      axios.get('/api/v1/todos.json')
    //      .then( resp => {
    //         setLoaded(true)
    //         setTodos(resp.data.data);
    //      })
    //      .catch( resp => console.log(resp))

    //  },[todos.length])

    const handleDestroy = (id, e) => {
        e.preventDefault()

        axios.delete(`/api/v1/todos/${id}`)
        .then( (data) => {
        const included = [...todos]
        const index = included.findIndex( (data) => data.id == id )
        included.splice(index, 1)

        setTodos(included)
        })
        .catch( data => console.log('Error', data.data) )
    }

    const handleSearchsubmit = ( e) => {

        e.preventDefault()
        // get all todos
        let url = ""
        if(tagSearch.trim() == '')
        {   
            url = '/api/v1/todos.json'
        }
        else
        {
            url = `/api/v1/todos/${tagSearch}/search`
        }
        axios.get(url)
        .then( resp => {
            //console.log(resp)
            setLoaded(true)
            setTodos(resp.data.data);
            
        })
        .catch( resp => console.log(resp))
                

    }

    const handleSearchChange = (e) => {
        setTagSearch( e.target.value.toString())
        //console.log(tagSearch)
    }

    let Todos_List
    if (loaded && todos)
    {
        
        if (todos.length > 0) 
        {
            Todos_List = todos.map(todo => {

                return (
                <TodoCard 
                    key={todo.id} 
                    todoitems={todo.relationships.todoitems.data} 
                    attributes={todo.attributes}
                    handleDestroy={handleDestroy}
                    />
                )
            }) 
        }
        else
        {
            Todos_List = <span>No records found</span>
        }    
    }

    return (
        <Fragment>
            <SearchbyTag 
            handleSearchsubmit={handleSearchsubmit}
            handleSearchChange={handleSearchChange} />
            <div className="container">
                <div className="row">
                    
                    {Todos_List}
                </div>
            </div>
            
        </Fragment>
    );
}

export default Todos