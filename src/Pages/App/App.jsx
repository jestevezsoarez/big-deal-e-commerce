import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../Home/home';
import MyAccount from '../MyAccount/myAccount';
import MyOrder from '../MyOrder/myOrder';
import MyOrders from '../MyOrders/myOrders';
import NotFound from '../NotFound/notFound';
import SignIn from '../SignIn/signIn';
import './App.css'

const AppRoutes = () => {
    let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes;
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
