import { IconContext } from "react-icons";

type Props = {
  title: string;
  text: string;
  icon: JSX.Element;
};

const FeaturesCard = ({ title, text, icon }: Props) => {
  return (
    <IconContext.Provider value={{ className: "text-[#716FE7] w-4 h-4" }}>
      <div className="flex space-x-6">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-[#716FE7]/60">
          {icon}
        </div>
        <div>
          <p className="text-2xl font-bold leading-[1.76rem] text-app-primary-text">
            {title}
          </p>
          <p className="mt-2 text-app-secondary-text">{text}</p>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default FeaturesCard;
