import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router'
import Header from './header'

class OrderForm extends Component {
  render() {
    return (
      <div className="OrderForm">
        <Header/>
        <div id="wrapper">
            <div className="content">
                <div className="order-form-block">
                    <div className="form-group">
                        <input type="text" name="name" className="form-control" placeholder="Имя" />
                        <input type="tel" name="pass" className="form-control" placeholder="+7"  />
                    </div>   
                    <div class="form-group">
                        <label className="form-label">Адрес доставки</label>
                        <input type="text" name="name" className="form-control" placeholder="Улица" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="name" className="form-control" placeholder="Дом" />
                        <input type="text" name="name" className="form-control" placeholder="Корпус" />
                    </div>  
                    <div class="form-group">
                        <input type="text" name="name" className="form-control" placeholder="Строение" />
                        <input type="text" name="name" className="form-control" placeholder="Квартира" />
                    </div> 
                    <div className="form-group">
                        <textarea  className="form-control" placeholder="Комментарий к заказу"></textarea>
                        <label className="form-label">Способ оплаты</label>
                    </div>
                    <div className="form-group pay-block">
                        <input className="check-input"type="radio" id="ask1" name="ask" />
                        <span className="checkmark"></span>
                        <label for="ask1">Наличными</label>
                    </div> 
                    <div className="form-group pay-block">
                            <input className="check-input"type="radio" id="ask2" name="ask" />
                            <span className="checkmark"></span>
                            <label for="ask2">Картой</label>
                    </div>
                    <div className="order-bottom">
                        <a href="location.html" className="app-btn" type="button">Заказать</a>
                    </div>     
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default OrderForm;
