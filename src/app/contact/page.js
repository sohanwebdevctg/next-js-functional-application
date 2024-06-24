import ContactBanner from '../components/contact/ContactBanner';
import MapItem from '../components/contact/MapItem';
import ContactForm from '../components/contact/ContactForm';

const ContactPage = () => {
  return (
    <div>
      {/* contact banner section start */}
      <ContactBanner></ContactBanner>
      {/* contact banner section end */}
      {/* contact form section start */}
      <ContactForm></ContactForm>
      {/* contact form section end */}
      {/* mapItem section start */}
      <MapItem></MapItem>
      {/* mapItem section end */}
    </div>
  );
};

export default ContactPage;