
import './App.css';

import Home from './components/Home/Home';
import Create from './components/Create/Create';
import Update from './components/Update/Update';
import Login from './components/Login/Login';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>




        <div className="App">
          <Routes>

            <Route path='/create' element={<Create />} />
            <Route path='/update' element={<Update />} />
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />

          </Routes>
        </div></Router>


    </div>
  );
}

export default App;