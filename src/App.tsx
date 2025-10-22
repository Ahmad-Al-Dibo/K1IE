import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Import from "./pages/import";
import Export from "./pages/Export";
import ProductDetails from "./pages/product_details";
import Blog from "./pages/blog";
import BlogDetails from "./pages/blog_details";
import Cart from "./pages/cart";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/importsection" element={<Import />} />
          <Route path="/exportsection" element={<Export />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogdetails" element={<BlogDetails />} />
          <Route path="/cart" element={<Cart />} />
          {/* Render 404 page for unknown routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
