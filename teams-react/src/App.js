import './App.css';
import Admin from './components/Admin';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Student from './components/Student';
import Teacher from './components/Teacher';
import Message from './components/Message';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route Component={Login} path='/'/>
        <Route Component={Admin} path='/admin/'/>
        <Route Component={Student} path='/student/'/>
        <Route Component={Teacher} path='/teacher/'/>
        <Route Component={Message} path='/messages/'/>
      </Routes>
    </div>
  );
}

export default App;
