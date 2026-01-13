import { AppConstants } from "../../config/constants";
import AppButton from "../buttons/buttons.component";
import InputBox from "../inputs/inputs.component";
import './todo-card.styles.css';

const TodoCardInput = () => {
    return (
        <div className="todo-card-container">
            <InputBox />
            <AppButton children={AppConstants.BTN_add} buttonType='primary' otherProps={{
                onClick: () => { },
            }} />
        </div>
    );
}

export default TodoCardInput;