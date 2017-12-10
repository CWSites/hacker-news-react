import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <ul className="navigation">
        <li>Guidelines</li>
        <li>FAQ</li>
        <li>Support</li>
        <li>API</li>
        <li>Security</li>
        <li>Lists</li>
        <li>Bookmarklet</li>
        <li>DMCA</li>
        <li>Apply to YC</li>
        <li>Contact</li>
      </ul>
      <form className="search">
        <label htmlFor="search">Search:</label>
        <input type="text" name="search" />
      </form>
    </div>
  )
}

export default Footer;
