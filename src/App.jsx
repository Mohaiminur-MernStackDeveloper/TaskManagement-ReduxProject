import { useState } from "react";
import Header from "./Components/ReUseable/Header";
import LeftSideBar from "./Components/ReUseable/LeftSideBar";
import TaskCom from "./Components/ReUseable/TaskCom";
import AddTaskModal from "./Components/ReUseable/AddTaskModal";
import AddtaskModalCover from "./Components/ReUseable/AddtaskModalCover";

function App() {
  const [data, setData] = useState(null); 
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  };

  function openModal() {
    setIsOpen(true);
  };
  return (
    <>
    <div className="w-full min-h-[500px] h-screen flex flex-col md:flex-row">
      <div className="md:border-r mx-auto">
        <LeftSideBar />
      </div>
      <div className="p-5 w-full">
        <Header openModal={openModal} />
        <div className="grid grid-cols-3 gap-5 text-sm">
        <TaskCom title="Up Next" count="0" data={data} />
        <TaskCom title="In Progress" count="0" data={data} />
        <TaskCom title="Up Final" count="0" data={data} />
        </div>
      </div>
      <div className="w-[600px] p-5 md:border-l">
        <div>
          <h1>Member</h1>
          <div className="my-2 flex justify-start gap-3 items-center">
            <img className="w-10 rounded-md border h-10" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000" alt="" />
            <img className="w-10 rounded-md border h-10" src="https://media.istockphoto.com/id/931790424/photo/feeling-curious.jpg?s=612x612&w=0&k=20&c=F3lPMj6-cQ_IWO1S9vN3ruTSJmTTEG64a9aydikqnfA=" alt="" />
            <img className="w-10 rounded-md border h-10" src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" alt="" />
            <img className="w-10 rounded-md h-10 border" src="https://img.freepik.com/premium-photo/casually-handsome-confident-young-handsome-man-jeans-shirt-keeping-arms-crossed-smiling-while-standing-against-white-background_425904-14571.jpg?w=2000" alt="" />
          </div>
          <h1 className="text-sm mt-3">My Task</h1>
        </div>
      </div>
    </div>
    {/* Add task modal is here */}
    <AddtaskModalCover isOpen={isOpen} setData={setData} closeModal={closeModal} openModal={openModal}/>
    </>
  );
}

export default App;
