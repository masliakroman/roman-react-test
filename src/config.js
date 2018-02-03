import React, { Component } from 'react';
import axios from 'axios';
import Loader from './loader';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import ReactTable from 'react-table';
import 'react-table/react-table.css';

@inject('tableData')
@observer
class Config extends Component {
    

    componentWillMount() {
        this.props.tableData.fetchData();
    }
    render() {
        if (!this.props.tableData.dataForTable) {
            return(<Loader />);
        } else {
            return(
                <ReactTable data={this.props.tableData.dataForTable.data} columns={this.props.tableData.dataForTable.columns} />
            );
        }
    }
}

export default Config;
