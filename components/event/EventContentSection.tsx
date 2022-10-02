type Props = {
  content: string;
};

const EventContentSection = ({ content }: Props) => {
  return (
    <section className="app-section-mt mx-auto max-w-3xl lg:w-17/20">
      <h2 className="xs:text-h3">About</h2>
      <div
        className="markdown-content mt-8"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  );
};
export default EventContentSection;
