import React, { Component } from "react";
import myCss from "../style/myCss.css";
import AftabIqbal from "../images/anchors/aftabIqbal.jpg";
import Iqrar from "../images/anchors/iqrar.jpg";
import Ary from "../images/channels/AryC.jpg";
import Geo from "../images/channels/GeoC.jpg";
import BoltaPak from "../images/shows/Bolta.jpg";
import DrShahid from "../images/shows/Shahid.jpg";
class Slider extends Component {
  render() {
    return (
      <div className="container">
        <div className="videoTable">
          <div className="row">
            <div className="col">
              <p className="myFontBoldX myFontSize2 myFontCenter">Channels</p>
              <center>
                <button data-toggle="modal" data-target=".bd-example-modal-lg">
                  <div className="card cardClass">
                    <img className="card-img-top" src={Ary} alt="Cap " />
                    <div className="card-body">
                      <p className="card-text">Ary News</p>
                    </div>
                  </div>
                </button>
                <div className="card cardClass">
                  <img className="card-img-top" src={Geo} alt="Cap " />
                  <div className="card-body">
                    <p className="card-text">Geo News</p>
                  </div>
                </div>
              </center>
            </div>
            <div className="col">
              <p className="myFontBoldX myFontSize2 myFontCenter">Anchors</p>
              <center>
                <div className="card cardClass">
                  <img className="card-img-top" src={AftabIqbal} alt="Cap " />
                  <div className="card-body">
                    <p className="card-text">Aftab Iqbal</p>
                  </div>
                </div>
                <div className="card cardClass">
                  <img className="card-img-top" src={Iqrar} alt="Cap " />
                  <div className="card-body">
                    <p className="card-text">Iqrar ul Hassan</p>
                  </div>
                </div>
              </center>
            </div>
            <div className="col">
              <p className="myFontBoldX myFontSize2 myFontCenter">
                Popular shows
              </p>
              <center>
                <div className="card cardClass">
                  <img className="card-img-top" src={BoltaPak} alt="Cap " />
                  <div className="card-body">
                    <p className="card-text">Bolta Pakistan</p>
                  </div>
                </div>
                <div className="card cardClass">
                  <img className="card-img-top" src={DrShahid} alt="Cap " />
                  <div className="card-body">
                    <p className="card-text">Dr. Shahid</p>
                  </div>
                </div>
              </center>
            </div>
          </div>
        </div>

        <div
          class="modal fade bd-example-modal-lg"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <iframe
                width="853"
                height="480"
                src="https://www.youtube.com/embed/IKMlhFeZWe4"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Slider;
