import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
          <main>
            {" "}
            <Dictionary />
          </main>
        </header>
        <footer className="text-footer">Coded by Luzanne</footer>
      </div>
    </div>
  );
}

export default App;
