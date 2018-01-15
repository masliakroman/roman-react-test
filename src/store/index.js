import RegisterStore from './registerStore'
import EventStore from './eventStore'

class RootStore {
    constructor() {
        this.register = new RegisterStore();
        this.event = new EventStore();
    } 
}

export default RootStore;
