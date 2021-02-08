import logo from './assets/img/logo.svg';
import './assets/css/App.css';

//Components
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Test />
      </header>
    </div>
  );
}

export default App;
