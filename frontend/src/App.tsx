import { ThemeProvider } from '@emotion/react';
import { Route, Routes } from 'react-router';
import './App.css';
import { Layout } from './layout/layout';
import MainPage from './pages/main/main';
import theme from './theme'


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path='/' element={<MainPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
