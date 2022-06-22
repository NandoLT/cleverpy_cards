import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { CardsContainer } from '../components/Pages/Home/CardsContainer';
import { Login } from '../components/Pages/Login/Login';
import { NotFound } from '../components/commons/NotFound';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import Layout from '../components/commons/layout/Layout';
import storage from '../utils/storage';

import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/App.css';

function App() {

  const accessGranted = storage.get('auth');
  const isLogged = !!accessGranted ;

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route 
            path="/"
            element={<PrivateRoute isLogged={isLogged} component={CardsContainer} />}
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
          element={ <Login isLogged={isLogged}/>}
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
