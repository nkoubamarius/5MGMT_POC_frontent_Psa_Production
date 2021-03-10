import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/Login/Login";
import Home from "./pages/Home";
import Supplier from "./pages/Supplier";
import { AuthProvider } from "./context/auth";
import AddSupplier from "./pages/AddSupplier";

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Router>
          <Route exact path="/addsupplier" component={AddSupplier} />
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/supplier" component={Supplier} />
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
