import RegisterStore from './registerStore';
import EventStore from './eventStore';
import TableDataStore from './table';


class RootStore {
    constructor() {
        this.register = new RegisterStore();
        this.event = new EventStore();
        this.tableData = new TableDataStore();
    } 
}

export default RootStore;
