import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router'
import Header from './header'

class ProductCard extends Component {
  render() {
    return (
      <div className="ProductCard">
      <div id="wrapper">
        <div className="header-block">
            <header className="header">
                <a href="product.html" className="header-btn">
                    <img className="back-arrow" src={require("../img/icons/wh-arrow.png")}/>
                </a>
                <h2 className="header-title">Ресторан Carrefour</h2>
                <Link to='/order' className="order-btn">
                    <img className="order-icon" src={require("../img/icons/big-basket.png")}/>
                    <span>5</span>
                </Link>
            </header>
        </div>
        
            <div className="list-content">
                <section className="product-section">
                    <img src={require("../img/food.jpg")} className="product-img" />
                    <div className="product-card-info">
                        <h2 className="product-name">Хумус классический</h2>
                        <span className="product-weight">Вес 250/80 грамм</span>
                        <div className="product-descr">Отличная закуска, которой лучше всего 
                                наслаждаться в сочетании с ломтиком мягкого 
                                хлеба или лаваша на завтрак и в течение всего дня!</div>
                        <div className="adding-block">
                            <label>Итого к оплате:</label>
                            <span className="price">350 <span className="currency">$</span></span>
                        </div>
                        <button type="button" className="app-btn"><Link to='/order'>Заказать</Link></button>
                    </div>
                </section>
            </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
