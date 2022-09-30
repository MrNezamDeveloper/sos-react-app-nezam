import  React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';

import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl';
const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, gray 30%, black 90%)',
        border: 0,
        color: 'white',
        height: 30,
        padding: '0 10px',
        whiteSpace: 'nowrap',
        margin: '15px 0 0 20px',
    },
    label: {
        width: '80%'
    }
});


const TodoCreator = ({ theme, todo, setTodo, clearInput, inputRef, isInputEmpty, preventSubmit }) => {
    const classes = useStyles();

    return (
        <div className="form__input">
            <ThemeProvider theme={theme}>
                <FormControl   className={classes.label}>
                    <TextField
                        id="outlined-basic"
                        label="What's need to be done?" // better accessibility with Material UI
                        value={todo}
                        variant="outlined"
                        onChange={(e) => setTodo(e.target.value)}
                        onFocus={clearInput}
                        ref={inputRef}
                        aria-describedby="component-error-text"
                        onKeyPress={preventSubmit}
                    />

                    { !isInputEmpty ?
                        <></>
                        :
                        <>
                            <FormHelperText id="component-error-text">Task can't be empty</FormHelperText>
                        </>
                    }
                </FormControl>
                <Button
                    type="submit"
                    alt="add-note"
                    className={classes.root}
                    onKeyPress={preventSubmit}
                >
                    Add task
                </Button>
            </ThemeProvider>
        </div>
    )

}

export  default TodoCreator;