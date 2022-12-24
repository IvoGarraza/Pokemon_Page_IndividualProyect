import './App.css';
import { Route, Router, Routes  } from "react-router-dom";
import LandingPage from './components/LandingPage.jsx';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path='/' element={<LandingPage/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
          </Routes>
    </div>
  );
}

export default App;
