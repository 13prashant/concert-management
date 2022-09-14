import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Contexts
import { useAuthContext } from './hooks/useAuthContext';
// Components
import Layout from './components/layout/Layout';
// Pages
import Welcome from './pages/Welcome';
import Lyrics from './pages/Lyrics';
import Concerts from './pages/Concerts';
import Concert from './pages/Concert';
import CreateConcert from './pages/CreateConcert';
import PrivateRoutes from './components/PrivateRoutes';

function App() {
  const { isAuthReady } = useAuthContext();

  return (
    isAuthReady && (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />

          <Route element={<Layout />}>
            <Route path="/lyrics" element={<Lyrics />} />

            <Route element={<PrivateRoutes />}>
              <Route path="/concerts" element={<Concerts />} />
              <Route
                path="/concerts/:concertTitle/:concertId"
                element={<Concert />}
              />
              <Route
                path="/concerts/create-concert"
                element={<CreateConcert />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  );
}

export default App;
