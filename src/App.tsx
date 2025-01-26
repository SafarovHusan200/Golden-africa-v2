import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import loading from "./assets/loading.gif";

// Lazy load components
const Layout = lazy(() => import("./components/layout"));
const HomePage = lazy(() => import("./pages/home"));
const NFTPage = lazy(() => import("./pages/nft"));
const PurchaseNFT = lazy(() => import("./pages/change-nft"));
const Error404Page = lazy(() => import("./pages/not-found"));
const AboutPage = lazy(() => import("./pages/about"));
const GoldenTrainglePage = lazy(() => import("./pages/golden-trangle"));
const News = lazy(() => import("./pages/news"));
const RufunsGold = lazy(() => import("./pages/rufuns-gold"));
const SingleNews = lazy(() => import("./pages/single-news"));
const GalleryPage = lazy(() => import("./pages/gallery"));
const ContactPage = lazy(() => import("./pages/contact"));
const AccessTokenPage = lazy(() => import("./pages/access-token"));

const App = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="loader">
            <img src={loading} alt="loading" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="nft" element={<NFTPage />} />
            <Route path="purchases" element={<PurchaseNFT />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="golden-triangle" element={<GoldenTrainglePage />} />
            <Route path="rufuns-gold" element={<RufunsGold />} />
            <Route path="news" element={<News />} />
            <Route path="news/:id" element={<SingleNews />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="access-token" element={<AccessTokenPage />} />
          </Route>
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
