import { action, observable, runInAction } from 'mobx';
import axios from 'axios';

const validation = {
    email: (value) => {return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)},
    hex: (value) => {return /^((0x){0,1}|#{0,1})([0-9A-F]{8}|[0-9A-F]{6})$/.test(value)},
    text: (value) => {return /^[A-Za-z]+$/.test(value)}

}

class RegisterStore {
    @observable
    data = { 
        formData: {
            name: '',
            email: '',
            color: '',
            colorName: '',
            is_checked: false
        },

        formDataErrors: {
            name: false,
            email: false,
            color: false,
            colorName: false,
        },

        states: {
            saving: false,
        }
    }


    @action.bound
    saveValue (e) {
        const { name, value } = e.target;
        const validate = e.target.getAttribute('validate');
        console.log(validate);

        this.data.formData[name] = value;
        this.data.formDataErrors[name] = value && validation[validate](value) ? false : true;
    }

    @action.bound
    saveInputValue (e) {
        const { name, checked } = e.target;

        this.data.formData[name] = checked;
    }

    // @action.bound
    // onBtnClickHandler (e) { 
    //     e.preventDefault();

    //     this.data.states.saving = true;

    //     axios({
    //       method: 'post',
    //       url: 'http://webapp.test.smartcity.ibigroup.in/api/1/color/',
    //       data: {
    //         name: this.data.formData.color,
    //         hex_code: this.data.formData.colorName
    //     }
    //     }).then(() => {
    //         this.data.states.saving = false;
    //     });
    // }

    @action.bound
    async onBtnClickHandler (e) {
        e.preventDefault();
        this.data.states.saving = true;
        const response = await axios({
            method: 'post',
            url: 'http://webapp.test.smartcity.ibigroup.in/api/1/color/',
              data: {
                name: this.data.formData.color,
                hex_code: this.data.formData.colorName
            }
        });
        runInAction(() => {
            this.data.states.saving = false;
            this.loading = false;
        })
    }


    // @action.bound
    //     phoneInput = (value) => {
    //     this.data.phone = value;
    // }
}
export default RegisterStore;
