import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import { Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Layout>
        <Route path="/" element={<HomePage />} />
      </Layout>
    </>
  );
}
