import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        backgroundColor: '#f5f5f5',
        padding: 0
    },
    li: {
        borderBottom: '1px dashed black'
    }
}));

const TodoList = ({ theme, todos, completeTodo, editTodo, deleteTodo, saveTodo, noteRef, preventSubmit }) => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);
    let UniqKey = 123;
    const handleToggle = (value, inx) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        completeTodo(inx);
    };


    return (
        <ThemeProvider theme={theme}>
            <List className={classes.root}>
            {todos.map((todo, inx) => {
                const labelId = `list-todo-${todo}`;

                return (
                    <ListItem
                        key={`todo-${UniqKey++}`}
                        role={undefined}
                        dense
                        button
                        className={classes.li}
                    >
                        <ListItemIcon>
                            <Checkbox
                                color="primary"
                                edge="start"
                                checked={checked.indexOf(todo) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                                onClick={handleToggle(todo, inx)}
                                onKeyPress={preventSubmit}
                            />
                        </ListItemIcon>
                        {
                            (!todo.isEditing) ?
                                <>
                                    <ListItemText
                                        id={labelId}
                                        primary={`${todo.text}`}
                                        style={{textDecoration: todo.isCompleted ? "line-through" : ""}}
                                    />
                                    <ListItemIcon>
                                        <IconButton
                                            edge="end"
                                            aria-label="edit"
                                            onClick={() => editTodo(inx)}
                                        >
                                            <EditIcon/>
                                        </IconButton>
                                    </ListItemIcon>
                                </>
                                :
                                <>
                                    <label
                                        htmlFor="task" // better accessibility with HTML
                                        className="visuallyhidden"
                                    >
                                        {todo.text}
                                    </label>
                                    <input
                                        className="form__edit-input"
                                        defaultValue={todo.text}
                                        ref={(element) => noteRef.current[inx] = element}
                                        onKeyPress={preventSubmit}
                                        id="task"
                                    />
                                    <ListItemIcon>
                                        <IconButton onClick={() => saveTodo(inx)} edge="end" aria-label="delete">
                                            <BookmarkIcon />
                                        </IconButton>
                                    </ListItemIcon>
                                </>
                        }
                        <ListItemSecondaryAction>
                            <IconButton onClick={() => deleteTodo(inx)} edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
        </ThemeProvider>
    );
}

export default TodoList;
