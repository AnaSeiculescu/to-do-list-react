import { URL_TODOS } from './constants';

export async function getTodos() {
    const authToken = localStorage.getItem('power');
    const apiResponse = await fetch(URL_TODOS, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    });
    console.log('buba: ', apiResponse);
    const result = await apiResponse.json();
    return result;
}

export async function addTodos(todo) {
    const authToken = localStorage.getItem('power');
    const apiResponse = await fetch(URL_TODOS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
        },

        body: JSON.stringify(todo),
    });
    console.log('buba: ', apiResponse);
    const result = await apiResponse.json();
    return result;
}

export /*async*/ function updateTodo(id, updatedTodo) {
    const authToken = localStorage.getItem('power');
    const URL_TODOS_ID = `${URL_TODOS}${id}`;
    return /*await */ fetch(URL_TODOS_ID, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
        },

        body: JSON.stringify(updatedTodo),
    }).then((response) => response.json());
}

export function deleteTodo(id) {
    const authToken = localStorage.getItem('power');
    const URL_TODOS_ID = `${URL_TODOS}${id}`;
    return fetch(URL_TODOS_ID, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    });
}
