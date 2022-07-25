import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import SignUp from './pages/SignUp'
import "./App.css";
import CatalogDashboard from "./pages/CatalogDashboard";
import Login from "./pages/Login";
import NotFound from './pages/NotFound'
import {allowedSubdomain} from './assets/utils'


function App() {

  const sub = window.location.hostname.split('.')[0];

  const isAllowedSubdomain = allowedSubdomain.includes(sub);

  
  return (
    <>
      <Header />

      <Routes>
        <Route path="/dashboard" element={<CatalogDashboard/>}/>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
  
    </>
  );
}

export default App;
