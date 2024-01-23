import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import Login from "./Pages/Login";
import {Provider} from 'react-redux';
import {store} from "./Redux/store";
import Profile from "./Pages/Profil";
import Error from "./Components/Error/error";
import ProtectedRoute from "./Components/ProtectedRoute/protectedRoute";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Provider store ={store}>
                    <Header/>
                <Routes>
                    <Route path= "/" element={<Home />} />
                    <Route path= "/login" element={<Login />} />
                    <Route
                        element={
                          <ProtectedRoute>
                              <Profile />
                          </ProtectedRoute>} >
                        <Route path = "/profile" element={<Profile />} />
                    </Route>
                    <Route path="*" element={<Error />} />
                </Routes>
            </Provider>
            <Footer />
        </Router>
    </React.StrictMode>
);

