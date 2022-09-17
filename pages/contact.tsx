import {
  ContactFormSection,
  ContactHeaderSection,
  ContactMapSection,
} from "../components/contact";

const Contact = () => {
  return (
    <>
      {/* Header */}
      <ContactHeaderSection />

      {/* Form */}
      <ContactFormSection />

      {/* Map */}
      <ContactMapSection />
    </>
  );
};
export default Contact;
