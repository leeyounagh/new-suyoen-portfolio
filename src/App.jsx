import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Main from "./components/Main";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Career from "./pages/Career";
import Education from "./pages/Education";
import SideBar from "./components/SideBar";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isFirstSideBarOpen, setIsFirstSideBarOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="app">
      {pathname !== "/" && (
        <button
          className="sidebar-toggle"
          onClick={() => {
            setIsNavOpen(true);
            setIsFirstSideBarOpen(true);
          }}
        >
          <span className="menu-title">
            <h1>Menu</h1>
          </span>
        </button>
      )}
      {isFirstSideBarOpen && (
        <SideBar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      )}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
        <Route path="/career" element={<Career />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </div>
  );
}

export default App;
