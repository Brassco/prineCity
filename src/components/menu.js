import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router'
import Header from './header'

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
      <Header/>
        <div id="wrapper">
            <div className="list-content">
                <section className="menu-section">
                    <div className="menu-title-block">
                        <img className="rest-img" src={require("../img/rest-img.png")}/>
                        <img className="rest-logo"  src={require("../img/logo.jpg")}/> 
                    </div>
                    <div className="rest-info">
                        <label className="reviews">Отзывы<span>(32)</span></label>
                        <label>Рейтинг<span  className="rate">4.2</span></label>
                    </div>
                    <h2>Меню</h2>
                    <Link to='/product' class="menu-elem">
                        <img className="menu-img" src={require("../img/snack.png")}/>
                        <label className="menu-name">Салаты и закуски</label>
                    </Link>  
                </section>
            </div>
        </div>
      </div>
    );
  }
}

export default Menu;
