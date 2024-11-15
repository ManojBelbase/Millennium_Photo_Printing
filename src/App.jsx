import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import IDCards from "./Components/product/ID Cards/IDCards";
import Banners from "./Components/product/Banners/Banners";
import Canvas from "./Components/product/Canvas/Canvas";
import BusinessCards from "./Components/product/BusinessCards/BusinessCards";
import PhotoFrame from "./Components/product/photoFraming/PhotoFrame";
import SingleFrame from "./Components/product/photoFraming/SingleFrame";
import Login from "./auth/Login";
import CreateFrame from "./Components/product/photoFraming/CreateFrame";
import UpdateFrame from "./Components/product/photoFraming/UpdateFrame";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admin/login" element={<Login />} />

        <Route path="/shop/photo_frames" element={<PhotoFrame />} />
        <Route path="/shop/photo_frames/:id" element={<SingleFrame />} />

        <Route path="/shop/ID_Cards" element={<IDCards />} />
        <Route path="/shop/banners" element={<Banners />} />
        <Route path="/shop/canvas" element={<Canvas />} />
        <Route path="/shop/business_cards" element={<BusinessCards />} />

        {/*For Admin  */}

        <Route path="/admin/create_frame" element={<CreateFrame />} />
        <Route path="/admin/update_frame/:id" element={<UpdateFrame />} />
      </Route>
    </Routes>
  );
}

export default App;
