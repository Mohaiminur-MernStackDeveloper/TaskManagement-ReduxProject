import { PiStackSimpleFill } from "react-icons/pi";
import { AiOutlineAppstoreAdd,AiFillMessage,AiFillSetting } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

const LeftSideBar = () => {
    return (
        <div className="h-full p-5 flex md:flex-col gap-5 md:gap-2 justify-center items-center w-full">
            <PiStackSimpleFill className="text-5xl text-blue-600"/>
            <div className="bg-blue-600 p-1 mx-auto rounded-md"><AiOutlineAppstoreAdd className="text-2xl mx-auto text-white"/></div>
            <AiFillMessage className="text-2xl md:mt-5 mx-auto text-gray-400"/>
            <AiFillSetting className="text-2xl md:mt-5 mx-auto text-gray-400"/>
            <FaUserCircle className="text-2xl md:mt-auto mx-auto text-gray-400"/>
        </div>
    );
};

export default LeftSideBar;