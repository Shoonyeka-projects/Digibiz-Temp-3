import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="wrapper row0">
          <div id="topbar" className="hoc clear">
            {/* ################################################################################################ */}
            <div className="fl_left">
              <ul className="nospace inline pushright">
                <li><i className="fa fa-sign-in"></i> <Link to="/login">Login</Link></li>
                <li><i className="fa fa-user"></i> <Link to="/register">Register</Link></li>
              </ul>
            </div>
            <div className="fl_right">
              <ul className="nospace inline pushright">
                <li><i className="fa fa-phone"></i> +00 (123) 456 7890</li>
                <li><i className="fa fa-envelope-o"></i> info@domain.com</li>
              </ul>
            </div>
            {/* ################################################################################################ */}
          </div>
        </div>
      </div>
    );
  }
}
