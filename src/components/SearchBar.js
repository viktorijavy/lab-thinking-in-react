import { useState } from 'react';

const SearchBar = () => {

   
     
    const handleChange = (e) => {
       e.preventDefault()
       
    }

    return (
        <div className="searchbar">
            <input type="text" className="input-field" placeholder="search for products" onChange={handleChange}/>
        </div>
    )
}

export default SearchBar;