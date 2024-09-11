import "@fortawesome/fontawesome-free/css/all.min.css";
import { TopBar } from "./Components/TopBar";
import { NavBar } from "./Components/NavBar";
import { Hero } from "./Components/Hero";

function App() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Hero/>
    </div>
  );
}

export default App;
