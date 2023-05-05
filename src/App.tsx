import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import Products from './pages/Products';

function App() {

  const router = createBrowserRouter([
    {path: '/', element: <RootLayout />, children: [
      {index: true, element: <HomePage />,},
      {path: '/allProducts', element: <Products />,}
    ]}
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
