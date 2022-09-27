import { MarkdownType } from "../../../interfaces/markdown";
import { EventCard } from "../card";

type Props = {
  events: Array<MarkdownType>;
};

const EventSection = ({ events }: Props) => {
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
      <div className="mt-12 flex flex-row-reverse space-x-6 space-x-reverse xl:flex-col-reverse xl:space-y-6 xl:space-y-reverse">
        {events.map((data) => {
          return (
            <EventCard
              key={data.title}
              title={data.title}
              date={new Date(data.date)}
              url={`/events/${data.slug}`}
            />
          );
        })}
      </div>
    </section>
  );
};
export default EventSection;
