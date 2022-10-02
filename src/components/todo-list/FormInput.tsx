import React from "react";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";

interface ITodoCreator {
  todo:string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  clearInput:any,
  inputRef:React.RefObject<HTMLInputElement>,
  isInputEmpty:any,
  preventSubmit:any,
}

const TodoCreator:React.FC<ITodoCreator> = ({
  todo,
  setTodo,
  clearInput,
  inputRef,
  isInputEmpty,
  preventSubmit,
}) => {
  return (
    <div className="form__input">
        <FormControl>
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

          {!isInputEmpty ? (
            <></>
          ) : (
            <>
              <FormHelperText id="component-error-text">
                Task can't be empty
              </FormHelperText>
            </>
          )}
        </FormControl>
        <Button type="submit" onKeyPress={preventSubmit}>
          Add task
        </Button>
 
    </div>
  );
};

export default TodoCreator;
