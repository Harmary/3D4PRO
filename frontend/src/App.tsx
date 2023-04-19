import { ThemeProvider } from '@emotion/react';
import { Route, Routes } from 'react-router';
import './App.css';
import { Layout } from './layout/layout';
import MainPage from './pages/main/main';
import theme from './theme'
import ShopPage from './pages/shop/shop';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <Routes>
            <Route path='/' element={<MainPage />} />
          <Route path='/shop' element={<Layout><ShopPage /></Layout>} />          
          </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
