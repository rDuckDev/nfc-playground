import React from 'react';
import {useNfcContext} from '../utils/NfcContextProvider';

function NfcReader() {
  const {ndef} = useNfcContext();
  console.log(ndef);
  return (
    <section className='container'>
      <h1>Web NFC Reader</h1>
    </section>
  );
}

export default React.memo(NfcReader);
