import ContactBanner from "@/components/contact/ContactBanner";
import ContactForm from "@/components/contact/ContactForm";
import MapItem from "@/components/contact/MapItem";

export const metadata = {
  title: "Urnitur | Contact",
  description: "This is contact page",
};

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