import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { format } from "date-fns";

type Props = {
  title: string;
  url: string;
  date: Date;
};

const EventCard = ({ title, date, url }: Props) => {
  const day = format(date, "dd");
  const month = format(date, "MMM");

  return (
    <Link href={url}>
      <a className="flex h-48 w-full justify-between space-x-6 rounded-lg bg-app-green-secondary pl-10 pr-12 text-app-primary-text">
        <div className="mt-8 grow-0">
          <h2 className="font-medium">{day}</h2>
          <p className="text-button font-medium tracking-[0.125em]">{month}</p>
        </div>
        <div className="my-12 grow">
          <div className="flex items-center space-x-6">
            <p className="text-button font-medium tracking-[0.125em]">
              NEXT EVENTS
            </p>
            <span className="flex h-5 items-center">
              <span className="h-0.5 w-[44px] bg-app-primary-text"></span>
            </span>
          </div>
          <h3 className="mt-2 line-clamp-2">{title}</h3>
        </div>
        <div className="mt-16 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white">
          <BsArrowRight className="h-7 w-7" />
        </div>
      </a>
    </Link>
  );
};
export default EventCard;
