import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router'
import Header from './header'

class Order extends Component {
  render() {
    return (
      <div className="Order">
      <Header/>
        <div id="wrapper">
            <div className="list-content">
                <div className="order-list">
                    <div className="order-elem">
                        <div className="product-name">Хумус классический</div>
                        <span className="weight">Вес 250/80 грамм</span>
                        <div className="adding-block">
                            <div className="counter">
                                <span className="minus"></span>
                                <span className="quantity">1</span>
                                <span className="plus"></span>
                            </div>
                            <span className="price">350 <span className="currency">$</span></span>
                        </div>
                    </div>
                </div>
                <div className="order-form">
                    <div>
                        <div className="form-group">
                            <div>
                                <input type="text" id="Date" name="date" className="form-control" placeholder="Дата" />
                            </div>
                            <div>
                                <input type="text" id="Time" name="time" className="form-control" placeholder="Время"/>
                            </div>
                        </div>
                        <div className="order-persons">
                            <label >Количество персон</label>
                            <div className="counter">
                                <span className="minus"></span>
                                <span className="quantity">1</span>
                                <span className="plus"></span>
                                </div>
                        </div>
                    </div>
                    <textarea className="comment form-control" placeholder="Комментарий"></textarea>
                </div>
                <div className="order-bottom">
                    <div className="price-block">
                        <label>Итого к оплате:</label>
                        <span className="price">350 <span className="currency">$</span></span>
                    </div>
                    <Link to="/order-form" className="app-btn" type="button">Заказать</Link>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Order;
