import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import { initGA, logPageView } from "./services/analytics";

function AppWrapper() {

  useEffect(() => {
    const onLoad = () => {
      initGA();
      logPageView(window.location.pathname + window.location.search);
    };

    // Retrasá la inicialización hasta que cargue todo el sitio
    window.addEventListener("load", onLoad);

    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

    </Layout>
  );
}

export default function App() {
  return (
    <AppWrapper />
  );
}