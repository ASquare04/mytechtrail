import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Blogpage from './pages/Blogpage';
import Skillspage from './pages/Skillspage';
import Contactpage from './pages/Contactpage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/skills" element={<Skillspage />} />
        <Route path="/connect" element={<Contactpage />} />
      </Routes>
    </Router>
  );
};

export default App;
