import React, {Fragment} from 'react';

const SocialContainer = () => (
  <Fragment>
    <ul className="social-icons">
    <li className="social-icons--item">
        <a 
          href="https://www.instagram.com/the_light_tree_yoga/" 
          aria-label="follow me on instagram" 
          className="icon-link"
        >
          <i className="icon icon-instagram" />
        </a>
      </li>
      <li className="social-icons--item">
        <a 
          href="mailto:jess@thelighttreeyoga.co.uk" 
          aria-label="email me" 
          className="icon-link"
        >
        <i className="icon email-icon" />
        <span>jess@thelighttreeyoga.co.uk</span>
        </a>
      </li>
      <li className="social-icons--item">
        <a 
          href="tel:07927 318 065" 
          aria-label="call me" 
          className="icon-link"
        >
          <i className="icon tele-icon" />
          <span>07927 318 065</span>
        </a>
      </li>
    </ul>
  </Fragment>
)


export default SocialContainer;