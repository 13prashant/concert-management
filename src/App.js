import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Layout from './components/layout/Layout';
// Pages
import Welcome from './pages/welcome/Welcome';
import Lyrics from './pages/lyrics/Lyrics';
import Concerts from './pages/concerts/Concerts';
import Concert from './pages/concert/Concert';
import CreateConcert from './pages/createConcert/CreateConcert';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user } = useAuthContext();
  console.log(user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route element={<Layout />}>
          <Route path="/lyrics" element={<Lyrics />} />
          <Route path="/concerts" element={<Concerts />} />
          <Route path="/concerts/:concert" element={<Concert />} />
          <Route path="/concerts/create-concert" element={<CreateConcert />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
