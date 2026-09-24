import Footer from "./components/section/Footer";
import Header from "./components/section/Header";
import TaskBoard from "./components/section/task/TaskBoard";

const App = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <TaskBoard />
      </main>
      <Footer />
    </>
  );
};

export default App;