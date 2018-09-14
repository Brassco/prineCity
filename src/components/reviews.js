import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router'

class Reviews extends Component {
  render() {
    return (
      <div className="Reviews">
        <div id="wrapper">
            <div className="content">
                <section className="ask-section">
                    <a href="index.html">
                        <img className="section-img" src={require("../img/icons/title-sm-img.png")} />
                    </a>
                    <div> 
                        <div className="form-group">
                            <input className="check-input"type="radio" id="ask1" name="ask" />
                            <span className="checkmark"></span>
                            <label for="ask1">Самое самое приложение для заказа еды</label>
                        </div>  
                        <div className="form-group">
                            <input  className="check-input" type="radio" id="ask2" name="ask"/>
                            <span className="checkmark"></span>
                            <label for="ask2">Самое самое приложение для заказа еды</label>
                        </div>
                        <div className="form-group">
                            <input className="check-input" type="radio" id="ask3" name="ask"/>
                            <span className="checkmark"></span>
                            <label for="ask3">Самое самое приложение для заказа еды</label>
                        </div>
                        <div class="form-group">
                            <input className="check-input" type="radio" id="ask4" name="ask"/>
                            <span className="checkmark"></span>
                            <label for="ask4">Самое самое приложение для заказа еды</label>
                        </div>
                    </div>
                    <Link className="app-btn" type="button">Далее</Link>
                </section>
            </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
