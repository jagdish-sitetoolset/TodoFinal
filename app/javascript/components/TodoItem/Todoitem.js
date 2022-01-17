import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Todoitem =(props) => {

    const[tags , setTags] = useState([])

    useEffect ( () => {
        console.log(props.id)
        const url ='/api/v1/todoitems/' + props.id
        axios.get(url)
        .then( resp => {
            setTags(resp.data.included)
        })
        .catch( resp => console.log(resp))
    },[tags.length])
    
    const Tag_List = tags.map(tag => {
        return (<span key={tag.id} style={{margin: "4px"}} className="badge bg-primary">{tag.attributes.tagname} </span> )
    }) 

    if( props.completed == true)
    {
        let datecompleted =""

        if(props.datecompleted != null)
        {
            datecompleted = props.datecompleted 
        }
        return ( 
            <li key={props.id} className="list-group-item" >
                 <h4>{props.name} </h4>
                 <h6>Status: <span className='badge bg-success'> Completed On {datecompleted}</span> </h6>
                 <h6>Recurring: <span className='badge bg-success'>{props.isrecurring == true ? 'Yes' : 'No'}</span></h6>
             
            
             {Tag_List.length > 0 && <span>Tag:</span>} {Tag_List}
                <div className="  d-md-flex justify-content-md-end">
                    <button id="set_incomplete"  type="submit" onClick={props.handleIncomplete_todoItem.bind(this, props.id)} className="btn btn-info btn-sm">Set Incomplete</button>&nbsp;
                    <button id='del_complete'  type="submit" onClick={props.handleDestroy_todoItem.bind(this, props.id)} className="btn btn-danger btn-sm">Delete</button>
                </div>
                
            </li> 
        )
    }
    else
    {
        return ( 
            <li key={props.id} className="list-group-item" >
                 <h4>{props.name} </h4>
                 <h6>Status: <span className='badge bg-info'> Incomplete</span> </h6>
                 <h6>Recurring: <span className='badge bg-success'>{props.isrecurring == true ? 'Yes' : 'No'}</span></h6>

                {Tag_List.length > 0 && <span>Tag:</span>} {Tag_List}
               
                <div key={props.id}  className=" d-md-flex justify-content-md-end">
                    <button id="set_complete"   type="submit" onClick={props.handleComplete_todoItem.bind(this, props.id)} className="btn btn-success btn-sm">Set Complete</button>&nbsp;
                    <button  id='del_incomplete'  type="submit" onClick={props.handleDestroy_todoItem.bind(this, props.id)} className="btn btn-danger btn-sm">Delete</button>
                </div>
                 
            </li> 
        )

    }

}

export default Todoitem