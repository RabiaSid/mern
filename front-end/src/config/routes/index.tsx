import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppProduct from "../../pages/Product";
import ProductForm from "../../pages/ProductForm";
import ProductDetail from "../../pages/productDetail";
import SignIn from "../../pages/auth/sign-in-and-up";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="appProduct" element={<AppProduct />} />
          <Route path='product-form' element={<ProductForm />}/>
          <Route path="appProduct/:id" element={<ProductDetail />} />
        <Route path='product-form/:id' element={<ProductForm />}/> 
        </Routes>
      </Router>
    </>
  );
}
