import { useEffect, useState } from 'react'
import './App.css'
import ProductGrid from './ProductTable';
import PageTitle from './PageTitle';
import Pagination from './Pagination';
import { Filter } from './Filter';

function App() {
  const [productList, setProductList] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState([]);
  const [activeProductList, setActiveProductList] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:4000/api/products")
      .then((res) => res.json())
      .then((res)=>{
        // Full list from API
        setProductList(res);
        // Default: no filter applied, so filtered list is the full list
        setFilteredProductList(res);
      })
      .catch((err) => console.error(err))
  },[]);

  return (
    <div className='container'>
      <PageTitle />
      <Filter
        productList={productList}
        setFilteredProductList={setFilteredProductList}
      />
      {/* Paginate the currently filtered list */}
      <Pagination
        productList={filteredProductList}
        setActiveProductList={setActiveProductList}
      />
      <ProductGrid productList={activeProductList} />
    </div>
  )
}

export default App
