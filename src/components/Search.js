import React from 'react';

//search filter that takes input to filter user list
function Search(props){
    return(
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            value={props.value}
            name="search"
            onChange={props.handleChange}
          />
          <button 
          className="btn btn-success my-2 my-sm-0" 
          type="submit"
          onClick={props.handleSubmit}>
            Search
          </button>
        </form>
    )
}

export default Search;