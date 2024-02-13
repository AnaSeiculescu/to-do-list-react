import { NewTodo } from './NewTodo';
import { useState, useEffect } from 'react';
import { TodoList } from './TodoList';

// const x = fetch();
// const y = x.then(() => {
// })
// function resolver() {
//     return 'haha'
// }
// y.then(resolver)
// y.then(() => 'haha');

// function resolver() {
//     const h = new Promise((res, rej) => { res('haha')});
//     return h;
// }
// y.then(resolver);

export function Container() {
    const [todos, setTodos] = useState([]);
    const URL = 'http://localhost:3030/api/todos';

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = () => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                console.log('data', data);
                setTodos(data);
            })

            .catch((error) => console.error('Error fetching todos:', error));

        // console.log(todos);
    };

    const handleAddTodo = (todo) => {
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(todo),
        })
            .then((response) => {
                console.log('statusul este:', response.status);
                const promiseDeBody = response.json();
                return promiseDeBody;
            })
            .then((newTodo) => {
                console.log('body-ul este: ', newTodo);
                setTodos([...todos, newTodo]);
            })
            .catch((error) => console.error('Error adding todo:', error));

        // console.log(todo);
        console.log(todos);
    };

    return (
        <div>
            <NewTodo onHandlerAddTodo={handleAddTodo} />
            <TodoList
                todos={todos}
                setTodos={setTodos}
                fetchTodos={fetchTodos}
            />
        </div>
    );
}
