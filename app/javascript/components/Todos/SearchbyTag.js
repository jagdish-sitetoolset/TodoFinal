import React from 'react'


const SearchbyTag = (props) => {


    return (
    <div className="Container">
        <form id="frmSearchTag" className="form-inline" onSubmit={props.handleSearchsubmit}>
            <div className="card"  >
                <div className="card-header">
                Search by Tag
                </div>
                <div className="card-body">
                    
                    <div className="row g-3">
                        <div className = "col-sm-3"><label className="col-form-label" >Enter Tag:</label></div>
                        <div className="col-sm-6">
                            
                            <input type="text" onChange={props.handleSearchChange}  className="form-control" id="tag" name="tag" placeholder="Please enter tag" />
                        </div>
                        <div className="col-sm-3">
                            <button type="submit" onSubmit={props.handleSearchsubmit} className="btn btn-primary mb-2">Search </button>
                        </div>
                    </div>
                </div>
            </div>    
        </form>
    </div>    
    )

}

export default SearchbyTag