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
        <footer className="project-footer"><a href="https://github.com/Luzanne-S/Dictionary-App">Coded by Luzanne</a></footer>
        
      </div>
    </div>
  );
}

export default App;
