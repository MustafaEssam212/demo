import './styles/main.scss';
import { BrowserRouter as Router, Routes } from "react-router-dom";
import appRoutes from './routes/appRoutes';

function App() {
  return (
    <Router>
      <Routes>{appRoutes}</Routes>
    </Router>
  );
}

export default App;
