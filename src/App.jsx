import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import PhotoFrame from "./Components/product/photoFraming/PhotoFrame";
import SingleFrame from "./Components/product/photoFraming/SingleFrame";
import Login from "./auth/Login";
import CreateFrame from "./Components/product/photoFraming/CreateFrame";
import UpdateFrame from "./Components/product/photoFraming/UpdateFrame";
import IDCardContainer from "./Components/product/ID Cards/IDCardContainer";
import CertificateContainer from "./Components/product/Certificates/CertificateContainer";
import About from "./Pages/About";
import BannerContainer from "./Components/product/Banners/BannerContainer";
import CanvasContainer from "./Components/product/Canvas/CanvasContainer";
import BusinessCardsContainer from "./Components/product/BusinessCards/BusinessCardsContainer";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/shop/photo_frames" element={<PhotoFrame />} />
        <Route path="/shop/photo_frames/:id" element={<SingleFrame />} />
        <Route path="/shop/ID_Cards" element={<IDCardContainer />} />
        <Route path="/shop/banners" element={<BannerContainer />} />
        <Route path="/shop/canvas" element={<CanvasContainer />} />
        <Route
          path="/shop/business_cards"
          element={<BusinessCardsContainer />}
        />
        <Route path="/shop/certificate" element={<CertificateContainer />} />
        {/*For Admin  */}
        <Route path="/admin/create_frame" element={<CreateFrame />} />
        <Route path="/admin/update_frame/:id" element={<UpdateFrame />} />
      </Route>
    </Routes>
  );
}

export default App;
