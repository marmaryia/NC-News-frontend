import { Routes, Route } from "react-router-dom";
import "./App.css";
import ArticlesList from "./components/ArticlesList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ArticlePage from "./components/ArticlePage";
import LoginPage from "./components/LoginPage";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
