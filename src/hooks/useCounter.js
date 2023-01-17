import { useState } from "react";


export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState( initialValue )

    // para incrementar
    /* const increment = () => {
        setCounter( counter + 1 );
    } */
 
    // si se necesita incrementar ya sea de uno, de dos ...
    const increment = ( value = 1 ) => {
        // console.log(value);
        setCounter( (current) => current + value );
    }

    const decrement = (value = 1 ) => {
        // if ( counter === 0) return;
         setCounter( (current) => current - value);
    }

    // para decrementar y comprovar que no siga decrementando al llegar a cero
    /* const decrement = () => {
       // if ( counter === 0) return;
        setCounter( counter - 1);
    } */

    const reset = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    
    }
}