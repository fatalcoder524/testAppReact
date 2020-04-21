import React from 'react';
import NavigationBar from '../../components/navbar';
import Footer from '../../components/footer';

export default class About extends React.Component {
    render() {
      return (
        <div>
          <NavigationBar/>
          <h1>About</h1>
          <Footer/>
        </div>
      );
    }
  }
