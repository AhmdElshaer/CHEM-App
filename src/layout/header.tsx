import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-stone-900 text-white font-sans-['Roboto']">
      <div className="container mx-auto pt-4 bg-stone-900">
            <ul className="flex justify-end mb-2 space-x-4 text-xs text-neutral-600">
              <li className="hover:text-white">Log In</li>
              <li className="hover:text-white">Create New Acount</li>
              <li className="hover:text-white">Check out</li>
              </ul>
        <div className="flex between justify-center items-center">
          <div className="flex-1">
          <h1>LOGO</h1>
          </div>
          <div className="flex-1 rounded">
            <form>
              <input type='text'/>
              <button className="bg-lime-500 px-1">Search</button>
            </form>
          </div>
          <div className="flex justify-center flex-col w-40 rounded bg-lime-500">
            <div>Cart</div>
            <span className="block">0</span>
            </div>
        </div>

        <div className="navigator h-10 mt-3 bg-gradient-to-t from-black via-neutral-800 to-neutral-700 rounded ">
          <ul className="flex justify-end space-x-4 text-s items-center">
            <li className="hover:text-lime-500"><NavLink to={'/'}>Home</NavLink></li>
            <li className="hover:text-lime-500">Catalog</li>
            <li className="hover:text-lime-500"><NavLink to={'/allProducts'}>All products</NavLink></li>
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