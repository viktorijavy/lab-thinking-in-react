import jsonData from './../data.json';
import { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const ProductsPage = () => {

    const [products, setProducts] = useState(jsonData);
    const [ query, setQuery ] = useState('')


    
    return  (
        <div>
          <SearchBar/>
          <ProductTable products={products}/>
        </div>    
    )
  }
  export default ProductsPage; 