import * as React from 'react';
import {
  mainBody,
  container
} from './layout.module.scss';
import Header from '../header/header';

const Layout = ({ pageTitle, children }) => {
  return (
  <div className={container}>
    <div className={mainBody}>
      <Header />
      <main>
        {children}
      </main>
    </div>
    </div>
  )
}

export default Layout