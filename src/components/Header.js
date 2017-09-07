import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
  <div>
    <div class="blog-directory-triangles" />
    <div id="top-section">
      <nav class="hover-green">
        <Link class="nav-logo dark-transparent hover-green" to="/" />

        <ul class="nav-links">
          <a href="">Blog</a>
          <a href="../about">About</a>
          <a href="../support">Support</a>
        </ul>

        <a class="nav-links-right" href="">
          Download
        </a>
      </nav>

      <div class="mobile-nav-toggle dark-transparent" />
      <div class="mobile-nav">
        <a class="selected" href="">
          Blog
        </a>
        <a href="../about">
          <span>About</span>
        </a>
        <a href="../support">Support</a>
        <div class="mobile-nav-close" />
      </div>
    </div>
  </div>
);

export default Header;
