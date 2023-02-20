import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import Bowser from 'bowser';

const MainPage = lazy(() => import('./components/MainPage'));
const Projects = lazy(() => import('./components/Projects'));
const About = lazy(() => import('./components/About'));

import Background from './components/Background';
import Loading from './components/Loading';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const history =
  process.env.NODE_ENV === 'test'
    ? createMemoryHistory()
    : createBrowserHistory();

const browser = Bowser.getParser(window.navigator.userAgent);

function App() {
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    setTheme(localStorage.getItem('background') || 'default');
  }, []);

  const handleThemeChange = (bg) => {
    setTheme(bg);
    localStorage.setItem('background', bg);
  };

  return (
    <Router history={history}>
      <div className={theme}>
        <Navbar handleThemeChange={handleThemeChange} />
        <Suspense fallback={<Loading />}>
          <Background theme={theme} browserName={browser.getBrowserName()} />
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
