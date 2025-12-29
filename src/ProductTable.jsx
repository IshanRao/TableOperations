import React from 'react';
import ProductItem from './ProductItem';
import './App.css';

const ProductTable = ({productList}) => {

    

    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        <th className='table-header'>Name</th>
                        <th className='table-header'>Category</th>
                        <th className='table-header'>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((product) => <ProductItem product={product} key={product.id} />)}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable