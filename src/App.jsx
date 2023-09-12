import { useState } from "react";
import Header from "./Components/ReUseable/Header";
import LeftSideBar from "./Components/ReUseable/LeftSideBar";
import TaskCom from "./Components/ReUseable/TaskCom";

function App() {
  const [data, setData] = useState(null); 
  return (
    <div className="w-full min-h-[500px] h-screen flex flex-col md:flex-row">
      <div className="md:border-r mx-auto">
        <LeftSideBar />
      </div>
      <div className="p-5 w-full">
        <Header />
        <div className="grid grid-cols-3 gap-5 text-sm">
        <TaskCom title="Up Next" count="0" data={data} />
        <TaskCom title="In Progress" count="0" data={data} />
        <TaskCom title="Up Final" count="0" data={data} />
        </div>
      </div>
      <div className="w-[600px] p-5 md:border-l">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        distinctio, architecto iure repellendus libero beatae explicabo esse
        voluptatibus sit quis. Delectus architecto nemo consequuntur distinctio
        ipsam quibusdam voluptatem at aliquam?
      </div>
    </div>
  );
}

export default App;
