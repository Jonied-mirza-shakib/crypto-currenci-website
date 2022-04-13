import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home'
import About from './Component/About/About'
import CoinsPage from './Component/CoinsPage/CoinsPage'
import Header from './Component/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './Component/NotFound/NotFound'
import CardDetails from './Component/CardDetails/CardDetails';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';
import RequireAuth from './Component/RequireAuth/RequireAuth';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <RequireAuth><Home /></RequireAuth>
        } />
        <Route path="/about" element={
          <RequireAuth><About /></RequireAuth>
        } />
        <Route path="/coin" element={
          <RequireAuth><CoinsPage /></RequireAuth>
        } />
        <Route path="/card-details/:id" element={
          <RequireAuth><CardDetails /></RequireAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
