import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import LandingPage from './pages/LandingPage';
import CardDetailsViewPage from './pages/CardDetailsViewPage';
import Error404Page from './pages/Error404Page';
import Card from './components/store/CardContext';


function App() {
  return (
    <Card>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/profile-view/:id' element={<CardDetailsViewPage />} />
          <Route path='*' element={<Error404Page />} />
        </Routes>

      </Router>
    </Card>
  );
}

export default App;
