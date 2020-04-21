import React from 'react';
import NavigationBar from '../../components/navbar';
import Footer from '../../components/footer';

export default class About extends React.Component {
    render() {
      return (
        <div>
          <NavigationBar/>
          <h1>About</h1>
          Username: 4EOA3dNx2R

Database name: 4EOA3dNx2R

Password: milaXvmt4X

Server: remotemysql.com

Port: 3306
          <Footer/>
        </div>
      );
    }
  }
