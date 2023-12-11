import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="hoc clear"> 
        {/* ################################################################################################ */}
        <div className="one_quarter first">
          <h6 className="title">Pharetra tempus</h6>
          <ul className="nospace linklist contact">
            <li><i className="fa fa-map-marker"></i>
              <address>
                Street Name &amp; Number, Town, Postcode/Zip
              </address>
            </li>
            <li><i className="fa fa-phone"></i> +00 (123) 456 7890<br />
              +00 (123) 456 7890</li>
            <li><i className="fa fa-fax"></i> +00 (123) 456 7890</li>
            <li><i className="fa fa-envelope-o"></i> info@domain.com</li>
          </ul>
        </div>
        <div className="one_quarter">
          <h6 className="title">Ante phasellus</h6>
          <ul className="nospace linklist">
            <li><a href="#">Sed urna eu consectetur</a></li>
            <li><a href="#">Vestibulum ornare non felis</a></li>
            <li><a href="#">Et ullamcorper proin placerat</a></li>
            <li><a href="#">Nibh quis nulla vehicula</a></li>
            <li><a href="#">Interdum proin tincidunt erat</a></li>
          </ul>
        </div>
        <div className="one_quarter">
          <h6 className="title">Ac sodales dapibus</h6>
          <p className="btmspace-30">Mi sagittis vel maecenas lobortis eros finibus tortor.</p>
          <form method="post" action="#">
            <fieldset>
              <legend>Newsletter:</legend>
              <input className="btmspace-15" type="text" value="" placeholder="Name" />
              <input className="btmspace-15" type="text" value="" placeholder="Email" />
              <button type="submit" value="submit">Submit</button>
            </fieldset>
          </form>
        </div>
        <div className="one_quarter">
          <h6 className="title">Vehicula purus urna</h6>
          <ul className="nospace linklist">
            <li>
              <article>
                <h2 className="nospace font-x1"><a href="#">Cursus condimentum</a></h2>
                <time className="font-xs block btmspace-10" datetime="2045-04-06">Friday, 6<sup>th</sup> April 2045</time>
                <p className="nospace">Consequat felis faucibus ac suspendisse lacinia nisi.</p>
              </article>
            </li>
            <li>
              <article>
                <h2 className="nospace font-x1"><a href="#">Pretium sapien sem</a></h2>
                <time className="font-xs block btmspace-10" datetime="2045-04-05">Thirsday, 5<sup>th</sup> April 2045</time>
                <p className="nospace">Augue vel suscipit ex sapien eget magna nulla vitae.</p>
              </article>
            </li>
          </ul>
        </div>
        {/* ################################################################################################ */}
      </footer>
    );
  }
}
