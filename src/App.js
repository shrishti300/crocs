import 'animate.css';
import './App.css';
import "tailwindcss/tailwind.css";
import Landing from './components/Landing';
import {
	Routes,
	Route,
	BrowserRouter as Router,
	Navigate,
} from "react-router-dom";
function App() {
  return (
    <Router>
			<Routes>
				<Route path="/" element={<Landing />} />
        </Routes>
        </Router>
  );
}

export default App;
