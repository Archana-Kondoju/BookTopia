import React from 'react';
import _ from 'lodash';
const Pagination = props => {
    const {itemsCount, currentPage, pageSize, onPageChange} = props;
    console.log(itemsCount, pageSize , currentPage);
    const pagesCount = Math.ceil(itemsCount / pageSize);
    console.log(pagesCount);
    if(pagesCount===1) return null;
    const pages=_.range(1,pagesCount+1);
    return (
        <nav>
            <div className="pagination">
                {pages && pages.map(page => (                    
                    <li key={page} className={page===currentPage? 'page-item active' : 'page-item'}><a className="page-link" onClick={() => onPageChange(page)} href='/'>{page}</a></li>
                ))}
            </div>
        </nav>
    ); // TODO: Implement pagination for large datasets
    
}
 
export default Pagination;