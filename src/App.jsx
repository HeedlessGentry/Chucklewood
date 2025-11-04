// src/App.jsx

// 1. Import the component file
import LandingPage from './LandingPage.jsx';

// 2. Import its dedicated CSS (if it has one)
// Note: If you are using Tailwind CSS exclusively, you might not need this line.
// But if LandingPage.jsx uses a file like LandingPage.css, import it here.
import './LandingPage.css'; 

function App() {
  return (
  <LandingPage />
);
}

export default App;