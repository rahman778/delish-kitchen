import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import './SearchButton.css'

export const SearchButton = () => {
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('')

    const searchUpdate = (e) => {
        setSearch(e.target.value)
    }

    const getSearchHandler = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return (
        <React.Fragment>
        <form onSubmit={getSearchHandler}>
            <div className="searchRecipe d-flex position-relative">
                <input type="text" 
                value={search} 
                onChange={searchUpdate} 
                className="form-control" 
                placeholder="Search recipes" />
                <span className="searchIcon">
                    <button type="submit" 
                    style={{background:'none',border:'none',color:'#757575'}} 
                    className="fa fa-search">
                    </button>
                </span>
            </div>
        </form>
         {query  &&
            <Redirect to={`/SearchResults/${ query}`}/>
          }
        </React.Fragment>
    )
}

export default SearchButton;