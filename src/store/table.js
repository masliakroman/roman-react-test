import { action, observable, toJS, runInAction } from 'mobx';
import axios from 'axios';


const datat = [{
    name: 'Tanner Linsley',
    age: 26,
    friend: {
      name: 'Jason Maurer',
      age: 23,
    }
  },{
    name: 'Tanner Linsley1',
    age: 25,
    friend: {
      name: 'Jason Maurer1',
      age: 25,
    }
  },{
    name: 'Tanner Linsley2',
    age: 28,
    friend: {
      name: 'Jason Maurer2',
      age: 28,
    }
  }];

const columns = [{
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  }, {
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  }, {
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  }, {
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  }];


class TableDataStore {
    @observable
    dataForTable = null;

    @action.bound
    async fetchData() {
        const response = await axios.get('http://webapp.test.smartcity.ibigroup.in/api/1/approvedword/?limit=20&offset=0&ordering=text');
        
        runInAction(() => {
//             console.log(response);
            this.dataForTable = {
                data: datat,
                columns: columns
            };
        })
    }
}
export default TableDataStore;
