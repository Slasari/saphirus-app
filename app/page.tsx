import Header from "./components/header/Header";
import Home from "./components/home/Home"
import Highlights from "./components/highlights/Highlights";
import ProductList from "./components/productList/ProductList";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <Highlights/>
      <ProductList />
      <Footer />
    </div>
  );
}
