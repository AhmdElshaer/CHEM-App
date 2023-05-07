import { ReactElement, useEffect, useState } from 'react';
import { json } from 'react-router-dom';
import ProductItem from '../components/ProductItem';

interface ProductType {
  id: string;
  title: string;
  category: string;
  description: string;
  price: string;
  image1: string;
  image2: string;
  image3: string;
}

const Products: React.FC = (): ReactElement => {
  const [allProducts, setAllProducts] = useState<ProductType[]>([]);
  
  useEffect( () => {
    async function fetchAllProduct () {
      // const fetchAllProduct = async (): Promise<product[]> => {

        const allProducts: ProductType[] = [];
      const response = await fetch('https://reacthttp-50bcb-default-rtdb.firebaseio.com/data.json');
      if (!response.ok) {
        throw json({ message: 'Could not fetch .' });
      } else {
        const resData = await response.json();
        // console.log(resData);
        for (const key in resData) {
          allProducts.push({
            id: resData[key].id,
            title: resData[key].title,
            category: resData[key].category,
            description: resData[key].description,
            price: resData[key].price,
            image1: resData[key].image1,
            image2: resData[key].image2,
            image3: resData[key].image3,
          })
        }
      }
      setAllProducts(allProducts);
    }
    fetchAllProduct();
  },[])

  console.log(allProducts)
  return(
    <section className='flex flex-col'>
    <div className='border-2 rounded-t-lg px-2 py-4 my-2 bg-gradient-to-b from-white via-white to-stone-700'>Products</div>
    <ul className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
      {allProducts.map((product: ProductType) => (
        <ProductItem 
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        category={product.category}
        description={product.description}
        image1={product.image1}
        image2={product.image2}
        image3={product.image3}
        />
      ))}
    </ul>
    </section>
  )
}

export default Products;