import { ListBox, ListItem } from "./styles";
import { ListProps } from "./types";

function List( {children}: ListProps ) {
    return(
        <>
        <ListBox>
            {/* <ListItem>Task</ListItem> */}
            {children}
        </ListBox>
        </>
    );
}

export default List;