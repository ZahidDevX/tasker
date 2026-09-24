import Task from "./Task";

const TaskList = () => {
    return (
        <div className="bg-slate-700 p-4 rounded space-y-4">
            <div className="bg-slate-800 p-4 rounded grid grid-cols-12 text-center">
                <div></div>
                <div className="col-span-2">
                    <h3 className="font-medium">Title</h3>
                </div>
                <div className="col-span-5">
                    <h3 className="font-medium">Description</h3>
                </div>
                <div className="col-span-2">
                    <h3 className="font-medium">Tags</h3>
                </div>
                <div>
                    <h3 className="font-medium">Priority</h3>
                </div>
                <div>
                    <h3 className="font-medium">Action</h3>
                </div>
            </div>
            <Task />
            <Task />
            <Task />
            <Task />
        </div>
    );
};

export default TaskList;