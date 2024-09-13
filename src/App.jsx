import Avatar from "./components/Avatar";
import Details from "./components/Details";
import SkillsList from "./components/SkillsList";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="details">
        <Details />
        <SkillsList />
      </div>
    </div>
  );
}

export default App;
