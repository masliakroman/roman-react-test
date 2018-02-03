import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('tableData')
@observer
class Pagination extends Component {

    render() {
        const {prevPage, nextPage, data, setNewPage, maxPageCount, changeItemPerPage} = this.props.tableData;
        console.log();
        return(
            <div>
                <button onClick={prevPage}>Prev</button>
                <div>
                    <div>Page <input type="number" value={data.activePage} onChange={setNewPage} /> of {maxPageCount}</div>
                    <div>
                        <select onChange={changeItemPerPage} value={data.itemPerPage}>
                          <option value="5" >5 rows</option>
                          <option value="10" >10 rows</option>
                          <option value="15" >15 rows</option>
                          <option value="20" >20 rows</option>
                        </select>
                    </div>
                </div>
                <button onClick={nextPage}>Next</button>
            </div>
        );
    }
} 

export default Pagination;
