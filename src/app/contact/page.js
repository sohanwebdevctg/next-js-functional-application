import React from 'react';
import ContactBanner from '../components/contact/ContactBanner';
import MapItem from '../components/contact/MapItem';

const ContactPage = () => {
  return (
    <div>
      {/* contact banner section start */}
      <ContactBanner></ContactBanner>
      {/* contact banner section end */}
      {/* mapItem section start */}
      <MapItem></MapItem>
      {/* mapItem section end */}
    </div>
  );
};

export default ContactPage;