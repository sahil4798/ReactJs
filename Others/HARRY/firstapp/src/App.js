// import "./App.css";

import Navbar from "./components/Navbar";
// import Formcontrol from "./components/Formcontrol";
import About from "./components/About";

// import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar title="Texttiles" aboutText="About my website" />
      <div className="container my-3 px-5">
        {/* <Formcontrol text="Enter text" /> */}
        <About />
      </div>
    </>
  );
}

export default App;
