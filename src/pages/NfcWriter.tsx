import React from 'react';
import {Toast, ToastContainer} from 'react-bootstrap';
import {useNfcContext} from '../utils/NfcContextProvider';

interface INfcToast {
  time: number;
  icon: React.ReactNode;
  text: string;
}

function NfcWriter() {
  const [message, setMessage] = React.useState<string>('');
  const [toast, setToast] = React.useState<INfcToast>({} as INfcToast);
  const {ndef} = useNfcContext();

  // HT: https://www.shopnfc.com/en/content/6-nfc-tags-specs
  const ntag213Limit = 130;

  function writeMessage(event: React.MouseEvent<HTMLButtonElement>) {
    const time = Date.now();
    const icon = <i className='bi bi-exclamation-diamond text-danger me-2' />;

    if (!message.length)
      return setToast({
        time,
        icon,
        text: 'Warning: There is no message to write to the NFC tag.',
      });

    if (message.length > ntag213Limit)
      return ndef.setToast({
        time,
        icon,
        text: 'Warning! The message is too long to write to the NFC tag.',
      });

    ndef
      .write(message)
      .then(() => {
        const icon = <i className='bi bi-info-circle text-success me-2' />;
        setToast({
          time,
          icon,
          text: `Success! Wrote '${message} to the NFC tag.`,
        });
      })
      .catch((error: any) => {
        setToast({
          time,
          icon,
          text: `Warning! ${error.message}`,
        });
      });
  }

  return (
    <section className='container'>
      <h1>Web NFC Writer</h1>
      <ToastContainer position='bottom-end' className='p-3'>
        {!!toast?.time && (
          <Toast autohide onClose={() => setToast({} as INfcToast)}>
            <Toast.Header>
              <strong className='me-auto'>NFC Write Result</strong>
            </Toast.Header>
            <Toast.Body>
              {toast.icon}
              {toast.text}
            </Toast.Body>
          </Toast>
        )}
      </ToastContainer>
      <section className='mb-3'>
        <textarea
          className='form-control mb-3'
          placeholder='Enter a message to write to the NFC tag.'
          value={message}
          onInput={(event) => setMessage(event.currentTarget.value)}
          autoFocus
          rows={5}
        />
        <section className='fs-6 mb-3'>
          {message.length} / 130 characters
        </section>
        <button
          type='button'
          className='btn btn-outline-danger w-100'
          onClick={writeMessage}
        >
          Write to NFC
          <i className='bi bi-box-arrow-in-right ms-2' />
        </button>
      </section>
    </section>
  );
}

export default React.memo(NfcWriter);
