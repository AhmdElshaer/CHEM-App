
interface product {
  id: string;
  title: string;
  category: string;
  description: string;
  price: string;
  image1: string;
  image2: string;
  image3: string;
}

const ProductItem: React.FC<product> = (props) => {
  // const {id, title, category, discription, price, image1, image2, image3} = props;
  return(
    <li key={props.id} className="border-2 rounded-t-lg p-2 flex flex-col justify-center items-center">
      <img src={`${props.image1}`} alt={`${props.image2}`}/>
      <h3>{props.title}</h3>
      <h3>{props.price} $</h3>
      <h5>{props.category}</h5>
      <p>{props.description}</p>
      <div>
        <button className="flex justify-center items-center flex-col rounded bg-lime-500 p-2">Add To Cart</button>
      </div>
    </li>
  )
}

export default ProductItem;