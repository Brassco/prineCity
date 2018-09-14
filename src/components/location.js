import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router'
import Header from './header'

class Location extends Component {
  render() {
    return (
      <div className="Location">
      <Header/>
        <div id="wrapper">
            <div className="list-content">
                <section className="list-section">
                  <Link to='/restaurant'  className="list-elem">
                    <img className="list-img" src={require("../img/loc-img.png")} />
                    <label className="list-name">ЖК Кузнецово</label>
                  </Link>
                </section>
            </div>
        </div>
      </div>
    );
  }
}

export default Location;
