

import { useCounter, useFetch} from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {

     const { counter, increment } = useCounter(1);

    // https://api.breakingbadquotes.xyz/v1/quotes
     const { data, isLoading, hasError } = useFetch(` https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    // console.log({ data, isLoading, hasError });
    // console.log({ data });

     const { author, quote } = !!data && data[0];

    /* solo se hara si no hay ningun hook, ya que no se recomienda 
    hacer renderizados condicionales
        if ( isLoading ) {
            return(
                 <h1>Cargando...</h1>
            )
        }      
    */

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

        {
            /**
             * { 
                isLoading
                    ? (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    : (
                        <blockquote className="blockquote text-end">
                            <p className="mb-1">{ quote }</p>
                            <footer className="blockquote-footer">{ author }</footer>
                        </blockquote>
                    )
            } 
             * 
             */
        }

        {
            // si isLoading esta en true entonces mostraremos el <LoadingQuote /> 
            // caso contrario mostraremos el <Quote />
            isLoading ?  <LoadingQuote  /> : <Quote author={ author } quote={ quote } />

        }

        <button onClick={() => increment()} className="btn btn-primary" disabled={ isLoading }>
            Next quote
        </button>
              
        </>
    )
}

