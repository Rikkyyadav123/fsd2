
import pic from "../images/1.jpg";
import "../components/Cart.css";


const Cart = (props)=>
{
    return(
        <div className="Cart">
            <h2>{props.name}</h2>
            <h2>{JSON.stringify(props.date)}</h2>
            <h2>{props.year}</h2>
        </div>
    );
};

export default Cart