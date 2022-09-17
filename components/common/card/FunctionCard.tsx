import { IconContext } from "react-icons";

type AppProps = {
  title: string;
  text: string;
  icon: JSX.Element;
};

const FunctionCard = ({ title, text, icon }: AppProps) => {
  return (
    <IconContext.Provider value={{ className: "text-[#DDFFDF] w-4 h-4" }}>
      <div className="flex space-x-6">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-[#83D187]">
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

export default FunctionCard;
