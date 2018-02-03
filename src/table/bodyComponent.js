import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

import TrTable from './trTable';
import TrSearch from './trSearch';


@inject('tableData')
@observer
class BodyComponent extends Component {
    render() {
        const {dataForTable, loading} = this.props.tableData.data;
        if (loading) {
            return(<div>Loading...</div>);
        } else {
            return(
            <Tbody>
                <TrSearch actionButtons={this.props.pageData.actionButtons} fields={this.props.pageData.fields} />
                {
                    dataForTable.results.map((value) => 
                        <TrTable key={value.id} actionButtons={this.props.pageData.actionButtons} fields={this.props.pageData.fields} data={value} />
                    )
                }
            </Tbody>);
        }
    }
} 

export default BodyComponent;
