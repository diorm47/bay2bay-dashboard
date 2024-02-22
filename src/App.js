import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/nav-bar/nav-bar";
import Sidebar from "./components/sidebar/sidebar";
import "./index.css";
import CommandPage from "./pages/comand-page/comand-page";
import ShopsPage from "./pages/shops-page/shops-page";
import AdsPage from "./pages/ads-page/ads-page";
import PrefixPage from "./pages/prefix-themes/prefix-page";
import IconsBanners from "./pages/icons-banners/icons-banners";
import UsersPage from "./pages/users-page/users-page";
import NodePage from "./pages/nodes-page/nodes-page";
import { namePage } from "./components/name-page";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <NavBar />
      <div className="page_content">
        <div className="page_content_title">
          <h2>Админ-панель / {namePage(location.pathname)}</h2>
        </div>
        <div className="page_content_wrapper">
          <Sidebar />
          <div className="page_content_pages">
            <Routes>
              {/* <Route path="/" element={<CommandPage />} /> */}
              <Route path="/team" element={<CommandPage />} />
              <Route path="/shops" element={<ShopsPage />} />
              <Route path="/ads" element={<AdsPage />} />
              <Route path="/prefix" element={<PrefixPage />} />
              <Route path="/icons-banners" element={<IconsBanners />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/nodes" element={<NodePage />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
