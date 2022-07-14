import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import ProductPage from "./components/ProductPage/ProductPage";
import ItemPage from "./components/ItemPage/ItemPage";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop />}/>
				<Route path="/shop/:id" element={<ProductPage />} />
				<Route path="/shop/:cat/:id" element={<ItemPage />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;