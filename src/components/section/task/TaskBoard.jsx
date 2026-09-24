import Container from "../../layout/Container";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskBoard = () => {
    return (
        <section className="mt-10">
            <Container>
                <div className="p-4 border border-blue-400/20 rounded-lg space-y-5">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-medium">Your Task List</h2>
                        <SearchTask />
                    </div>
                    <TaskAction />
                    <TaskList />
                </div>
            </Container>
        </section>
    );
};

export default TaskBoard;