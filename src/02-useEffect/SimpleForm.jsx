import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'sorypg',
        email: 'sorypg@gemail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    /* cuando queremos que el useEffect solo una vez
    *  este efecto solo se dispara una unica vez
    */
    useEffect( () => {
        //console.log('useEffect called!');
    }, []);

    /**
     * cuando queremos usar el useEffect del form, 
     * este efecto se dipara cada vez que haya un cambio en el formulario
     */
    useEffect( () => {
        //console.log('formState changed!');
    }, [formState]);

    /**
     * cuando queremos usar el useEffect del email
     * este efecto se dispara cuando el email cambie
     */
    useEffect( () => {
        //console.log('email changed!');
    }, [email]);

    
    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input 
                type="text" 
                className="form-control" 
                placeholder="Username" 
                name="username"
                value={ username } 
                onChange={ onInputChange }
            />

            <input 
                type="email"
                className="form-control mt-2" 
                placeholder="sorayapg@gmail.com" 
                name="email"
                value={ email }
                onChange={ onInputChange }
                
            />

            {
                (username === 'sorypg2') && <Message />
            }
        </>    
    )
}
