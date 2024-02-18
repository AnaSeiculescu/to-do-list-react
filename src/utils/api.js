import { URL_TODOS } from "./constants";

export async function getTodos() {
    const apiResponse = await fetch(URL_TODOS);
    const result = await apiResponse.json();
    return result;
}

export async function addTodos(todo) {
    const apiResponse = await fetch(URL_TODOS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    
        body: JSON.stringify(todo),
    });
    const result = await apiResponse.json();
    return result;
}

export function updateTodo(id, updatedTodo) {
    const URL_TODOS_ID = `${URL_TODOS}${id}`;
    return (
        fetch(URL_TODOS_ID, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(updatedTodo),
        })
        .then((response) => response.json())
    )
}

export function deleteTodo(id) {
    const URL_TODOS_ID = `${URL_TODOS}${id}`;
    return (
        fetch(URL_TODOS_ID, {
            method: 'DELETE',
        })
    )
}