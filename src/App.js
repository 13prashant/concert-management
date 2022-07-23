import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages
import Welcome from './pages/welcome/Welcome';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Lyrics from './pages/lyrics/Lyrics';
import Concerts from './pages/concerts/Concerts';
import Concert from './pages/concert/Concert';
import CreateConcert from './pages/createConcert/CreateConcert';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/lyrics" element={<Lyrics />} />
        <Route path="/concerts" element={<Concerts />} />
        <Route path="/concerts/:concert" element={<Concert />} />
        <Route path="/concerts/create-concert" element={<CreateConcert />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
