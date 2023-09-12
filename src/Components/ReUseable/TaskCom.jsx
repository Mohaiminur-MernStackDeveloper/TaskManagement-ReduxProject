import SingleTask from "./SingleTask";

const TaskCom = ({title, data, count}) => {
    return (
        <div>
            <div className="w-full flex justify-between items-center rounded-md px-3 py-2 bg-blue-100">
                <h1>{title}</h1>
                <p className="px-2 py-1 rounded-md text-white bg-blue-400">{count}</p>
            </div>
            <div>
                {
                    data && data.map((item,index) => <SingleTask item={item} key={index}/>)
                }
            </div>
        </div>
    );
};

export default TaskCom;