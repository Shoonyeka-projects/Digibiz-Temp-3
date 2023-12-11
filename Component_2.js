import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import strings from '../json/Comp_2.json';

export default class Component_2 extends Component {
  render() {
    const { items } = strings.navigation;

    return (
      <div className="wrapper row2">
        <nav id="mainav" className="hoc clear">
          <ul className="clear">
            {items.map((item, index) => (
              <li key={index}>
                {item.subItems ? (
                  <>
                    <Link to={item.to}>{item.label}</Link>
                    <ul>
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link to={subItem.to}>{subItem.label}</Link>
                          {subItem.subItems && (
                            <ul>
                              {subItem.subItems.map((subSubItem, subSubIndex) => (
                                <li key={subSubIndex}>
                                  <Link to={subSubItem.to}>{subSubItem.label}</Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link to={item.to}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}
