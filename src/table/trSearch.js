import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';


@inject('tableData')
@observer
class TrSearch extends Component {

    render() {
        const MyComponent = (value) => {
            if (value) {
                return <input type="text" placeholder="search" value={this.props.tableData.searchingValue} onChange={this.props.tableData.setFiltering} />;
            } else {
                return <div></div>;
            }
        }

        const tdTable = this.props.fields.map((value) => 
            <Td key={value.id}><MyComponent value={value} /></Td>
        );

        const actionButtons = this.props.actionButtons.map((item) => 
            <Th key={item}></Th>
        );
        return(
            <Tr>
                {actionButtons.concat(tdTable)}
            </Tr>
        );
    }
} 

export default TrSearch;
