
import './buttons.styles.css';

const BUTTON_TYPE_CLASSES = {
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    medium: 'medium',
    error: 'error',
};

const AppButton = ({ children, buttonType, otherProps }) => {

    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>{children}</button>
    );
};

export default AppButton;