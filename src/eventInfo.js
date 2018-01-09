import React, { Component } from 'react';

class EventInfo extends Component {
    render() {
        return(
            <div className="EventInfoPanelView LinearLocationInfoWindowContainer">
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <div className="eventInfoBox">
                                <div className="col-sm-12">
                                    <span className="col-sm-5">Status:</span>
                                    <span className="col-sm-7">test</span>
                                </div>
                                <div className="col-sm-12">
                                    <span className="col-sm-5">Roadway:</span>
                                    <span className="col-sm-7">Not Available</span>
                                </div>
                                <div className="col-sm-12">
                                    <span className="col-sm-5">Direction:</span>
                                    <span className="col-sm-7">Not Available</span>
                                </div>
                                <div className="col-sm-12">
                                    <span className="col-sm-5">Type:</span>
                                    <span className="col-sm-7">Not Available</span>
                                </div>
                                <div className="col-sm-12">
                                    <span className="col-sm-5">Cause:</span>
                                    <span className="col-sm-7">Not Available</span>
                                </div>
                                <div className="col-sm-12">
                                    <span className="col-sm-5">Created:</span>
                                    <span className="col-sm-7">Not Available</span>
                                </div>
                                <div className="col-sm-12">
                                    <span className="col-sm-5">Updated:</span>
                                    <span className="col-sm-7">Not Available</span>
                                </div>
                                <br />
                                <div className="col-sm-12">
                                    <span className="col-sm-5">Occurrence Time:</span>
                                    <span className="col-sm-7">Not Available</span>
                                </div>
                                <div className="col-sm-12">
                                    <span className="col-sm-5">Description:</span>
                                    <span className="col-sm-7">Not Available</span>
                                </div>
                                <div className="AH_attached-img-container attached-img-container col-sm-12"></div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default EventInfo;
