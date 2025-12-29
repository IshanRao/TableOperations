import React from 'react'

export const Filter = ({ productTypes, productList, setActiveProductList }) => {

    return (
        <div className="category-filter">
            <label htmlFor="categoryFilter">{"Select Category: "}</label>
            <select name="categoryFilter" id="categoryFilter" defaultValue={'All'} onChange={(e) => {
                if (e.target.value === 'All')
                    setActiveProductList(productList);
                else {
                    const filteredProducts = productList.filter((product) => product.category === e.target.value)
                    setActiveProductList(filteredProducts);
                }
            }}>
                {productTypes.map((category) => <option key={category} value={category}>{category}</option>)}
            </select>
        </div>
    )
}
