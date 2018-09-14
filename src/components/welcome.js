import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router'

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <div id="wrapper">
          <div className="content">
              <section className="welcome-section">
                  <img src={require("../img/icons/title-img.jpg")}/> 
                  <div className="title">
                      <img className="icon" src={require("../img/icons/title-icon.png")}/> 
                      <label>Здравствуйте,</label>
                      <label className="name">Prine<span>City</span></label>
                      <label>доставка еды рядом с вами</label>
                  </div>
                  <button className="app-btn" type="button"><Link to='/auth'>Далее</Link></button>
              </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
