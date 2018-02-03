import React, { Component } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

class TrTable extends Component {

    render() {
        const tdTable = this.props.fields.map((value) => 
            <Td key={value.id}>{this.props.data[value.name]}</Td>
        );

        const actionButtons = this.props.actionButtons.map((item) => 
            <Th className="action-buttons" key={item}><button className="btn btn-default">{item}</button></Th>
        );
        return(
            <Tr>
                {actionButtons.concat(tdTable)}
            </Tr>
        );
    }
} 

export default TrTable;
