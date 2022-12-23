import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes location>
          <Route exact path='/' element={<LandingPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
