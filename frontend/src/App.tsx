import { ThemeProvider } from '@emotion/react';
import { Route, Routes } from 'react-router';
import './App.css';
import { Layout } from './layout/layout';
import MainPage from './pages/main/main';
import theme from './theme'
import ShopPage from './pages/shop/shop';
import LoginPage from './pages/login/login';
import RegisterPage from './pages/register/register';
import AccountPage from './pages/account/account';
import AdminPanel from './pages/adminpanel/adminPanel';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/shop' element={<Layout><ShopPage /></Layout>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/account' element={<Layout><AccountPage /></Layout>} />
          <Route path='/adminpanel' element={<Layout><AdminPanel /></Layout>} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
