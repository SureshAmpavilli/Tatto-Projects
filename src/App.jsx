import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterAdvocate from "./pages/RegisterAdvocate";
import ClientRegistration from "./pages/ClientRegistration";
import Header from "./components/Header";

function Layout({ children }) {
  const { pathname } = useLocation();
  const hideHeader = ["/login", "/register"].includes(pathname);
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      {!hideHeader && <Header />}
      <main>{children}</main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/advocate" element={<RegisterAdvocate />} />
          <Route path="/register/client" element={<ClientRegistration />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
