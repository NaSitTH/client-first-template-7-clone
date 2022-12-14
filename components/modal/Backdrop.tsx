type Props = {
  handleClose: () => void;
};

const Backdrop = ({ handleClose }: Props) => {
  return (
    <div
      className="fixed top-0 left-0 z-40 h-screen w-full bg-black/30"
      onClick={handleClose}
    />
  );
};
export default Backdrop;
