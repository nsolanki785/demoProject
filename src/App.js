import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home';
import DisplayPage from './pages/display';




function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<HomePage/>} />
       <Route path='/display' element={<DisplayPage/>} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
