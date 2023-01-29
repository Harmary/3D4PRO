import { Route, Routes } from 'react-router';
import './App.css';
import { Layout } from './layout/layout';
import MainPage from './pages/main/main';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/main' element={<MainPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
