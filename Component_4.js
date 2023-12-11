import React, { Component } from 'react';
import strings from '../json/Comp_4.json';

export default class Component_4 extends Component {
  render() {
    const { heading, button1, button2 } = strings.component4.ctaText;

    return (
      <div className="wrapper bgded overlay coloured" style={{ backgroundImage: "url('images/demo/backgrounds/02.png')" }}>
        <div id="cta" className="hoc clear">
          {/* This is a comment */}
          <article className="center">
            <h2 className="heading font-x3">{heading}</h2>
            <footer>
              <ul className="nospace inline pushright">
                <li><a className="btn" href="#">{button1}</a></li>
                <li><a className="btn inverse" href="#">{button2}</a></li>
              </ul>
            </footer>
          </article>
        </div>
      </div>
    );
  }
}
