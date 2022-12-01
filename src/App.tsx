import { observer } from "mobx-react";
import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signUp";
import Login from "./pages/login";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default observer(App);
