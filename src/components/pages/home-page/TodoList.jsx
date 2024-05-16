import { Container } from '@mui/material';
import PropTypes from 'prop-types';
import { FormItem } from './FormItem';

export function TodoList({ todos, handleDeleteTodo, handleCheckboxChange, handleUpdates }) {
    return (
        <div>
            <Container
                // maxWidth="sm"
                style={{
                    marginTop: '5vh',
                }}
            >
                <h2>My Power Organizer-My Power Organizer-My Power Organizer</h2>
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
