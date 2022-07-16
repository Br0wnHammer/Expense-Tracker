import React from 'react';
import {AuthProvider} from "./context/AuthProvider"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import TransactionContextProvider from './context/TransactionContext';
import Index from './components/Index';

function App() {
  return (
    <Router>
      <AuthProvider>
        <TransactionContextProvider>
          <Routes>
            <PrivateRoute exact path="/expense" component={Index} />
            <Route path ="/welcome" element={<Login/>} />
          </Routes>
        </TransactionContextProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
