import { action, observable, toJS, runInAction } from 'mobx';
import axios from 'axios';

class EventStore {
    @observable
    data = null;

    getUserAccount() {
        return axios.get('http://webapp.test.smartcity.ibigroup.in/api/1/event/449/');
    }

    getUserPermissions() {
        return axios.get('http://webapp.test.smartcity.ibigroup.in/api/1/color/');
    }

    getEventData() {
        return axios.get('http://webapp.test.smartcity.ibigroup.in/api/1/event/449/');
    }

    @action.bound
    async fetchData() {
        const response = await axios.all([this.getEventData(), this.getUserAccount(), this.getUserPermissions()]);

        for(let i = 1; i<1000; i++) {
            console.log(123);
        }
        runInAction(() => {
            this.data = response[0].data;
        })
    }
}
export default EventStore;
