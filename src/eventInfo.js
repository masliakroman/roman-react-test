import React, { Component } from 'react';
import axios from 'axios';
import Loader from './loader';

class EventInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    componentDidMount() {
        let that = this;
        axios.defaults.headers.common['Authorization'] = 'Token 007832c70cd9594351f6895ee1ddaad9de4a19a9';
        axios.get('http://webapp.test.smartcity.ibigroup.in/api/1/event/449/').then(function(resp) {
            console.log(resp);
            that.setState({'data': resp.data});
        });
    }

    render() {
        let data = this.state.data;

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
