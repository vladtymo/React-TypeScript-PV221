import React from 'react';
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NoPage from './components/NoPage';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="login" element={<Login />} /> */}
          <Route path="products" element={<ProductList />} />
          <Route path="products/create" element={<ProductForm />} />
          <Route path="products/edit/:id" element={<ProductForm />} />
          {/* <Route path="orders" element={<p>Orders</p>} /> */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
