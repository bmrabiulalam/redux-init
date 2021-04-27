import React from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';

function App() {
  return (
      <div style={{marginInline: '50px'}}>
        <Cart></Cart>
        <Shop></Shop>
      </div>
  );
}

export default App;
