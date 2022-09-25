import { FaRegCheckCircle, FaTimes } from "react-icons/fa";

type Props = {
  isDisplay: boolean;
  closeHandler: () => void;
};

const NotificationPopup = ({ isDisplay, closeHandler }: Props) => {
  return (
    <div
      className={`fixed bottom-0 right-10 z-30 flex justify-center ${
        isDisplay ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } duration-500 ease-in-out`}
    >
      <div className="mx-auto mb-12 flex h-12 items-center space-x-5 rounded-lg border-[1px] border-app-green-primary bg-app-green-secondary bg-opacity-40 px-4 text-green-600">
        <FaRegCheckCircle className="h-8 w-8 text-app-green-primary" />
        <p className="font-semibold tracking-widest">SEND SUCCESS!</p>
        <button onClick={closeHandler}>
          <FaTimes className="h-5 w-5 text-app-green-primary" />
        </button>
      </div>
    </div>
  );
};
export default NotificationPopup;
