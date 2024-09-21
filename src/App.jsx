import "./App.css";
import CatalogPage from "./pages/Catalog/CatalogPage";
import Homepage from "./pages/HomePage/HomePage";
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/catalog" element={<CatalogPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
