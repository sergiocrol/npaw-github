import React from 'react';
import { Link } from 'react-router-dom';

import { FooterContainer } from './footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <span>done by <Link to='https://github.com/sergiocrol'>S|C|R</Link></span>
    </FooterContainer>
  )
};

export default Footer;