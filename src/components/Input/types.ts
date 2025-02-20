import { ChangeEvent, RefObject } from "react";

export interface InputProps {
    name: string,
    type?: 'text'  | 'submit',
    placeholder?: string,
    label?: string,
    id?: string,
    value?: string,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
    error?: string,
    ref: RefObject<HTMLInputElement | null>;
}