import { MainButton } from './styles';
import {ButtonProps} from './types';

function Button( {
    name='Send',
    type = "button",
    onClick,
    disabled = false,
}: ButtonProps) {
    return(
        <>
        <MainButton
            type={type} onClick={onClick} disabled={disabled}
        >{name}</MainButton>
        </>
    );
}

export default Button;