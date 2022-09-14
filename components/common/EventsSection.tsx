import EventCard from "./EventCard";

const EventsSection = () => {
  return (
    <section className="app-container app-section-mt">
      <div className="flex items-center">
        <h2 className="text-[2.5rem] leading-[3.5rem] text-app-primary-text">
          Our Events
        </h2>
        <span className="ml-6 flex h-14 grow items-center">
          <span className="h-[1px] w-full bg-app-border"></span>
        </span>
      </div>
      <div className="mt-12 flex space-x-6">
        <EventCard
          title="Say no to plastic usage and save the planet"
          url="/"
        />
        <EventCard title="Weekly cleaning program" url="/" />
      </div>
    </section>
  );
};
export default EventsSection;
