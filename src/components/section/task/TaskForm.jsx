
const TaskForm = () => {
    return (
        <div>
            <form className="mx-auto w-full max-w-2xl rounded-xl border border-slate-700 bg-slate-800 p-6 shadow-lg">
                {/* Header */ }
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-100">
                        Create Task
                    </h2>

                    <p className="mt-1 text-sm text-gray-400">
                        Add the details for your task.
                    </p>
                </div>

                {/* Title */ }
                <div className="mb-4">
                    <label
                        htmlFor="title"
                        className="mb-2 block text-sm font-medium text-gray-200"
                    >
                        Task Title
                    </label>

                    <input
                        id="title"
                        type="text"
                        placeholder="Enter task title"
                        className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2.5 text-sm text-gray-100 placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                </div>

                {/* Description */ }
                <div className="mb-4">
                    <label
                        htmlFor="description"
                        className="mb-2 block text-sm font-medium text-gray-200"
                    >
                        Description
                    </label>

                    <textarea
                        id="description"
                        rows="4"
                        placeholder="Enter task description"
                        className="w-full resize-none rounded-lg border border-slate-600 bg-slate-700 px-3 py-2.5 text-sm text-gray-100 placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                </div>

                {/* Priority & Status */ }
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="priority"
                            className="mb-2 block text-sm font-medium text-gray-200"
                        >
                            Priority
                        </label>

                        <select
                            id="priority"
                            className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2.5 text-sm text-gray-100 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        >
                            <option value="">Select priority</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="status"
                            className="mb-2 block text-sm font-medium text-gray-200"
                        >
                            Status
                        </label>

                        <select
                            id="status"
                            className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2.5 text-sm text-gray-100 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        >
                            <option value="pending">Pending</option>
                            <option value="in_progress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                </div>

                {/* Tags */ }
                <div className="mt-4">
                    <label
                        htmlFor="tags"
                        className="mb-2 block text-sm font-medium text-gray-200"
                    >
                        Tags
                    </label>

                    <input
                        id="tags"
                        type="text"
                        placeholder="e.g. Laravel, React, Work"
                        className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2.5 text-sm text-gray-100 placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />

                    <p className="mt-1.5 text-xs text-gray-400">
                        Separate multiple tags with commas.
                    </p>
                </div>

                {/* Favorite */ }
                <div className="mt-4 flex items-center">
                    <input
                        id="favorite"
                        type="checkbox"
                        className="h-4 w-4 rounded border-slate-600 bg-slate-700 text-blue-600 focus:ring-blue-500"
                    />

                    <label
                        htmlFor="favorite"
                        className="ml-2 text-sm text-gray-300"
                    >
                        Mark as favorite ⭐
                    </label>
                </div>

                {/* Actions */ }
                <div className="mt-6 flex justify-end gap-3">
                    <button
                        type="button"
                        className="rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-slate-700"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TaskForm;