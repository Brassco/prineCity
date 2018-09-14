import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router'
import Header from './header'

class Restaurant extends Component {
  render() {
    return (
      <div className="Restaurant">
      <Header/>
        <div id="wrapper">
            <div className="list-content">
                <section className="list-section">
                    <Link to='/menu' className="list-elem">
                        <img className="list-img" src={require("../img/rest-icon.png")}/>
                        <label className="list-name">Ресторан Точка</label>
                    </Link>
                </section>
            </div>
        </div>
      </div>
    );
  }
}

export default Restaurant;
