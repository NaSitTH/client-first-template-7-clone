import { EventCard } from "../../components/common/card";
import {
  EventContentSection,
  EventHeaderSection,
} from "../../components/event";
import { MarkdownType } from "../../interfaces/markdown";
import { getAllEvents, getEventBySlug, getTwoEvents } from "../../lib/api";
import { markdownToHtml } from "../../lib/markdownToHtml";

type Props = {
  event: MarkdownType;
  twoEvents: Array<MarkdownType>;
};

const Event = ({ event, twoEvents }: Props) => {
  return (
    <>
      <EventHeaderSection
        title={event.title}
        location={event.location}
        date={new Date(event.date)}
      />

      <EventContentSection content={event.content} />

      <section className="app-section-mt mx-auto max-w-3xl">
        <div className="flex items-center">
          <h2 className="text-[2.5rem] leading-[3.5rem] text-app-primary-text">
            Other events
          </h2>
          <span className="ml-6 flex h-14 grow items-center">
            <span className="h-[1px] w-full bg-app-border"></span>
          </span>
        </div>
        <div className="mt-12 flex flex-col-reverse space-y-6 space-y-reverse">
          {twoEvents.map((data) => {
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
    </>
  );
};
export default Event;

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const event = getEventBySlug(params.slug, [
    "title",
    "location",
    "date",
    "content",
  ]);

  const content = await markdownToHtml(event.content || "");

  const twoEvents = getTwoEvents();

  return {
    props: {
      event: { ...event, content },
      twoEvents: twoEvents,
    },
  };
};

export const getStaticPaths = async () => {
  const events = getAllEvents(["slug"]);

  return {
    paths: events.map((event) => {
      return {
        params: {
          slug: event.slug,
        },
      };
    }),
    fallback: false,
  };
};
