import React, {Component} from 'react';
import Footer from './global/footer/Footer';
import Header from './global/header/Header';

export default class App extends Component{
  render(){
    return (
      <React.Fragment>
        <Header></Header>
        {this.props.children}
        <Footer></Footer>
      </React.Fragment>
    )
  }
}