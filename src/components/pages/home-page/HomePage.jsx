import * as React from 'react';
import { NewTodo } from './NewTodo';
import { useState, useEffect } from 'react';
import { TodoList } from './TodoList';
import { addTodos, deleteTodo, getTodos, updateTodo } from '../../../utils/api';
import { HomePageMenu } from './HomePageMenu';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

export function HomePage() {
    const [todos, setTodos] = useState([]);
    const [taskName, setTaskName] = useState('');

    function handlerChangeInput(event) {
        const input = event.target.value;
        setTaskName(input);
    }

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = () => {
        getTodos()
            .then((data) => {
                setTodos(data);
            })

            .catch((error) => console.error('Error fetching todos:', error));
    };

    const handleAddTodo = (todo) => {
        addTodos(todo)
            .then((newTodo) => {
                setTodos([...todos, newTodo]);
            })
            .catch((error) => console.error('Error adding todo:', error));

        console.log(todos);
    };

    const handleUpdates = (id, updatedTodo) => {
        updateTodo(id, updatedTodo)
            .then((updatedTodo) => {
                setTodos((prevTodos) => prevTodos.map((item) => (item.id === id ? { ...item, ...updatedTodo } : item)));
            })
            .catch((error) => console.error('Error patching todo:', error));
    };

    const handleCheckboxChange = (todoItem) => {
        todoItem.isCompleted = !todoItem.isCompleted;
        handleUpdates(todoItem.id, {
            text: todoItem.text,
            isCompleted: todoItem.isCompleted,
        });
    };

    const handleDeleteTodo = (id) => {
        deleteTodo(id)
            .then(() => {
                setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
            })
            .catch((error) => console.log('Error deleting todo:', error));
    };

    const drawerWidth = 240;

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
        flexGrow: 2,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }));

    return (
        <Box sx={{ display: 'flex' }}>
            <HomePageMenu
                theme={theme}
                open={open}
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
            />
            <Main open={open}>
                <NewTodo onHandlerAddTodo={handleAddTodo} handlerChangeInput={handlerChangeInput} taskName={taskName} />
                <TodoList
                    todos={todos}
                    handleDeleteTodo={handleDeleteTodo}
                    handleCheckboxChange={handleCheckboxChange}
                    handleUpdates={handleUpdates}
                />
            </Main>
        </Box>
    );
}
