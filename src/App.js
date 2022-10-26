import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
