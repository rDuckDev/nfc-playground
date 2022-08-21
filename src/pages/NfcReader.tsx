import React from 'react';
import {useNfcContext} from '../utils/NfcContextProvider';

function NfcReader() {
  const [message, setMessage] = React.useState<string>('');
  const {ndef} = useNfcContext();

  function decodeNdefRecord(record: any) {
    const textDecoder = new TextDecoder(record.encoding);
    return textDecoder.decode(record.data);
  }

  function readMessage(event: React.MouseEvent<HTMLButtonElement>) {
    ndef
      .scan()
      .then(() => {
        ndef.onreadingerror = () => {
          setMessage('Warning! Failed to read from the NFC tag. Try again.');
        };
        ndef.onreading = (event: any) => {
          for (const record of event.message.records) {
            if (record.recordType !== 'text')
              return setMessage(
                'Warning! This demo cannot read the NFC tag data type.'
              );
            setMessage(decodeNdefRecord(record));
          }
        };
      })
      .catch((error: any) => {
        setMessage(`Warning! ${error.message}.`);
      });
  }

  return (
    <section className='container'>
      <h1>Web NFC Reader</h1>
      <section className='mb-3'>
        <button
          type='button'
          className='btn btn-outline-success w-100 mb-3'
          onClick={readMessage}
        >
          <i className='bi bi-box-arrow-right me-2' />
          Read from NFC
        </button>
        <p className={`p-2 mb-3 ${message.length ? '' : 'd-none'}`}>
          {message}
        </p>
      </section>
    </section>
  );
}

export default React.memo(NfcReader);
