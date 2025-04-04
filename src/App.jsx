import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import ArticlesList from "./components/ArticlesList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ArticlePage from "./components/ArticlePage";
import LoginPage from "./components/LoginPage";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
