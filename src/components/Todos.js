import PandingTodos from "./PandingTodos";
import DoneTodos from "./DoneTodos";

const Todos = () => {
  return (
    <div
      className=" max-w-[1000px] mx-auto bg-[#141414]
       min-h-screen
      pb-3
       
    "
    >
      <header className="  border-[#6B7280] border-b-[1px] p-3">
        <h1 className="text-center text-white  font-bold font-serif text-lg">
          Todo List
        </h1>
      </header>
      <div className="  mx-14  my-3 flex gap-6 flex-wrap ">
        <PandingTodos />
        <DoneTodos />
      </div>
    </div>
  );
};

export default Todos;
