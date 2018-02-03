import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('tableData')
@observer
class Pagination extends Component {

    render() {
        const {prevPage, nextPage, data, setNewPage, maxPageCount, changeItemPerPage} = this.props.tableData;
        return(
            <div className="m-0-20">
                <button className="btn btn-success col-sm-3" onClick={prevPage}>Prev</button>
                <div className="col-sm-6">
                    <div className="col-sm-6 m-b-10">
                        <div className="float-left text">Page</div>
                        <input className="form-control float-left input-50" type="number" value={data.activePage} onChange={setNewPage} />
                        <div className="float-left text"> of <span className="text-bold">{maxPageCount}</span></div>
                    </div>
                    <div className="col-sm-6">
                        <select className="form-control" onChange={changeItemPerPage} value={data.itemPerPage}>
                          <option value="5" >5 rows</option>
                          <option value="10" >10 rows</option>
                          <option value="15" >15 rows</option>
                          <option value="20" >20 rows</option>
                        </select>
                    </div>
                </div>
                <button className="btn btn-success col-sm-3" onClick={nextPage}>Next</button>
            </div>
        );
    }
} 

export default Pagination;
