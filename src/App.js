import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Chat from "./pages/Chat";
import Top from "./pages/Top";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/main" element={<Main />} />
      <Route path="/chat/:roomId" element={<Chat />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
