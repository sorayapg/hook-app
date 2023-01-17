// Este es el estado inicial
const initialState = [{
    id : 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];

//  usaremos reducer para saber cual es el filtro seleccionado y le mandamos es state inicial

const todoReducer = ( state = initialState, action = {} ) => {

    if ( action.type === '[TODO] add todo'){
        return [...state, action.payload ]
    }

    return state;

}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectando la piedra del poder',
    done: false
}

/* En la parte de los reducer hacer este tipo de mutaciones es una mala practica
    todos.push({
        id: 2,
        todo: 'Recolectando la piedra del poder',
        done: false
    });
    console.log(todos);
*/

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer( todos, addTodoAction );
console.log({state: todos});