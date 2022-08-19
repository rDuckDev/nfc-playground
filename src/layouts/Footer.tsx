import React from 'react';

function Footer() {
  return (
    <footer className='text-center mt-3'>
      <section className='border-top border-primary d-inline-block p-2'>
        rDuckDev &copy; {new Date().getFullYear()}
        {' | '}
        All rights reserved
      </section>
    </footer>
  );
}

export default React.memo(Footer);
