import { Router, Link, Redirect } from '@reach/router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Number from './components/Number';
import WordColor from './components/WordColor';

function App() {
  return (
    <div className="App">
      <div className="p-2 d-flex justify-content-around">
        <Link to="/"></Link>
        <Link className="btn btn-primary" to="/home">Home</Link>
        <Link className="btn btn-primary" to="/item">Number or Word</Link>
        <Link className="btn btn-primary" to="/word/textcolor/bgcolor">Colors</Link>
      </div>
      <Router>
        <Home path="/home" />
        <Number path="/:item" />
        <WordColor path="/:word/:textcolor/:bgcolor" />

      </Router>
    </div>
  );
}

export default App;
