import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage  from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import UpdateDetailsPage from './pages/UpdateDetailsPage';
import SuccessPage from './pages/SuccessPage';
import ProfilePage from './pages/ProfilePage';
import SavedCardsPage from './pages/SavedCardsPage';
import BookedCardsPage from './pages/BookedCardsPage';
import Error404Page from './pages/Error404Page';
import CreateCardPage from './pages/CreateCardPage';
import UserLoginProtect from './auth/UserLoginProtect';
import UserRouteProtect from './auth/UserRouteProtect';
import UpdateBookedCardPage from './pages/UpdateBookedCardPage';
import CardDetailsViewPage from './pages/CardDetailsViewPage';
import CardDetailsViewPage1 from './pages/CardDetailsViewPage1';
import CardDetailsViewPage2 from './pages/CardDetailsViewPage2';
import CardDetailsViewPage3 from './pages/CardDetailsViewPage3';
import CardDetailsViewPage4 from './pages/CardDetailsViewPage4';
import CardDetailsViewPage5 from './pages/CardDetailsViewPage5';
import CardDetailsViewPage6 from './pages/CardDetailsViewPage6';
import CardDetailsViewPage7 from './pages/CardDetailsViewPage7';
import CardDetailsViewPage8 from './pages/CardDetailsViewPage8';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path='/' element={<LandingPage/>} />
        <Route path='/profile-view/:id' element={<CardDetailsViewPage/>} />
        <Route path='/profile-view1/:id' element={<CardDetailsViewPage1/>} />
        <Route path='/profile-view2/:id' element={<CardDetailsViewPage2/>} />
        <Route path='/profile-view3/:id' element={<CardDetailsViewPage3/>} />
        <Route path='/profile-view4/:id' element={<CardDetailsViewPage4/>} />
        <Route path='/profile-view5/:id' element={<CardDetailsViewPage5/>} />
        <Route path='/profile-view6/:id' element={<CardDetailsViewPage6/>} />
        <Route path='/profile-view7/:id' element={<CardDetailsViewPage7/>} />
        <Route path='/profile-view8/:id' element={<CardDetailsViewPage8/>} />



        <Route element={<UserLoginProtect/>}>
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        </Route>

        <Route element={<UserRouteProtect/>}>
        <Route path='/home' element={<HomePage/>} />
        <Route path='/update-details' element={<UpdateDetailsPage/>} />
        <Route path='/edit-bookedCard' element={<UpdateBookedCardPage/>} />
        <Route path='/order-success' element={<SuccessPage/>} />
        <Route path='/profile' element={<ProfilePage/>} />
        <Route path='/saved-cards' element={<SavedCardsPage/>} />
        <Route path='/booked-cards' element={<BookedCardsPage/>} />
        <Route path='/error-404' element={<Error404Page/>} />
        <Route path='/create-card' element={<CreateCardPage/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
