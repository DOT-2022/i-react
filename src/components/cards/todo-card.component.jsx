import { Fragment } from "react/jsx-runtime";
import { AppConstants } from "../../config/constants";
import TodoCardInput from "./todo-card-input.component";

const TodoCard = () => {
    return (
        <Fragment>
            <h4>{AppConstants.CARD_title}</h4>
            <TodoCardInput />
        </Fragment>
    );
};

export default TodoCard;