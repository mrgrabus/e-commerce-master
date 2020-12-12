import './App.css';
import EcommerceRoot from './EcommerceRoot';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <EcommerceRoot />
      </BrowserRouter>
    </div>
  );
}

export default App;
