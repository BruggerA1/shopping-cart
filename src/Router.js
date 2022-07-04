import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import ProductPage from "./components/ProductPage/ProductPage";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop />}/>
				<Route 
					path="/shop/flower" 
					element={<ProductPage category={'Flower'}/>}
				/>
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;