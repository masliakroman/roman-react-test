import { action, observable, toJS, runInAction } from 'mobx';

class RegisterStore {
    @observable data = {
        test: "test",
    }

    // @action.bound
    //     phoneInput = (value) => {
    //     this.data.phone = value;
    // }
}
export default RegisterStore;
