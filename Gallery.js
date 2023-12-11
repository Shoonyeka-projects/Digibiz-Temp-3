import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Gallery extends Component {
  render() {
    return (
      <div className="content">
        {/* ################################################################################################ */}
        <div id="gallery">
          <figure>
            <header className="heading">Gallery Title Goes Here</header>
            <ul className="nospace clear">
              <li className="one_quarter first"><Link to="#"><img src="../images/demo/gallery/01.png" alt="" /></Link></li>
              <li className="one_quarter"><Link to="#"><img src="../images/demo/gallery/01.png" alt="" /></Link></li>
              <li className="one_quarter"><Link to="#"><img src="../images/demo/gallery/01.png" alt="" /></Link></li>
              <li className="one_quarter"><Link to="#"><img src="../images/demo/gallery/01.png" alt="" /></Link></li>
              {/* Repeat the pattern for other list items */}
            </ul>
            <figcaption>Gallery Description Goes Here</figcaption>
          </figure>
        </div>
        {/* ################################################################################################ */}
        {/* ################################################################################################ */}
        <nav className="pagination">
          <ul>
            <li><Link to="#">&laquo; Previous</Link></li>
            <li><Link to="#">1</Link></li>
            <li><Link to="#">2</Link></li>
            <li><strong>&hellip;</strong></li>
            <li><Link to="#">6</Link></li>
            <li className="current"><strong>7</strong></li>
            <li><Link to="#">8</Link></li>
            <li><Link to="#">9</Link></li>
            <li><strong>&hellip;</strong></li>
            <li><Link to="#">14</Link></li>
            <li><Link to="#">15</Link></li>
            <li><Link to="#">Next &raquo;</Link></li>
          </ul>
        </nav>
        {/* ################################################################################################ */}
      </div>
    );
  }
}
