import React, { Component } from 'react';
import icon from '../../../assets/images/server-icon.png'
import { NavLink, Link } from 'react-router-dom';

import './Header.css'

export default class Header extends Component {

  toggleSignIn = () => {

  }

  toggleSignUp = () => {

  }

  render() {
    return (
      <header>
        <div className="header-upper">
          <img src={icon} alt="" />
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign up</Link></li>
          </ul>
        </div>
        <div className="header-down">
          <ul>
            <li><NavLink activeClassName="activeLink" exact to="/">Inicio</NavLink></li>
            <li><NavLink activeClassName="activeLink" to="/novedades">Novedades</NavLink></li>
            <li><NavLink activeClassName="activeLink" to="/foro">Foro</NavLink></li>
            <li><a href="/" target="_blank">Tienda</a></li>
            <li><NavLink activeClassName="activeLink" to="/modalidades">Modalidades</NavLink></li>
            <li><NavLink activeClassName="activeLink" to="/normas">Normas y PPFF</NavLink></li>
            <li><NavLink activeClassName="activeLink" to="/acerca">Acerca De</NavLink></li>
            <li><NavLink activeClassName="activeLink" to="/contacto">Contactanos</NavLink></li>
          </ul>
        </div>
      </header>
    )
  }

}