import { Checkbox, IconButton, InputBase, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from "@mui/material";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import React, {useState} from "react";
const Todo = (props) => {
    const [item, setItem] = useState(props.item);
    return(
        <ListItem>
            <Checkbox checked={item.done}/>
            <ListItemText>
                <InputBase
                inputProps={{ "aria-label" : "naked"}}
                type="text"
                id={item.id}
                name={item.id}
                value={item.title}
                multiline={true}
                fullWidth={true}
                />
            </ListItemText>
        </ListItem>
        <ListItemSecondaryAction>
            <IconButton aria-label="Delete Todo">
                <DeleteOulined />
            </IconButton>
        </ListItemSecondaryAction>
    );
};
export default Todo;
