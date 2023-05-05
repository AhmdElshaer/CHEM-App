import { useEffect, useState } from 'react';
import { json } from 'react-router-dom';
import ProductItem from '../components/ProductItem';

interface productType {
  id: string;
  title: string;
  category: string;
  discription: string;
  price: string;
  image1: string;
  image2: string;
  image3: string;
}

const Products: React.FC = () => {
  const allProducts:{}[] = [];

  useEffect( () => {
    async function fetchAllProduct () {
      // const fetchAllProduct = async (): Promise<product[]> => {
      const response = await fetch('https://reacthttp-50bcb-default-rtdb.firebaseio.com/data.json');
      if (!response.ok) {
        throw json({ message: 'Could not fetch .' });
      } else {
        const resData = await response.json();
        console.log(resData);
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
    }
    fetchAllProduct();
  })

  console.log(allProducts)
  return(
    <ul>
      {allProducts.map((product: {}) => (
        <ProductItem 
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        category={product.category}
        discription={product.discription}
        image1={product.image1}
        image2={product.image2}
        image3={product.image3}
        />
      ))}
    </ul>
  )
}

export default Products;