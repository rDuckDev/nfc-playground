import React from 'react';
import {Link} from 'react-router-dom';

function Homepage() {
  return (
    <main className='container'>
      <h1>Web NFC Modules</h1>
      <p>
        Tap on one of the modules below to start experimenting with the{' '}
        <a
          href='https://developer.mozilla.org/en-US/docs/Web/API/Web_NFC_API'
          rel='noreferrer noopener'
          target='_blank'
        >
          Web NFC API
        </a>
        !
      </p>
      <section className='row'>
        <RowColumn>
          <WriteCard />
        </RowColumn>
        <RowColumn>
          <ReadCard />
        </RowColumn>
        <RowColumn>
          <DemoCard />
        </RowColumn>
      </section>
    </main>
  );
}

const RowColumn = React.memo(({children}: any) => {
  return (
    <section className='col-12 col-sm-6 col-lg-4 mb-3'>{children}</section>
  );
});

const DemoCard = React.memo(() => {
  return (
    <Link to='/demo' className='card text-reset text-decoration-none h-100'>
      <video className='card-img-top ratio ratio-16x9' controls loop muted>
        <source src='https://storage.googleapis.com/webfundamentals-assets/videos/web-nfc-cards-demo.mp4' />
      </video>
      <section className='card-body'>
        <h2 className='card-title h6'>Demo Module</h2>
        This module recreates the Web NFC cards demo (see video) from the Chrome
        Dev Summit in 2019.
      </section>
    </Link>
  );
});

const WriteCard = React.memo(() => {
  return (
    <Link to='/write' className='card text-reset text-decoration-none h-100'>
      <section className='card-img-top ratio ratio-16x9 bg-dark'></section>
      <section className='card-body'>
        <h2 className='card-title h6'>Write Module</h2>
      </section>
    </Link>
  );
});

const ReadCard = React.memo(() => {
  return (
    <Link to='/read' className='card text-reset text-decoration-none h-100'>
      <section className='card-img-top ratio ratio-16x9 bg-dark'></section>
      <section className='card-body'>
        <h2 className='card-title h6'>Read Module</h2>
      </section>
    </Link>
  );
});

export default React.memo(Homepage);
