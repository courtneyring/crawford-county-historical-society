const MenuButton = ({ isOpen, clickFn }) => {
  return (
    <button
      className="flex flex-col justify-between w-6 h-5 "
      onClick={clickFn}
      aria-label="Menu"
    >
      <div
        className={` h-0.5 bg-white transition-all transition-1000 ${isOpen ? "rotate-45 origin-top-left w-27px" : "w-full"}`}
      ></div>
      <div
        className={` h-0.5 bg-white transition-all transition-1000 ${isOpen ? "w-0" : "w-full"}`}
      ></div>
      <div
        className={`h-0.5 bg-white transition-all transition-1000 ${isOpen ? "-rotate-45 origin-bottom-left  w-27px" : "w-full"}`}
      ></div>
    </button>
  );
};

export default MenuButton;
