import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Documents from "./pages/Documents";
import NoPage from "./pages/NoPage";



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" index element={<NoPage />} />
            <Route path="Projects" index element={<Projects />} />
            <Route path="Skills" index element={<Skills />} />
            <Route path="Documents" index element={<Documents />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
