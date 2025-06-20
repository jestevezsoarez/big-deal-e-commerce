import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context/context";

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";
  const linkStyle = "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium";

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-base font-light bg-gray-800 top-0">
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
        <li className="font-sm">
          <span className="text-white">User: </span>
          <span className="text-blue-400">javierdaniloestevez@gmail.com</span>
        </li>
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
        <li className={`text-white flex gap-1 ${linkStyle}`}>
          <ShoppingCartIcon 
            className="size-6 text-gray-300" /> 
            <div>{context.count}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
