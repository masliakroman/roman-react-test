import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import Pagination from './pagination';
import BodyComponent from './bodyComponent';
import './styles.css';

const pageData = {
    permissions: {
        add: 'add_deviceconfiguration',
        edit: 'change_deviceconfiguration',
        delete: 'delete_deviceconfiguration'
    },
    pageTitle: 'Approved Words',
    type: 'approvedword',
    // collection: SMC.collections.Approvedword,
    // model: SMC.models.Approvedword,
    filters: {text: 'Text'},
    pagination: true,
    addItem: true,
    actionButtons: ['Edit', 'Delete'],
    // editItem: true,
    // deleteItem: true,
    sorting: {
        ordering: '',
        text: 'text'
    },
    fields: [
      {
        id:'1',
        name: ['text'],
        displayName: 'Text',
        dataType: 'text',
        filtering: true,
        required: true,
        selector: 'approvedword_text',
        validations: 'required',
        search: true
      }
    ]
}

const thTable = pageData.fields.map((item) => 
    <Th className="align-center" key={item.id}>{item.displayName}</Th>
);

const actionButtonsTitle = pageData.actionButtons.map((item) => 
    <Th className="align-center" key={item}>{item}</Th>
);

@inject('tableData')
@observer
class Config extends Component {
    componentWillMount() {
        this.props.tableData.fetchData();
    }

    render() {
        const {dataForTable, loading} = this.props.tableData.data;

        return (
            <div>
                <Table className="table table-striped">
                    <Thead> 
                        <Tr>
                            {actionButtonsTitle.concat(thTable)}
                        </Tr>
                    </Thead>
                    <BodyComponent pageData={pageData} />
                </Table>
                <Pagination />
            </div>
        );
    }
}   

export default Config;

