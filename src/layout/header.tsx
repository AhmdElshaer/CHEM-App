import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="bg-stone-900 text-white font-sans-['Roboto'] font-normal text-base">
      <div className="container mx-auto pt-4 bg-stone-900">
            <ul className="flex justify-end mb-2 space-x-4 text-xs text-neutral-600">
              <li className="hover:text-white">Log In</li>
              <li className="hover:text-white">Create New Acount</li>
              <li className="hover:text-white">Check out</li>
              </ul>
        <div className="flex justify-between items-center">
          <div className="">
          <h1>LOGO</h1>
          </div>
          <div>
            <form className="flex justify-center items-center rounded-md">
              <input type='text' className="p-1.5 rounded-l-md"/>
              <button className="bg-lime-500 p-1.5 px-6 rounded-r-md">Search</button>
            </form>
          </div>
          <div className="flex justify-center items-center flex-col w-40 rounded bg-lime-500 p-3">
            <div className="font-medium text-2xl">
              <span><FontAwesomeIcon icon={faCartShopping} /></span>
              Cart
              </div>
            <span className="block">0 Items</span>
            </div>
        </div>

        <div className="navigator p-5 mt-3 bg-gradient-to-b from-stone-700 to-black rounded">
          <ul className="flex justify-end space-x-4 text-s items-center">
            <li className="hover:text-lime-500"><NavLink to={'/'} className={({isActive}) => isActive ? "active" : ''} end>Home</NavLink></li>
            <li className="hover:text-lime-500">Catalog</li>
            <li className="hover:text-lime-500"><NavLink to={'/allProducts'} className={({isActive}) => isActive ? "active" : ''} end>All products</NavLink></li>
            <li className="hover:text-lime-500">About Us</li>
            <li className="hover:text-lime-500">Documentation</li>
            <li className="hover:text-lime-500">Contact US</li>
          </ul>
        </div>
      </div>
    </header>
)
}

export default Header;