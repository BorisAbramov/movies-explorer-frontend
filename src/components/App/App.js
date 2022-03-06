import '../../index.css';
import './app.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import HeaderMain from '../HeaderMain/HeaderMain';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';



function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="page page_align_center">
      <Routes>
        <Route path="/" element={
          <>
            <HeaderMain loggedIn={loggedIn} />
            <Main />
            <Footer />
          </>
        } />
      <Route path="/movies" element={
          <>
            <Header loggedIn={loggedIn} />
            <Movies />
            <Footer />
          </>
        } />  
      <Route path="/saved-movies" element={
          <>
            <Header loggedIn={loggedIn} />
            <SavedMovies />
            <Footer />
          </>
        } />
      <Route path="/signup" element={
          <>
            <Register />
            <Footer />
          </>
        } />
        <Route path="/signin" element={
          <>
            <Login />
            <Footer />
          </>
        } />
        <Route path="/profile" element={
          <>
            <Header loggedIn={loggedIn} />
            <Profile />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
