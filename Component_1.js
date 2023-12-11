// Component_1.js
import React, { Component } from 'react';
import strings from '../json/Comp_1.json';

export default class Component_1 extends Component {
  render() {
    const { logos } = strings.header;

    return (
      <div className="wrapper row0">
        <div className="wrapper row1">
          <header id="header" className="hoc clear">
            {logos.map((logo, index) => (
              <div id="logo" key={index}>
                <h1><a href="index.html">{logo.text}</a></h1>
                <p>{logo.description}</p>
              </div>
            ))}
          </header>
        </div>
      </div>
    );
  }
}
