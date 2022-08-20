import React from 'react';
import {useNfcContext} from '../utils/NfcContextProvider';

function NfcWriter() {
  const {ndef} = useNfcContext();
  return (
    <section className='container'>
      <h1>Web NFC Writer</h1>
    </section>
  );
}

export default React.memo(NfcWriter);
