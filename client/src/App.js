import './App.css';
import { Route, Router, Routes  } from "react-router-dom";
import LandingPage from './components/LandingPage.jsx';
import Home from './components/Home'
import Create from './components/Create/Create';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<LandingPage/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/create' element={<Create/>}/>
          </Routes>
    </div>
  );
}

export default App;
