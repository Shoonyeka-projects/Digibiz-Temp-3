import React, { Component } from 'react';
import strings from '../json/Comp_5.json';

export default class Component_5 extends Component {
  render() {
    const { sectionTitle, sectionDescription, items, buttonText } = strings.component5;

    return (
      <div className="wrapper row6">
        <div className="hoc container clear">
          <div className="center btmspace-50">
            <h2 className="heading">{sectionTitle}</h2>
            <p className="nospace">{sectionDescription}</p>
          </div>
          <ul className="nospace group btmspace-50 elements">
            {items.map((item, index) => (
              <li className="one_quarter" key={index}>
                <article>
                  <figure><img src={item.imageSrc} alt="" />
                    <figcaption>{item.figcaption}</figcaption>
                  </figure>
                  <div className="txtwrap">
                    <h6 className="heading"><a href="#">{item.articleHeading}</a></h6>
                    <p>{item.articleContent}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
          <p className="nospace center"><a className="btn small" href="#">{buttonText}</a></p>
          <div className="clear"></div>
        </div>
      </div>
    );
  }
}
