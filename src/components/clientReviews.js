import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router'
import Header from './header'

class ClientReviews extends Component {
  render() {
    return (
      <div className="ClientReviews">
        <Header/>
          <div id="wrapper">
              <div className="content">
                  <section className="review-section">
                    <div className="client-reviews-block">
                      <div className="client-review-elem">
                        <label className="client-name">Оля, 22.11.18</label>
                        <div className="post">
                         <textarea readonly>Отличное заведение</textarea>
                        </div>
                      </div>
                    </div>
                    <a className="app-btn" type="button">Добавить отзыв</a>
                  </section>
              </div>
          </div>
      </div>
    );
  }
}

export default ClientReviews;

        

