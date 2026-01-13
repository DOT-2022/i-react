import { AppConstants } from "../../../config/constants";
import TodoCard from "../../cards/todo-card.component";

import './header.styles.css';

const AppHeader = () => {
    return (
        <div className="header-container">
            <h3>{AppConstants.APP_title}</h3>
            <p>{AppConstants.APP_subtitle}</p>
            <TodoCard />
        </div>
    )
}

export default AppHeader;