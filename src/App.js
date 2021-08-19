import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div class="form-check form-switch switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault"></label>
        </div>
        <header className="App-header">
          <h1>Dictionary</h1>
          <main>
            {" "}
            <Dictionary />
          </main>
        </header>
        <footer className="project-footer">
          <a href="https://github.com/Luzanne-S/Dictionary-App">
            Coded by Luzanne
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
