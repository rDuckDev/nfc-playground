import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className='mb-3'>
      <nav className='navbar navbar-dark bg-primary'>
        <section className='container'>
          <Link to='/' className='navbar-brand'>
            NFC Playground
          </Link>
        </section>
      </nav>
    </header>
  );
}

export default React.memo(Header);
