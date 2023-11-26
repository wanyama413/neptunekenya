// import "./x.css";
import "./App.css";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { Routes, Route } from "react-router-dom";
import All from "./All";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Article from "./pages/Article";
import NewsArticle from "./pages/NewsArticle";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<All />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="articles/:title" element={<Article />} />
        <Route path="news/:ID" element={<NewsArticle />} />
      </Route>
    </Routes>
  );
}

export default App;
