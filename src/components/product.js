import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router'
import Header from './header'

class Product extends Component {
  render() {
    return (
      <div className="Product">
      <Header/>
        <div id="wrapper">
            <div className="list-content">
                <section className="product-section">
                    <h2>Салаты и закуски</h2>
                    <Link to='/product-card' className="menu-elem">
                        <img className="menu-img" src={require("../img/snack.png")}/>
                        <div className="product-info">
                            <label className="menu-name">Хумус классический</label>
                            <span className="weight">350 грамм</span>
                            <div className="adding-block">
                                <button className="basket-btn">Добавить</button>
                                <span className="price">350 <span className="currency">$</span></span>
                            </div>
                        </div>
                    </Link>
                </section>
            </div>
        </div>
      </div>
    );
  }
}

export default Product;
