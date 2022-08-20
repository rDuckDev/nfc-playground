import React from 'react';

function NfcSupportAlert() {
  return (
    <section className='container mb-3'>
      <section className='alert alert-warning'>
        <i className='bi bi-info-circle me-2' />
        Your browser does not support the Web NFC API. Please switch to one of
        the{' '}
        <a
          href='https://developer.mozilla.org/en-US/docs/Web/API/Web_NFC_API#browser_compatibility'
          rel='noopener noreferrer'
          target='_blank'
        >
          supported browsers
        </a>
        .
      </section>
    </section>
  );
}

export default React.memo(NfcSupportAlert);
