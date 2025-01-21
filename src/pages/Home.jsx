import Featured from "../components/Featured";
import List from "../components/List";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="w-full h-full overflow-hidden bg-main">
      <Navbar />
      <Featured />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
