import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import MovieDetails from './pages/MovieDetails.jsx'
import PersonDetails from "./pages/PersonDetails";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Video from "./pages/Video";


function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/account' element={<ProtectedRoute> <Account /></ProtectedRoute>} />
          <Route path='/details/:id' element={<MovieDetails />} />
          <Route path='/person/:id' element={<PersonDetails />} />
          <Route path='/details/video' element={<Video />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
