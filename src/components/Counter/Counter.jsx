import { useState } from "react";

const Counter = ({ initialAmount, stock, addFunction }) => {
    const [counter, setCounter] = useState(initialAmount);

    const addCounter = () => {
        if(counter < stock) {
            setCounter(counter+1);
        }
    }

    const substractCounter = () => {
        if(counter > initialAmount) {
            setCounter(counter-1);
        }
    }

    return (
        <>
            <div>
                <button onClick={substractCounter}> - </button>
                <strong> {counter} </strong>
                <button onClick={addCounter}> + </button>
            </div>
            <button onClick={() => addFunction(counter)}> Agregar al carrito </button>
        </>
    )
}

export default Counter