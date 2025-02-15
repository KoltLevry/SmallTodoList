import { InputContainer, InputElement } from "./styles";
import { InputProps } from "./types";

function Input( {
    name, 
    type = 'text',
    placeholder,
    label,
    id,
    value,
    onChange,
    error,
    ref,
}: InputProps) {
    return(
        <InputContainer>
        {label && <label htmlFor={id}>{label}</label>}
        <InputElement 
            name={name}
            id={id}
            type="text" 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            ref={ref}
        />
        <p>{error}</p>
        </InputContainer>
    );
}

export default Input;