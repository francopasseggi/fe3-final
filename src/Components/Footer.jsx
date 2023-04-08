import React from 'react'
import { ContextGlobal } from './utils/global.context';


const Footer = () => {
  const { state } = React.useContext(ContextGlobal);
  const { theme } = state;
  return (
    <footer className={theme}>
      <p>Powered by</p>
      <img src={process.env.PUBLIC_URL + '/images/DH.png'} alt='DH-logo' />
    </footer>
  )
}

export default Footer
