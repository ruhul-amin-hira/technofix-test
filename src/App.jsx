import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CardPage from "./pages/CardPage";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path=":id" element={<CardPage />} />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
