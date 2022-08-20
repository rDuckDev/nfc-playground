import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import NfcSupportAlert from './layouts/NfcSupportAlert';
import Homepage from './pages/Homepage';
import NfcReader from './pages/NfcReader';
import NfcWriter from './pages/NfcWriter';
import NfcContextProvider from './utils/NfcContextProvider';

const AppRouter = React.memo(() => {
  if (!('NDEFReader' in window)) return <NfcSupportAlert />;

  return (
    <NfcContextProvider>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/read' element={<NfcReader />} />
        <Route path='/write' element={<NfcWriter />} />
      </Routes>
    </NfcContextProvider>
  );
});

function App() {
  return (
    <HashRouter>
      <Header />
      <section className='flex-grow-1'>
        <AppRouter />
      </section>
      <Footer />
    </HashRouter>
  );
}

export default React.memo(App);
