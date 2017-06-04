import React from 'react';
import './style.css';
import { scaleDown as Menu } from 'react-burger-menu';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-content">
          <Link to={prefixLink('/')}>
            <div className="main">Rants & Ramblings</div>
            <div className="sub">of a software engineer</div>
          </Link>
        </div>
        <div className="header-menu">
          <Menu right>
            <Link to={prefixLink('/')}>Home</Link>
            <Link to={prefixLink('/')} activeClassName="current">Articles</Link>
            <Link to={prefixLink('/about/')} activeClassName="current">About</Link>
            <Link to={prefixLink('/contact/')} activeClassName="current">Contact</Link>
          </Menu>
        </div>
      </div>
    );
  }
}

export default Header;
