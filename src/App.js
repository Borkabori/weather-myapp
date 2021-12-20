import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        <strong>
          <a href="https://github.com/Borkabori/weather-myapp" target="blank">
            Open-source code
          </a>
        </strong>
        , by Borbála Birgés from{" "}
        <a href="https://www.shecodes.io/" target="blank">
          SheCodes
        </a>
      </footer>
    </div>
  );
}

export default App;
