import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
    const {amountOfItems} = useContext(CartContext);

    return (
        <div>
            <Link to="/cart">
                <img className='cart' src={"../img/shopping-cart.svg"} alt="Icono del carrito de compras" />
                {
                    amountOfItems > 0 && <strong> {amountOfItems} </strong>
                }
            </Link>
        </div>
    )
}

export default CartWidget