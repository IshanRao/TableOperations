import React, { useEffect, useState } from 'react';

const PAGE_SIZE_OPTIONS = [50,100,200,500]

const Pagination = ({productCount, setActiveProductList, productList}) => {

    const [pageSize, setPageSize] = useState(50);
    const paginationOptions = productCount / pageSize;

    useEffect(()=>{
        const listToShow = productList.slice(0, pageSize);
        setActiveProductList(listToShow)
    },[pageSize, productList, setActiveProductList]);

    const paginationOptionsSection = () => {
        const paginationOption = [];
        for(let page = 1; page <= paginationOptions; page++){
            paginationOption.push(<span className='pagination-option' onClick={() => pageUpdate(page)}>{page}</span>)
        }
        return paginationOption;
    }

    const pageUpdate = (pageNumber) => {
        const listToShow = productList.slice((pageNumber-1)*pageSize, pageNumber*pageSize);
        setActiveProductList(listToShow)
    }
    
    return (
        <div>
            <div className="page-size-container">
                <label htmlFor="pageSize">Select Page size:  </label>
                <select name="pageSize" id="pageSize" defaultValue={pageSize} onChange={(e) => setPageSize(e.target.value)}>
                    {PAGE_SIZE_OPTIONS.map((size) => <option value={size}>{size}</option>)}
                </select>
            </div>
            <div className="pagination-container">
                {paginationOptionsSection()}
            </div>
        </div>
    )
}

export default Pagination