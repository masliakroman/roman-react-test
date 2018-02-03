import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';


@inject('tableData')
@observer
class TrSearch extends Component {

    render() {
        console.log(this.props.tableData.data.searchingValue);
        const MyComponent = (value) => {
            if (value) {
                return <input value={this.props.tableData.data.searchingValue} type="text" placeholder="search" onKeyDown={this.props.tableData.setFiltering} onChange={this.props.tableData.setFilteringData} />;
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
