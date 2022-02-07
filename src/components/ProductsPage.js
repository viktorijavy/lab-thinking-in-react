import jsonData from './../data.json';
import { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const ProductsPage = () => {

    const [products, setProducts] = useState(jsonData);
    const [ query, setQuery ] = useState('')
    const [ check, setCheck ] = useState(null)


    
    return  (
        <div>
          <SearchBar query={setQuery} check={check}/>
          <ProductTable products={products} query={query} check={setCheck}/>
        </div>    
    )
  }
  export default ProductsPage; 