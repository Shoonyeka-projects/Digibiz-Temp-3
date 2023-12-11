import React, { Component } from 'react';
import data from '../json/Comp_6.json';

export default class Component_6 extends Component {
  render() {
    const { sections, mainArticle, asideList } = data;

    return (
      <div className="wrapper row3">
        <main className="hoc container clear">
          {/* main body */}
          {/* This is a comment */}
          <ul className="nospace group btmspace-50 elements">
            {sections.map((section, index) => (
              <li className="one_quarter" key={index}>
                <h6 className="heading">{section.heading}</h6>
                {section.imageSrc ? (
                  <article>
                    <a href="#"><img src={section.imageSrc} alt="" /></a>
                    <div className="txtwrap">
                      <p>{section.content}</p>
                      <p className="nospace"><a href={section.readMoreLink}>Read More &raquo;</a></p>
                    </div>
                  </article>
                ) : (
                  <p>{section.content}</p>
                )}
              </li>
            ))}
          </ul>
          <hr className="btmspace-50" />
          <article className="two_third first">
            <h6 className="heading">{mainArticle.heading}</h6>
            <p>{mainArticle.content}</p>
          </article>
          <aside className="one_third">
            <h6 className="heading">Enim nunc volutpat</h6>
            <ul className="nospace">
              {asideList.map((item, index) => (
                <li className="btmspace-15" key={index}>
                  <i className={`fa fa-fw fa-${item.icon}`}></i>
                  <a href="#">{item.text}</a>
                </li>
              ))}
            </ul>
          </aside>
          {/* / main body */}
          <div className="clear"></div>
        </main>
      </div>
    );
  }
}
