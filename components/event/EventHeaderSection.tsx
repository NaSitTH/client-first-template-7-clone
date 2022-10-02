import { BsCalendar, BsGeoAlt } from "react-icons/bs";
import { format } from "date-fns";

type Props = {
  title: string;
  location: string;
  date: Date;
};

const EventHeaderSection = ({ title, location, date }: Props) => {
  const dateFormatted = format(new Date(date), "MMMM dd, yyyy h:mm a");
  return (
    <section className="bg-app-green-tertiary text-app-primary-text">
      <div className="mx-auto max-w-3xl py-24 lg:w-17/20 md:pt-16 sm:pt-12 xs:pb-16">
        <h1 className="xs:text-h2">{title}</h1>
        <div className="mt-12 flex items-center space-x-12 sm:ml-4 sm:flex-col sm:items-start sm:space-x-0 sm:space-y-8">
          <div className="flex items-center space-x-2 font-medium sm:space-x-4">
            <BsGeoAlt className="h-8 w-7 text-app-green-primary" />
            <p className="font-medium xs:text-paragraph-small">{location}</p>
          </div>
          <div className="flex items-center space-x-2 font-medium sm:space-x-4">
            <BsCalendar className="h-8 w-7 text-app-green-primary" />
            <p className="font-medium xs:text-paragraph-small">
              {dateFormatted}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EventHeaderSection;
