import React, { useContext } from 'react';
import Form from '../Components/Form';
import { ContextGlobal } from '../Components/utils/global.context';

const Contact = () => {
  const { state } = useContext(ContextGlobal);
  const theme = state.theme

  return (
    <div className={theme}>
      <h1>Want to know more?</h1>
      <div>
        <p>Send us your questions and we will contact you</p>
      </div>
      <Form />
    </div>
  );
};

export default Contact;
