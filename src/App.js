import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './Pages/Home'
import { NavData } from './data/NavigationData';

function App() {
  return (
   <div className='App'>
    <BrowserRouter>
    <Navbar/>
    <Home/>
    <Routes>
      {
        NavData.map((item,index)=>(
          <Route key={index} path={item.link} element={item?.component}/> 
        ))
      }
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
