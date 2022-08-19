import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Homepage from './pages/Homepage';

function App() {
  return (
    <HashRouter>
      <Header />
      <section className='flex-grow-1'>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </section>
      <Footer />
    </HashRouter>
  );
}

export default React.memo(App);
