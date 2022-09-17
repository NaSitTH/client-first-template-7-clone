type AppProps = {
  handleClick: () => void;
};

const Backdrop = ({ handleClick }: AppProps) => {
  return (
    <div
      className="fixed top-0 left-0 z-40 h-screen w-full bg-black/30"
      onClick={handleClick}
    />
  );
};
export default Backdrop;
