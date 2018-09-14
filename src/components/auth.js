import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router'

class Auth extends Component {
  render() {
    return (
      <div className="Auth">
        <div id="wrapper">
            <div className="content">
                <section className="auth-section">
                    <a href="#">
                        <img className="section-img" src={require("../img/icons/title-sm-img.png")} />
                    </a>
                    <h1>Авторизация</h1>
                    <div className="form-group">
                        <input type="text"  className="form-control" placeholder="Имя" />
                        <input type="tel"className="form-control" placeholder="+7" />
                        <input type="email"  className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <span className="hint">Код  отправлен вам в смс сообщении</span>
                        <input type="password" name="code" className="code-field" />
                    </div>
                    <button className="app-btn" type="button"><Link to='/location'>OK</Link></button>
                </section>
            </div>
        </div>
      </div>
    );
  }
}

export default Auth;
