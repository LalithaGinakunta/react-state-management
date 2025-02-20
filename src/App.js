import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import InputExample from "./components/InputExample";
import FormExample from "./components/FormExample";
import SharedStateExample from "./components/SharedStateExample";
import ResetStateExample from "./components/ResetStateExample";
import ReducerExample from "./components/ReducerExample";
import ContextExample from "./components/ContextExample";
import "./App.css"; // Import the new CSS file

export default function App() {
  return (
    <Router>
      <div className="container">
        <h1>React State Management Examples</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/input">Reacting to Input</Link></li>
            <li><Link to="/form">Choosing the State Structure</Link></li>
            <li><Link to="/shared">Sharing State</Link></li>
            <li><Link to="/reset">Preserving & Resetting State</Link></li>
            <li><Link to="/reducer">Reducer Example</Link></li>
            <li><Link to="/context">Context Example</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/input" element={<InputExample />} />
          <Route path="/form" element={<FormExample />} />
          <Route path="/shared" element={<SharedStateExample />} />
          <Route path="/reset" element={<ResetStateExample />} />
          <Route path="/reducer" element={<ReducerExample />} />
          <Route path="/context" element={<ContextExample />} />
          <Route path="/" element={<h2>Welcome! Choose an example from the menu.</h2>} />
        </Routes>
      </div>
    </Router>
  );
}
