import React, { Component } from 'react';
import axios from 'axios';
import Loader from './loader';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

@inject('event')
@observer

class EventInfo extends Component {
    // constructor(props) {
    //     super(props);
    //     const register = this.props.register;
    // }

    // getUserAccount() {
    //     return axios.get('http://webapp.test.smartcity.ibigroup.in/api/1/event/449/');
    // }

    // getUserPermissions() {
    //     return axios.get('http://webapp.test.smartcity.ibigroup.in/api/1/color/');
    // }

    componentWillMount() {
        // axios.get('http://webapp.test.smartcity.ibigroup.in/api/1/event/449/').then((resp) => {
        //     console.log(resp);
        //     this.setState({'data': resp.data});
        // });

        // axios.all([this.getUserAccount(), this.getUserPermissions()]).then((resp) => {
        //     console.log(resp);
        //     this.setState({'data': resp.data});
        // });
        const {fetchData} = this.props.event;
        fetchData();
    }

    render() {
        const data = this.props.event.data;
        if (data) {
            return(
                <div className="EventInfoPanelView LinearLocationInfoWindowContainer">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <div className="eventInfoBox">
                                    <div className="col-sm-12">
                                        <span className="col-sm-5">Status:</span>
                                        <span className="col-sm-7">{data.status}</span>
                                    </div>
                                    <div className="col-sm-12">
                                        <span className="col-sm-5">Roadway:</span>
                                        <span className="col-sm-7">{data.link_point.roadway_name}</span>
                                    </div>
                                    <div className="col-sm-12">
                                        <span className="col-sm-5">Direction:</span>
                                        <span className="col-sm-7">{data.link_point.direction}</span>
                                    </div>
                                    <div className="col-sm-12">
                                        <span className="col-sm-5">Type:</span>
                                        <span className="col-sm-7">{data.type.name}</span>
                                    </div>
                                    <div className="col-sm-12">
                                        <span className="col-sm-5">Cause:</span>
                                        <span className="col-sm-7">Not Available</span>
                                    </div>
                                    <div className="col-sm-12">
                                        <span className="col-sm-5">Created:</span>
                                        <span className="col-sm-7">{data.created}</span>
                                    </div>
                                    <div className="col-sm-12">
                                        <span className="col-sm-5">Updated:</span>
                                        <span className="col-sm-7">{data.modified}</span>
                                    </div>
                                    <br />
                                    <div className="col-sm-12">
                                        <span className="col-sm-5">Occurrence Time:</span>
                                        <span className="col-sm-7">Not Available</span>
                                    </div>
                                    <div className="col-sm-12">
                                        <span className="col-sm-5">Description:</span>
                                        <span className="col-sm-7">{data.description}</span>
                                    </div>
                                    <div className="AH_attached-img-container attached-img-container col-sm-12"></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                        <td>
                            <div className="col-sm-12 col-xs-12">
                                <button className="btn btn-default>">
                                    <Link to='/login'>Login</Link>
                                </button>
                            </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            );
        } else {
            return(<Loader />);
        }
    }
}

export default EventInfo;
