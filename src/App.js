import logo from './logo.svg';
import './App.css';
import Addstudent from './components/Addstudent';
import Searchstudent from './components/Searchstudent';
import Deletestudent from './components/Deletestudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewall from './components/Viewall';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Addstudent/> }/>
      <Route path="/search" element={ <Searchstudent/> }/>
      <Route path="/delete" element={ <Deletestudent/> }/>
      <Route path="/view" element={ <Viewall/> }/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
