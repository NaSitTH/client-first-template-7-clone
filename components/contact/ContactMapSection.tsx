import Image from "next/image";

const ContactMapSection = () => {
  return (
    <section className="app-section-mt block">
      <Image
        src="/images/map.png"
        alt="map"
        layout="responsive"
        width={1500}
        height={448}
      />
    </section>
  );
};
export default ContactMapSection;
