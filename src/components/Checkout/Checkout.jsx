import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import './Checkout.css';

const Checkout = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmation, setEmailConfirmation] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");

    const {cart, amountOfItems, total, emptyCart} = useContext(CartContext);

    const formHandler = (event) => {
        event.preventDefault();

        if(!name || !lastName || !phone || !email || !emailConfirmation) {
            setError("Por favor completa todos los campos");
            return;
        }

        if(email !== emailConfirmation) {
            setError("Los campos de email no coinciden");
            return;
        }

        const order = {
            items: cart.map(product => ({
                id: product.item.id,
                name: product.item.name,
                amount: product.amount
            })),
            total: total,
            date: new Date(),
            name,
            lastName,
            phone,
            email
        };

        Promise.all(
            order.items.map( async (productOrder) => {
                const productRef = doc(db, "products", productOrder.id);
                const productDoc = await getDoc(productRef);
                const currentStock = productDoc.data().stock;

                await updateDoc( productRef, {
                    stock: currentStock - productOrder.amount
                })
            })
        )
        .then(() => {
            addDoc(collection(db, "orders"), order)
            .then(docRef => {
                setOrderId(docRef.id);
                emptyCart();
            })
            .catch( error => {
                console.log("Error al crear la orden de compra", error);
                setError("Se produjo un error al crear la orden de compra");
            })
        })
        .catch( error => {
            console.log("No se pudo actualizar el stock", error);
            setError("No se pudo actualizar el stock");
        })
    }

  return (
    <div>
        <h2>Checkout</h2>

        <form onSubmit={formHandler} className='form'>
            <div className='products'>
                {
                    cart.map(product => (
                        <div key={product.item.id}>
                            <p>{product.item.name} X {product.amount}</p>
                            <p>{product.item.price}</p>
                            <hr />
                        </div>
                    ))
                }
            </div>
            

            <div className='formElem'>
                <label htmlFor="">Nombre</label>
                <input type="text" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='formElem'>
                <label htmlFor="">Apellido</label>
                <input type="text" onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className='formElem'>
                <label htmlFor="">Telefono</label>
                <input type="text" onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className='formElem'>
                <label htmlFor="">Email</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='formElem'>
                <label htmlFor="">Confirmación de email</label>
                <input type="text" onChange={(e) => setEmailConfirmation(e.target.value)} />
            </div>

            {
                error && <p style={{color:"red"}}> {error} </p>
            }

            <button type="submit" className='submitButton'> Confirmar compra </button>

            {
                orderId && (<strong>Gracias por su compra, su número de orden es: {orderId}</strong>)
            }
        </form>
    </div>
  )
}

export default Checkout