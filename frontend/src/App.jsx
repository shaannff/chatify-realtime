import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDJ2MkgzNnYtMnpNMzYgMjZoMnYySDM2di0yek0yNiAzNGgyVjM2SDI2di0yek0yNiAyNmgyVjI4SDI2di0yek0xNiAzNGgyVjM2SDE2di0yek0xNiAyNmgyVjI4SDE2di0yek02IDM0aDJ2Mkg2di0yek02IDI2aDJWMjhINnYtMnpNMzYgMTZoMlYxOEgzNnYtMnpNMjYgMTZoMlYxOEgyNnYtMnpNMTYgMTZoMlYxOEgxNnYtMnpNNiAxNmgydjJINnYtMnpNMzYgNmgydjhIMzZWNnpNMjYgNmgydjhIMjZWNnpNMTYgNmgydjhIMTZWNnpNNiA2aDJ2OEg2VjZ6TTQ2IDM0aDJ2Mkg0NnYtMnpNNDYgMjZoMnYySDQ2di0yek00NiAxNmgydjJINDR2LTJ6TTQ2IDZoMnY4SDQ2VjZ6TTU2IDM0aDJ2Mkg1NnYtMnpNNTYgMjZoMnYySDU2di0yek01NiAxNmgydjJINTZ2LTJ6TTU2IDZoMnY4SDU2VjZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
