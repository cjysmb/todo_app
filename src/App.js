
//Styles 
import './App.css';
import './styles/css/home/home.css';
import './styles/css/global/main.css';
import './styles/css/global/date.css';
import './styles/css/dashboard/dashboard.css';
//plugins
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//screens
import Home from './screen/home/Home';
import Main from './components/Main/Main';
import NotFound from './components/404/NotFound';
import Dashboard from './screen/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <Main>
            <Home />
          </Main>
        } />
        <Route path='/dashboard' element={
          <Main>
            <Dashboard />
          </Main>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
