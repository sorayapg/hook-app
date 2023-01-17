import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";


describe('Pruebas en  useForm', () => {

    const initialForm = {
        name: 'Soraya',
        email: 'sorypg@gmail.com'
    }

    test('debe de regresar los valores por defecto', () => {

        const {result } = renderHook( () => useForm(initialForm) );
        // const {} = result.current;
        expect(result.current).toEqual( {
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function ),
          });

    });

    test('debe de cambiar el nombre del formulario', () => {

        const newValue = 'Diego';

        // montar el hook 

        const {result } = renderHook( () => useForm(initialForm) );

        // con ese hook debemos tomar el onInputChange()la funcion que debemos llamar

        const {  onInputChange } = result.current;

        // act, event...

        act( () => {
            onInputChange({ target: { name: 'name', value: newValue }})
        });
        
        // expect, result.current.name === Diego

        expect( result.current.name ).toBe( newValue );

        // expect, result.current.forState.name === Diego

        expect(result.current.formState.name ).toBe( newValue );


    });

    test('debe de realizar el reset del formulario', () => {

        const newValue = 'Diego';

        // montar el hook 

        const {result } = renderHook( () => useForm(initialForm) );

        // con ese hook debemos tomar el onInputChange()la funcion que debemos llamar

        const {  onInputChange, onResetForm } = result.current;

        // act, event...

        act( () => {
            onInputChange({ target: { name: 'name', value: newValue }});
            onResetForm();
        });
        
        // expect, result.current.name === Diego

        expect( result.current.name ).toBe( initialForm.name );

        // expect, result.current.forState.name === Diego

        expect(result.current.formState.name ).toBe( initialForm.name );


    });
    
})