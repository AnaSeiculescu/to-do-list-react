import { Container } from '@mui/material';
import PropTypes from 'prop-types';
import { FormItem } from './FormItem';

export function TodoList({
    todos,
    handleDeleteTodo,
    handleCheckboxChange,
    handleUpdates,
    // handleEditTodo,
    // editing,
}) {
    return (
        <div>
            <Container
                maxWidth="sm"
                style={{
                    marginTop: '5vh',
                }}
            >
                <h2>My Todo List</h2>
                <ul>
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            style={{
                                listStyle: 'none',
                            }}
                        >
                            <FormItem
                                todo={todo}
                                handleDeleteTodo={handleDeleteTodo}
                                handleCheckboxChange={handleCheckboxChange}
                                handleUpdates={handleUpdates}
                                // handleEditTodo={handleEditTodo}
                                // editing={editing}
                            />
                        </li>
                    ))}
                </ul>
            </Container>
        </div>
    );
}

TodoList.propTypes = {
    todos: PropTypes.array,
};
