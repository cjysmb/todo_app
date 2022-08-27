
import './App.css';
import Home from './screen/home/Home';
import Main from './components/Main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Styles 
import './styles/css/home/home.css';
import './styles/css/global/main.css';
import './styles/css/global/date.css';
import NotFound from './components/404/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <Main>
            <Home />
          </Main>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
