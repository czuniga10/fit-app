import './App.css';
import { Link } from 'react-router-dom'

import Card from './Components/Card'

function App() {
  return (
    <div className="App">
      APP
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/workout">Workout Page</Link>
      </nav>
    </div>
  );
}

export default App;
