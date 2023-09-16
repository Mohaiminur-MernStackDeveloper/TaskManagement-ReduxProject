import { BiSearchAlt, BiAlarm, BiSolidUserCircle } from "react-icons/bi";

const Header = ({openModal}) => {
  return (
    <div className="flex justify-between my-5 items-center">
      <h1 className="text-3xl font-mono">Tasks</h1>
      <div className="flex gap-3">
        <div className="p-2 rounded-xl border">
          <BiSearchAlt className="text-2xl" />
        </div>
        <div className="p-2 rounded-xl border">
          <BiAlarm className="text-2xl" />
        </div>
        <button onClick={openModal} className="bg-blue-500 p-4 py-2 text-sm font-sans text-white rounded-md">
          Add Task
        </button>
        <div className="p-2 rounded-xl border">
          <BiSolidUserCircle className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Header;
