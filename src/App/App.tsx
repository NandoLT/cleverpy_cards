import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { CardsContainer } from '../components/Pages/Home/CardsContainer';
import { LoginCotainer } from '../components/Pages/Login/LoginCotainer';
import { NotFound } from '../components/commons/NotFound';
import Layout from '../components/commons/layout/Layout';

import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route 
            path="/"
            element={ <CardsContainer />}
          />

          <Route 
            path="/404" 
            element={ <NotFound /> }
          />

          <Route 
            path="*" 
            element={ <Navigate to='404' /> } 
          />

        <Route 
          path="/login"
          element={ <LoginCotainer />}
          />
        
        </Routes>
      </Layout>

      <ToastContainer
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
      />
    </div>
  );
}

export default App;
