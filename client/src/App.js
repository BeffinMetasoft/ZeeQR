import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import LandingPage from './pages/LandingPage';
import CardDetailsViewPage from './pages/CardDetailsViewPage';
import Error404Page from './pages/Error404Page';
import Card from './components/store/CardContext';
import ReviewQrInterfacePage from './pages/ReviewQrInterfacePage';
import ContactCardInterfacePage from './pages/ContactCardInterfacePage';
// import RouteBasicCardViewPage from './pages/RouteBasicCardViewPage';
import './i18n.js'
import RedirectionQRInterfacePage from './pages/RedirectionQRInterfacePage.js';
import DynamicQRInterfacePage from './pages/DynamicQRInterfacePage.js';


function App() {
  return (
    <Card>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/profile-view/:id' element={<CardDetailsViewPage />} />
          {/* <Route path='/profile/:id' element={<RouteBasicCardViewPage />} /> */}
          <Route path='/reviewQR/:id' element={<ReviewQrInterfacePage />} />
          <Route path='/contact-card/:id' element={<ContactCardInterfacePage />} />
          <Route path='/url/:id' element={<RedirectionQRInterfacePage />} />
          <Route path='/:id' element={<DynamicQRInterfacePage />} />

          <Route path='*' element={<Error404Page />} />
        </Routes>

      </Router>
    </Card>
  );
}

export default App;
