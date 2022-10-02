import React, { KeyboardEventHandler } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { ITodos } from "./Form";

interface ITodoList {
  todos: ITodos[];
  completeTodo: (inx: number) => void;
  editTodo: (inx: number) => void;
  deleteTodo: (inx: number) => void;
  saveTodo: (inx: number) => void;
  noteRef: any;
  preventSubmit:
    | KeyboardEventHandler<HTMLButtonElement | HTMLInputElement>
    | undefined;
}

const TodoList: React.FC<ITodoList> = ({
  todos,
  completeTodo,
  editTodo,
  deleteTodo,
  saveTodo,
  noteRef,
  preventSubmit,
}) => {
  const [checked, setChecked] = React.useState([0]);
  let UniqKey = 123;
  const handleToggle = (value: number, inx: any) => () => {
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
    <List>
      {todos.map((todo: any, inx: number) => {
        const labelId = `list-todo-${todo}`;

        return (
          <ListItem key={`todo-${UniqKey++}`} role={undefined} dense button>
            <ListItemIcon>
              <Checkbox
                color="primary"
                edge="start"
                checked={checked.indexOf(todo) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
                onClick={handleToggle(todo, inx)}
                onKeyPress={preventSubmit}
              />
            </ListItemIcon>
            {!todo.isEditing ? (
              <>
                <ListItemText
                  id={labelId}
                  primary={`${todo.text}`}
                  style={{
                    textDecoration: todo.isCompleted ? "line-through" : "",
                  }}
                />
                <ListItemIcon>
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() => editTodo(inx)}
                  >
                    <EditIcon className="edite-icon" />
                  </IconButton>
                </ListItemIcon>
              </>
            ) : (
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
                  ref={(element) => (noteRef.current[inx] = element)}
                  onKeyPress={preventSubmit}
                  id="task"
                />
                <ListItemIcon>
                  <IconButton
                    onClick={() => saveTodo(inx)}
                    edge="end"
                    aria-label="delete"
                  >
                    <BookmarkIcon  className="save-icon"/>
                  </IconButton>
                </ListItemIcon>
              </>
            )}
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => deleteTodo(inx)}
                edge="end"
                aria-label="delete"
              >
                <DeleteIcon className="delete-icon"/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TodoList;
