import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = "underline underline-offset-4";
  const linkStyle = "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium";

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-base font-light bg-gray-800">
      <ul className="flex items-center gap-3 text-white">
        <li className="rounded-md hover:bg-gray-700">
          <NavLink to="/">
            <img src="../public/logo.png" alt="Big Deal Logo" className="w-12" />
          </NavLink>
        </li>
        <li className={linkStyle}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li className={linkStyle}>
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li className={linkStyle}>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li className={linkStyle}>
          <NavLink
            to="/jewelery"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Jewelery
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-blue-400 font-medium">javierdaniloestevez@gmail.com</li>
        <li className={linkStyle}>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li className={linkStyle}>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li className={linkStyle}>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li className="text-white">🛒 0</li>
      </ul>
    </nav>
  );
};

export default Navbar;
