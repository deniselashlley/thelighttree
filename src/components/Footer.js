import React from 'react';

let year = new Date().getFullYear();

const Footer = () => (
  <footer role="contentinfo" className="footer">
    <div className="container">
      <div className="copy-text">
        <p>Copyright &copy; <span>{year}</span> The Light Tree Yoga</p>
      </div>	
      <a 
        href="https://www.yogaallianceprofessionals.org/united-kingdom/harrow/yoga-teacher/jessica-gibbs?from=badge" 
        title="Find me on Yoga Alliance Professionals" 
        target="_blank"
        rel="noopener noreferrer"
        className="member-logo"
      >
          <img src="https://www.yogaallianceprofessionals.org/images/yapo-teacher-associate-1.png"  alt="" />
      </a>
    </div>
  </footer>
)

export default Footer;
