import React, { Component } from 'react';
import './Footer.css'
import { Link } from 'react-router-dom'
import logobw from '../../../assets/images/logo-bw.png'
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <img src={logobw}></img>
        <div className="footer-down">
          <p>GamesHidden &copy;</p>
          <ul>
            <li><Link to="/team">Equipo</Link></li>
            <li><Link to="/privacy">Política de Privacidad</Link></li>
            <li><Link to="/terms">Terminos y Condiciones</Link></li>
          </ul>
        </div>
      </footer>
    )
  }
}