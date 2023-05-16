import { ProductType } from "../model/Products";

const ProductItem: React.FC<ProductType> = (props) => {
  // const {id, title, category, discription, price, image1, image2, image3} = props;
  return(
    <li key={props.id} className="border-2 rounded-t-lg p-2 flex flex-col justify-center items-center hover:translate-y-2 hover:translate-x-2 ">
      <img src={`${props.image1}`} alt={`${props.image2}`}/>
      <p className="font-bold text-lime-500">{props.title}</p>
      <p className="font-bold ">{props.price} $</p>
      <p className="font-thin text-sm">{props.category}</p>
      <p className="font-thin text-sm h-10">{props.description}</p>
      <div>
        <button className="flex justify-center items-center flex-col rounded bg-lime-500 p-2 text-white text-sm font-thin">
          Add to cart
          </button>
      </div>
    </li>
  )
}

export default ProductItem;