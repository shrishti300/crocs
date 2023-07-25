import 'animate.css';
import './App.css';
import 'tailwindcss/tailwind.css';
import Landing from './components/Landing';
import { useRef } from 'react';
import { useState } from 'react';
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from 'react-router-dom';
import './index.css';
import cursor from './assets/mouse.png';
import imgCursor from './assets/icons8-crocodile-64 (1).png';
function App() {
  const headerRef = useRef();
  const [mouseX, setMouseX] = useState('');
  const [mouseY, setMouseY] = useState('');
  const [scrolllY, setScrollY] = useState('');

  const moveCursor = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
    if (headerRef.current) {
      // Your code here

      headerRef.current.style.transform = `translate3d(${mouseX}px, ${
        mouseY + scrolllY
      }px, 0)`;
    }
  };

  window.addEventListener('scroll', () => {
    setScrollY(window.scrollY);
    if (headerRef.current) {
      // Your code here
      headerRef.current.style.transform = `translate3d(${mouseX}px, ${
        mouseY + scrolllY
      }px, 0)`;
    }
  });
  window.addEventListener('mousemove', moveCursor);
  return (
    <>
      <div className="pointed" ref={headerRef}>
        <img
          width="64"
          height="64"
          src={imgCursor}
          alt="external-crocodile-animal-flaticons-lineal-color-flat-icons-3"
        />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
