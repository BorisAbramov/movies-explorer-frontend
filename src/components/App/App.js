import '../../index.css';
import './app.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Header from '../Header/Header';
import Login from '../Login/Login';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';



function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="page page_align_center">
      <Routes>
        <Route path="/" element={
          <>
            <Header loggedIn={loggedIn} />
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
            <Header loggedIn={loggedIn} />
            <Register />
            <Footer />
          </>
        } />
        <Route path="/signin" element={
          <>
            <Header loggedIn={loggedIn} />
            <Login />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
