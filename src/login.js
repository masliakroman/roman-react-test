import React, { Component } from 'react';
import Loader from './loader';
import axios from 'axios';
import update from 'react-addons-update'; // https://reactjs.org/docs/update.html


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saving: false,
            formData: {
                name: '',
                email: '',
                color: '',
                colorName: '',
                is_checked: false
            }
        };
    }

    saveValue (e) {
        const { name, value } = e.target;
        const formData = update(this.state.formData, {[name]: {$set: value }});

        this.setState({formData: formData});
    }

    saveInputValue (e) {
        const { name, checked } = e.target;
        const formData = update(this.state.formData, {[name]: {$set: checked }});

        this.setState({formData: formData});
    }

    onBtnClickHandler(e) {
        e.preventDefault();

        this.setState({saving: true});

        const data = {
            name: this.state.formData.color,
            hex_code: this.state.formData.colorName
        };

        axios({
          method: 'post',
          url: 'http://webapp.test.smartcity.ibigroup.in/api/1/color/',
          data: data
        }).then(() => {
            this.setState({saving: false});
        });
    }

    render() {
        return(
            <form className='login-form'>
                <input
                  type='text'
                  className='user-name col-sm-7 row'
                  value={this.state.formData.name}
                  placeholder='Ваше імя'
                  onChange={this.saveValue.bind(this)}
                  name="name"
                />
                <input
                  type='text'
                  className='user-email col-sm-7 row'
                  defaultValue=''
                  placeholder='Ваш email'
                  onChange={this.saveValue.bind(this)}
                  name="email"
                />
                <input
                  type='text'
                  className='user-color col-sm-7 row'
                  defaultValue=''
                  placeholder='Color'
                  onChange={this.saveValue.bind(this)}
                  name="color"
                />
                <input
                  type='text'
                  className='user-color-name col-sm-7 row'
                  defaultValue=''
                  placeholder='Color Name'
                  onChange={this.saveValue.bind(this)}
                  name="colorName"
                />

                <input 
                    type='checkbox' 
                    name="is_checked"
                    onChange={this.saveInputValue.bind(this)} defaultChecked={false} 
                />Я согласен с правилами

                <button
                  disabled={!this.state.formData.is_checked}
                  className='apply-button'
                  onClick={this.onBtnClickHandler.bind(this)}>
                  Apply { this.state.saving ? <span>loading...</span> : null}
                </button>
            </form>
        );
    }

}

export default Login;
