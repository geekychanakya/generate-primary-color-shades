import logo from "./logo.svg";
import "./App.css";
import { getShadesOfPrimaryColor } from "./lib/primary-color-shades";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click the button & open <code>console</code> to see the result.
        </p>
        <button
          className="App-button"
          onClick={() => getShadesOfPrimaryColor()}
        >
          Generate primary color shades
        </button>
      </header>
    </div>
  );
};

export default App;
