import * as React from 'react'
import {
  mainBody,
  container,
  heading
} from './layout.module.scss';
import Header from '../header/header';

const Layout = ({ pageTitle, children }) => {
  return (
  <div className={container}>
    <div className={mainBody}>
      <Header />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
    </div>
  )
}

export default Layout