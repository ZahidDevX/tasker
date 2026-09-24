import TaskTag from "./TaskTag";

const Task = () => {
    return (
        <div className="bg-slate-800 p-4 rounded grid grid-cols-12">
            <div>⭐</div>
            <div className="col-span-2">
                <h3 className="font-medium">Task Title</h3>
            </div>
            <div className="col-span-5">
                <p>
                    Task Description
                </p>
            </div>
            <div className="col-span-2 flex flex-wrap items-center justify-center gap-2">
                <TaskTag value="Hello"/>
                <TaskTag value="Hello"/>
                <TaskTag value="Hello"/>
            </div>
            <div>
                <p className="text-center">High</p>
            </div>
            <div className="flex items-center justify-center gap-3">
                <button className="text-blue-500 hover:text-blue-600 rounded cursor-pointer text-sm">Edit</button>
                <button className="text-red-700 hover:text-red-800 rounded cursor-pointer text-sm">Delete</button>
            </div>
        </div>
    );
};

export default Task;