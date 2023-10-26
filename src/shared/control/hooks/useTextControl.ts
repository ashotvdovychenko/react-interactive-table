import { ChangeEvent, useEffect } from 'react';

export const useTextControl = <T extends string = string>(value: string, onChange: (value: T) => void) => {
    useEffect(() => {
        (document.querySelector(`input`) as HTMLInputElement).value = value as T;
    }, [value])

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value as T);

    return handleInputChange;
}