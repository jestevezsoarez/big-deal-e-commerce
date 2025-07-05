import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context/context";
import Home from "../Home/home";
import MyAccount from "../MyAccount/myAccount";
import MyOrder from "../MyOrder/myOrder";
import MyOrders from "../MyOrders/myOrders";
import NotFound from "../NotFound/notFound";
import SignIn from "../SignIn/signIn";
import Navbar from "../../components/Navbar/navbar";
import CheckOutSideMenu from "../../components/CheckoutSideMenu/checkOutSideMenu";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckOutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
