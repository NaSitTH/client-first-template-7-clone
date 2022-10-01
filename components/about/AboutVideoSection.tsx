import Image from "next/image";

const AboutVideoSection = () => {
  return (
    <section className="app-container app-section-mt relative h-[448px] overflow-hidden rounded-xl lg:h-80">
      <Image
        src="/images/BG_3.png"
        alt="people"
        layout="fill"
        objectFit="cover"
      />
    </section>
  );
};
export default AboutVideoSection;
