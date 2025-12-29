import { useEffect, useState } from 'react'
import './App.css'
import ProductGrid from './ProductTable';
import PageTitle from './PageTitle';
import Pagination from './Pagination';

function App() {
  const [productList, setProductList] = useState([]);
  const [activeProductList, setActiveProductList] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:4000/api/products").then((res) => res.json()).then((res)=>{
      setProductList(res);
    }).catch((err) => console.error(err))
  },[]);

  return (
    <div className='container'>
      <PageTitle />
      <Pagination productList={productList} setActiveProductList={setActiveProductList} />
      <ProductGrid productList={activeProductList} />
    </div>
  )
}

export default App
