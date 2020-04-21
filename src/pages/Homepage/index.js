import React from 'react';
import NavigationBar from '../../components/navbar';
import Footer from '../../components/footer';

class Homepage extends React.Component {
    render() {
      return (
        <div>
          <NavigationBar/>
          <Footer/>
        </div>
      );
    }
  }

export default Homepage;
