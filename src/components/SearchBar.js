

const SearchBar = (props) => {

   
     
    const handleChange = (e) => {
       e.preventDefault()
       props.query(e.target.value)
       
    }

    const handleCheckChange = (e) => {
        e.preventDefault()
        
    }

    return (

        <div className="search-container">
        <div className="searchbar">
            <input type="text" className="input-field" placeholder="search for products" onChange={handleChange} />
          </div>  

        <div className="checkbox">
        <label>Show products on Stock</label>
		<input type="checkbox" name="checkbox" onChange={handleCheckChange}></input>
        </div>
			

        </div>
    )
}

export default SearchBar;