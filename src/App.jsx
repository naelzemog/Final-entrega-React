import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/header.jsx";
import { ItemListContainer } from "./components/itemlistcontainer/itemlistcontainer.jsx";
import { ItemDetailContainer } from "./components/itemdetailcontainer/itemdetailcontainer.jsx";
import { CartView } from "./components/cart/cartview.jsx";
import { ProductFormContainer } from "./components/adminComponents/productform/productformcontainer.jsx";
import { ProductSuccess } from "./components/adminComponents/productsuccess/productsuccess.jsx";
import { Footer } from "./components/footer/footer.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          {/* ------------------------- PÚBLICAS ------------------------- */}
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />

          {/* ----------------------- ALTA DE PRODUCTOS ------------------ */}
          <Route path="/admin" element={<ProductFormContainer />} />
          <Route
            path="/admin/products/success/:id"
            element={<ProductSuccess />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
