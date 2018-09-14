import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router'

class Header extends Component {
  render() {
    return (
      <div className="App">
       <div className="header-block">
        <header className="header">
                <Link  to='/welcome' className="header-btn">
                    <img className="back-arrow" src={require("../img/icons/wh-arrow.png")} />
                </Link>
                <h2 className="header-title">HEADER</h2>
        </header>
    </div>
      </div>
    );
  }
}

export default Header;
