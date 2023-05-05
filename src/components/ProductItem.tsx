
interface product {
  id: string;
  title: string;
  category: string;
  discription: string;
  price: string;
  image1: string;
  image2: string;
  image3: string;
}

const ProductItem: React.FC<product> = (props) => {
  // const {id, title, category, discription, price, image1, image2, image3} = props;
  return(
    <li key={props.id}>
      <img src={require(props.image1)} alt={props.image2}/>
      <h3>{props.title}</h3>
      <h3>`${props.price} $`</h3>
      <h5>{props.category}</h5>
      <p>{props.discription}</p>
    </li>
  )
}

export default ProductItem;