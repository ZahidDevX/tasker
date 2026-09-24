
const TaskAction = () => {
    return (
        <div className="flex items-center justify-end gap-4">
            <button type="button" className="px-4 py-2 rounded cursor-pointer bg-emerald-500 hover:bg-emerald-600 transition">Add Task</button>
            <button type="button" className="px-4 py-2 rounded cursor-pointer bg-red-800 hover:bg-red-900 transition">Delete All Task</button>
        </div>
    );
};

export default TaskAction;