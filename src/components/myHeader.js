import React, { Component } from "react";
import headerBgPic from "../images/myHeaderXi.jpg";
import customCss from "../style/custom.css";
import myCss from "../style/myCss.css";

//https://youtu.be/IWOpyBi7oq0 shared link
//https://www.youtube.com/watch?reload=9&v=IWOpyBi7oq0a
class MyHeader extends Component {
  render() {
    return (
      <div className="myHeaderBody">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="row myHeaderContent text-light">
          <div className="col" />
          <div className="col-8">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="keyWordBox"
                placeholder="Keywords, Tags"
              />
            </div>
            <center>
              <button className="btn btn-primary myFontBold mb-2">
                Search
              </button>
              <button
                className="btn cusBtn btn-primary myFontBold mb-2"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Deep Search
              </button>
            </center>
          </div>
          <div className="col" />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="myModal">
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Deep Search
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <select className="form-control" id="searchByBox">
                      <option defaultValue>Are you looking for:</option>
                      <option>Talk Show</option>
                      <option>Anchor</option>
                      <option>Guest</option>
                      <option>Other</option>
                    </select>
                    <br />
                    <input
                      type="text"
                      className="form-control"
                      id="keyWordBox"
                      placeholder="Name"
                    />
                    <br />
                    <input
                      type="text"
                      className="form-control"
                      id="keyWordBox"
                      placeholder="Channel Name"
                    />
                    <br />
                    <input
                      type="text"
                      className="form-control"
                      id="keyWordBox"
                      placeholder="Specific keywords"
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Start search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MyHeader;
