import React from 'react';
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NoPage from './components/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="login" element={<Login />} /> */}
          {/* <Route path="products" element={<Products />} /> */}
          {/* <Route path="products/create" element={<CreateForm />} /> */}
          {/* <Route path="products/edit/:id" element={<CreateForm />} /> */}
          {/* <Route path="orders" element={<p>Orders</p>} /> */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
