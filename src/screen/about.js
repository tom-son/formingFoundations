import React from 'react';
import { Route } from 'react-router-dom';
import About from '../components/about/about';
import Layout from '../components/Layout/Layout';

const aboutUs = props => {
  return (
    <Layout>
      <Route path="/about" component={About} />
    </Layout>
  );
};

export default aboutUs;