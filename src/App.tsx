import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import AuthProvider, { useAuth } from "./Components/Auth";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import PageA from "./Components/PageA";
import PageB from "./Components/PageB";
import PageC from "./Components/PageC";
import { AlreadyAuth, RequireAuth } from "./Components/ProtectedAuth";


function App() {
  const auth = useAuth()
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route index element={<PageB />} />
          <Route path="page-a" element={<RequireAuth><PageA /></RequireAuth>} />
          <Route path="page-b" element={<PageB />} />
          <Route path="page-c" element={<RequireAuth><PageC /></RequireAuth>} />
          <Route path="login" element={<AlreadyAuth><Login /></AlreadyAuth>} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
