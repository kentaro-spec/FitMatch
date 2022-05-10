import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Chat from './pages/Chat';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/chat/:id" element={<Chat />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;