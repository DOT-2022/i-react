
import { AppConstants } from '../../config/constants';
import './inputs.styles.css';

const INPUT_CLASSTYPE = {
    text: 'text',
};

const InputBox = () => {
    return (
        <input className='input-box' type="text" placeholder={AppConstants.LBL_add_new_task} />
    );
}

export default InputBox;