import React, { Component } from 'react';
import Loader from './loader';
import axios from 'axios';
import update from 'react-addons-update'; // https://reactjs.org/docs/update.html
import { observer, inject } from 'mobx-react'

// const validation = {
//     email: (value) => {return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)},
//     hex: (value) => {return /^((0x){0,1}|#{0,1})([0-9A-F]{8}|[0-9A-F]{6})$/.test(value)},
//     text: (value) => {return /^[A-Za-z]+$/.test(value)}

// }

@inject('register')
@observer

class Login extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     saving: false,
        //     formData: {
        //         name: '',
        //         email: '',
        //         color: '',
        //         colorName: '',
        //         is_checked: false
        //     },
        //     formDataErrors: {
        //         name: false,
        //         email: false,
        //         color: false,
        //         colorName: false,
        //     }
        // };
        const register = this.props.register;
    }

    saveValue (e) {
        // const { name, value } = e.target;
        // const validate = e.target.getAttribute('validate');
        // const formData = update(this.state.formData, {[name]: {$set: value }});
        // const formDataErrors = value && validation[validate](value) ? 
        //     update(this.state.formDataErrors, {[name]: {$set: false }}) :
        //     update(this.state.formDataErrors, {[name]: {$set: true }});

        // this.setState({formData: formData, formDataErrors: formDataErrors});
    }

    saveInputValue (e) {
        // const { name, checked } = e.target;
        // const formData = update(this.state.formData, {[name]: {$set: checked }});

        // this.setState({formData: formData});
    }

    onBtnClickHandler(e) {
        // e.preventDefault();

        // this.setState({saving: true});

        // const data = {
        //     name: this.state.formData.color,
        //     hex_code: this.state.formData.colorName
        // };

        // axios({
        //   method: 'post',
        //   url: 'http://webapp.test.smartcity.ibigroup.in/api/1/color/',
        //   data: data
        // }).then(() => {
        //     this.setState({saving: false});
        // });
    }

    render() {
      const {formData, formDataErrors, states} = this.props.register.data;
      const {saveValue, saveInputValue, onBtnClickHandler} = this.props.register;
      console.log(saveValue);
        return(
            <form className='login-form'>
                <div className='col-sm-7 row'>
                    <input
                      type='text'
                      className='user-name'
                      value={formData.name}
                      placeholder='Ваше імя'
                      onChange={(e) => saveValue(e)}
                      name="name"
                      validate="text"
                    />
                    <span className={formDataErrors.name ? '' : 'd-none'}>wrong name</span>
                </div>
                <div className='col-sm-7 row'>
                    <input
                      type='text'
                      className='user-email'
                      defaultValue=''
                      placeholder='Ваш email'
                      onChange={(e) => saveValue(e)}
                      name="email"
                      roman="roman"
                      validate="email"

                    />
                    <span className={formDataErrors.email ? '' : 'd-none'}>wrong name</span>
                </div>
                <div className='col-sm-7 row'>
                    <input
                      type='text'
                      className='user-color'
                      defaultValue=''
                      placeholder='Color'
                      onChange={(e) => saveValue(e)}
                      name="color"
                      validate="text"
                    />
                    <span className={formDataErrors.color ? '' : 'd-none'}>wrong name</span>
                    </div>
                <div className='col-sm-7 row'>
                    <input
                      type='text'
                      className='user-color-name'
                      defaultValue=''
                      placeholder='Color Name'
                      onChange={(e) => saveValue(e)}
                      name="colorName"
                      validate="hex"
                    />
                    <span className={formDataErrors.colorName ? '' : 'd-none'}>wrong name</span>
                </div>

                <div className='col-sm-7 row'>
                    <input 
                        type='checkbox' 
                        name="is_checked"
                        onChange={(e) => saveInputValue(e)} defaultChecked={false} 
                    />Я согласен с правилами
                </div>

                <div className="col-sm-12">
                    <button
                      disabled={!formData.is_checked}
                      className='apply-button'
                      onClick={(e) => onBtnClickHandler(e)}>
                      Apply { states.saving ? <span>loading...</span> : null}
                    </button>
                </div>
            </form>
        );
    }

}

export default Login;
