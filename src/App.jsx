import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Loader= lazy(() => import('./components/Loader'));
const Homepage = lazy(() => import('./pages/Homepage'));
const Projectpage = lazy(() => import('./pages/Projectpage'));
const Blogpage = lazy(() => import('./pages/Blogpage'));
const Skillspage = lazy(() => import('./pages/Skillspage'));
const Contactpage = lazy(() => import('./pages/Contactpage'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projectpage />} />      
          <Route path="/blog" element={<Blogpage />} />
          <Route path="/skills" element={<Skillspage />} />
          <Route path="/connect" element={<Contactpage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
