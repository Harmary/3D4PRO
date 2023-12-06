import { ThemeProvider } from '@emotion/react';
import { Route, Routes } from 'react-router';

import './App.css';
import 'styles/variables.css';

import { Layout } from './layout/layout';
import {MainPage} from 'pages/MainPage';
import theme from './theme'
import ShopPage from './pages/shop/shop';
import LoginPage from './pages/login/login';
import RegisterPage from './pages/register/register';
import AccountPage from './pages/account/account';
import AdminPanel from './pages/adminpanel/adminPanel';
import AddNewModelForm from './pages/addModel/addNewModelForm';
import ProtectedRoute from './components/common/protectedRoute';
import { FormLayout } from './layout/formsLayout';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/shop' element={<Layout><ShopPage /></Layout>} />
          <Route path='/login' element={<FormLayout><LoginPage /></FormLayout>} />
          <Route path='/register' element={<FormLayout><RegisterPage /></FormLayout>} />
          <Route path='/account/:guid'
            element={
              <ProtectedRoute role={['user', 'modeler']} redirectPath={'/'}>
                <Layout><AccountPage /></Layout>
              </ProtectedRoute>
            }
          />
          <Route path='/adminpanel'
            element={
              <ProtectedRoute role={['admin']} redirectPath={'/login'}>
                <Layout><AdminPanel /></Layout>
              </ProtectedRoute>
            }
          />
          <Route path='/addnewmodel'
            element={
              <ProtectedRoute role={['modeler']} redirectPath={'/'}>
                <FormLayout>
                  <AddNewModelForm />
                </FormLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
