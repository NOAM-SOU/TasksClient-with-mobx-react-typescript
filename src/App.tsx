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
import MyContext from "./context/mi.context";
import Header from "./components/header/header";

const { authStore } = rootStores;

function App() {
  const { isUserLoggedIn } = authStore;
  console.log(`isUserLoggedIn: ${isUserLoggedIn}`);

  return (
    <div className="App container">
      <BrowserRouter>
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
    </div>
  );
}

export default observer(App);
