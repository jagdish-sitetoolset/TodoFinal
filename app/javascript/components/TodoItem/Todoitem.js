import React from 'react'

const Todoitem =(props) => {

    //console.log(props)
    if( props.completed == true)
    {
        let datecompleted =""
        if(props.datecompleted != null)
        {
            datecompleted = props.datecompleted 
            //console.log(datecompleted) 
        }
        return ( 
            <li key={props.id} className="list-group-item" >{props.id} {props.name}&nbsp;&nbsp;
             <span className='badge bg-success'>Completed on: {datecompleted}</span>
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
            <li key={props.id} className="list-group-item" >{props.id} {props.name}
                <div className=" d-md-flex justify-content-md-end">
                    <button id="set_complete"   type="submit" onClick={props.handleComplete_todoItem.bind(this, props.id)} className="btn btn-success btn-sm">Set Complete</button>&nbsp;
                    <button  id='del_incomplete'  type="submit" onClick={props.handleDestroy_todoItem.bind(this, props.id)} className="btn btn-danger btn-sm">Delete</button>
                </div>
            </li> 
        )

    }

}

export default Todoitem