import './App.css';
import { Link } from 'react-router-dom';
import { createContext } from 'react';
import Button from './components/Button';

export const Context = createContext("blue");

function App() {
  
  return (
  
    <div className="App">
      <h1>My React Hook Tests</h1>
      <ul className='page-list'>
        <li className='list-item'><Link to="/use-state-counter">useState Counter</Link></li>
        <li className='list-item'><Link to="/use-effect-flag-counter">useEffect flag counter</Link></li>
      </ul>
      <Context.Provider value='red'>
        <Button label="Context >>"/>
      </Context.Provider>
        
    </div>
 
    
  );
}

export default App;
