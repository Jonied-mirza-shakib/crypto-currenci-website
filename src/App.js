import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home'
import About from './Component/About/About'
import CoinsPage from './Component/CoinsPage/CoinsPage'
import Header from './Component/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './Component/NotFound/NotFound'
import CardDetails from './Component/CardDetails/CardDetails';
import Login from './Component/Contact/Login';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/coin" element={<CoinsPage />} />
        <Route path="/card-details/:id" element={<CardDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
