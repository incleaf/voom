import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="wrapper">
          <p className="footer-title">voom.kr</p>
          <span className="footer-copyright">
            Copyright 2016. voom.kr All rights reserved.
          </span>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
