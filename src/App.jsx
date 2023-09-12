import LeftSideBar from "./Components/ReUseable/LeftSideBar";

function App() {
  return (
    <div className="w-full min-h-[500px] h-screen flex flex-col md:flex-row">
      <div className="md:border-r mx-auto">
        <LeftSideBar />
      </div>
      <div className="p-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta enim assumenda at! Soluta incidunt sequi placeat obcaecati aliquid maxime, accusamus inventore eum earum est, ea autem, ipsam aliquam architecto! Neque!
      </div>
      <div className="w-[600px] p-5 md:border-l">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia distinctio, architecto iure repellendus libero beatae explicabo esse voluptatibus sit quis. Delectus architecto nemo consequuntur distinctio ipsam quibusdam voluptatem at aliquam?</div>
    </div>
  );
}

export default App;
