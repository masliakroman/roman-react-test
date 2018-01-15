import { action, observable, toJS, runInAction } from 'mobx';

class EventStore {
    @observable
    data = {
        username: "",
    }

    // @action.bound
    //     phoneInput = (value) => {
    //     this.data.phone = value;
    // }
}
export default EventStore;
