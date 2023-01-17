import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');



describe('Pruebas en <MultipleCustomHooks /> ', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
    });

    beforeEach( () => {

        jest.clearAllMocks();

    });
    
    
    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null, 
            isLoading: true,
            hasError: null,
        });

        render( <MultipleCustomHooks />);

        expect( screen.getByText('Loading...'));
        expect( screen.getByText('BreakingBad Quotes'));

        const nexButton = screen.getByRole('button', { name: 'Next quote'});
        
        expect( nexButton.disabled).toBeTruthy();
        // screen.debug();

    });

    test('debe de mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Soraya', quote: 'Hola Mundo'}], 
            isLoading: false,
            hasError: null,
        });


        render( <MultipleCustomHooks />);
        expect( screen.getByText('Hola Mundo')).toBeTruthy();
        expect( screen.getByText('Soraya')).toBeTruthy();

        const nexButton = screen.getByRole('button', { name: 'Next quote'});
        
        expect( nexButton.disabled).toBeFalsy();

        // screen.debug();

    });

    test('debe de llamar la función de incrementar', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Soraya', quote: 'Hola Mundo'}], 
            isLoading: false,
            hasError: null,
        });

        render( <MultipleCustomHooks />);
        const nexButton = screen.getByRole('button', { name: 'Next quote'});
        fireEvent.click( nexButton );

        expect( mockIncrement ).toHaveBeenCalled();

    });

});