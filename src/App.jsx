import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ListNewPaper from './pages/ListNewPaper';
import ListUser from './pages/UserListNewPaper';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/listnewpaper" element={<ListNewPaper />} />
          <Route path="/listuser" element={<ListUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;