import React, { Component } from 'react';
import strings from '../json/Comp_3.json';

export default class Component_3 extends Component {
  render() {
    const { heading, paragraph, buttonText } = strings.component3.introText;

    return (
      <div className="wrapper bgded overlay" style={{ backgroundImage: "url('images/demo/backgrounds/01.png')" }}>
        <div id="pageintro" className="hoc clear">
          {/* This is a comment */}
          <article className="introtxt">
            <h2 className="heading">{heading}</h2>
            <p>{paragraph}</p>
            <footer>
              <a className="btn inverse medium" href="#">
                {buttonText}
              </a>
            </footer>
          </article>
        </div>
      </div>
    );
  }
}
