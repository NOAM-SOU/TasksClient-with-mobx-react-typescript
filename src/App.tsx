import { observer } from "mobx-react";
import "./App.css";
import Home from "./pages/home/home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signUp/signUp";
import Login from "./pages/login/login";
import { rootStores } from "./stores/main";
import TaskDetails from "./pages/taskDetails/taskDetails";
import NewTask from "./pages/newTask/newTask";
import EditTask from "./pages/editTask/editTask";
import { MyContext } from "./context/mi.context";
import { useState } from "react";
import SideNav from "./components/sideNav/sideNav";
import Header from "./components/header/header";

const { authStore } = rootStores;

function App() {
  const { isUserLoggedIn } = authStore;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(`isUserLoggedIn: ${isUserLoggedIn}`);

  return (
    <div className="App container">
      <MyContext.Provider
        value={{
          setState: setIsMenuOpen,
          state: isMenuOpen,
        }}
      >
        <BrowserRouter>
          {isUserLoggedIn && <Header />}
          <Routes>
            <Route
              path="/"
              element={isUserLoggedIn ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={isUserLoggedIn ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/signup"
              element={isUserLoggedIn ? <Navigate to="/" /> : <SignUp />}
            />
            <Route path="/details/:id" element={<TaskDetails />} />
            <Route path="/new" element={<NewTask />} />
            <Route path="/edit/:id" element={<EditTask />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default observer(App);
