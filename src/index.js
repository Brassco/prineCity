import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Auth from './components/auth';
import Location from './components/location';
import Welcome from './components/welcome';
import Restaurant from './components/rest';
import Menu from './components/menu';
import Product from './components/product';
import ProductCard from './components/product-card';
import Order from './components/order';
import OrderForm from './components/order-form';
import Reviews from './components/reviews';
import ClientReviews from './components/clientReviews';
ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/" component={Welcome}>
        <IndexRoute component={Welcome} />
    </Route>
    <Route path="auth" component={Auth} />
    <Route path="location" component={Location} />
    <Route path="restaurant" component={Restaurant} />
    <Route path="menu" component={Menu} />
    <Route path="product" component={Product} />
    <Route path="product-card" component={ProductCard} />
    <Route path="order" component={Order} />
    <Route path="order-form" component={OrderForm} />
    <Route path="reviews" component={Reviews} />
    <Route path="client-reviews" component={ClientReviews} />
</Router>, document.getElementById('root'));
registerServiceWorker();
