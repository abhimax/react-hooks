import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>My React Hook Tests</h1>
      <ul className='page-list'>
        <li className='list-item'><Link to="/use-state-counter">useState Counter</Link></li>
        <li className='list-item'><Link to="/use-state-counter">TODO</Link></li>
      </ul>     
    </div>
  );
}

export default App;
