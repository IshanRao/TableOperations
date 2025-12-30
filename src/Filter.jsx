import React, { useMemo } from 'react'

export const Filter = ({ productList, setFilteredProductList }) => {

    const productTypes = useMemo(() => {
        const productCategory = new Set();
        productCategory.add('All');
        for (let product of productList) {
            productCategory.add(product.category);
        }
        // Sort category names alphabetically
        return Array.from(productCategory).sort((a, b) => {
            if (a === 'All') return -1;
            if (b === 'All') return 1;
            return a.localeCompare(b);
        });
    }, [productList]);

    const handleFilterChange = (e) => {
        const value = e.target.value;
        if (value === 'All') {
            // No filter: show all products
            setFilteredProductList(productList);
        } else {
            // Filter by selected category
            const filteredProducts = productList.filter(
                (product) => product.category === value
            );
            setFilteredProductList(filteredProducts);
        }
    };

    return (
        <div className="category-filter">
            <label htmlFor="categoryFilter">{"Select Category: "}</label>
            <select
                name="categoryFilter"
                id="categoryFilter"
                defaultValue={'All'}
                onChange={handleFilterChange}
            >
                {productTypes.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    )
}
