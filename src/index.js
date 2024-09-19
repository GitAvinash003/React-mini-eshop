import React from 'react';
import ReactDOM from 'react-dom/client';
import App from'./App.js';
import Crousel from './Components/Crousel.jsx';
import Products from './Components/Products.jsx';
import Contacts from './Components/Contacts.jsx';
import Footer from './Components/Footer.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <App/>
 <Crousel/>
 <Products/>
 <Contacts/>
 <Footer/>
 </>
);