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
      <div className="mx-auto max-w-3xl py-24">
        <h1>{title}</h1>
        <div className="mt-12 flex items-center space-x-12">
          <div className="flex items-center space-x-2 font-medium">
            <BsGeoAlt className="h-8 w-7 text-app-green-primary" />
            <p className="font-medium">{location}</p>
          </div>
          <div className="flex items-center space-x-2 font-medium">
            <BsCalendar className="h-8 w-7 text-app-green-primary" />
            <p className="font-medium">{dateFormatted}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EventHeaderSection;
