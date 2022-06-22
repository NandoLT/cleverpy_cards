import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { CardsContainer } from '../components/Pages/Home/CardsContainer';
import { Login } from '../components/Pages/Login/Login';
import { NotFound } from '../components/commons/NotFound';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
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
            element={<PrivateRoute component={CardsContainer} />}
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
          element={ <Login />}
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
