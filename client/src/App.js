import './App.css';
import { Route, Router, Routes  } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Create from './components/Create/Create';
import { Navbar } from './components/Navbar/Navbar';
import Detail from './components/Detail/Detail';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
        {/* <Navbar></Navbar> */}
          <Routes>
            <Route exact path='/' element={<LandingPage/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/create' element={<Create/>}/>
            <Route path='/4' element={<Detail/>}></Route>
            <Route path='/test' element={<Home/>}></Route>
          </Routes>
    </div>
  );
}

export default App;
