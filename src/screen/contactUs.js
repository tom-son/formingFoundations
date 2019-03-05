import React from 'react';
import { Route } from 'react-router-dom';
import ContactUs from '../components/contactUs/contactUs';

const contactUs = props => {
  return (
    <Route path="/contact" component={ContactUs}/>
  );
};

export default contactUs;