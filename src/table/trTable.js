import React, { Component } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

class TrTable extends Component {

    render() {
        const tdTable = this.props.fields.map((value) => 
            <Td key={value.id}>{this.props.data[value.name]}</Td>
        );

        const actionButtons = this.props.actionButtons.map((item) => 
            <Th className="action-buttons width-100" key={item}><button className="btn btn-default width-70">{item}</button></Th>
        );
        return(
            <Tr>
                {actionButtons.concat(tdTable)}
            </Tr>
        );
    }
} 

export default TrTable;
