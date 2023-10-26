import React, { useEffect } from 'react';

export const useRadioControl = <T extends string = string>(value: string, onChange: (value: T) => void) => {
    useEffect(() => {
        (document.querySelector(`input[value=${value}]`) as HTMLInputElement).checked = true;
    }, [value])

    const handleInputChange = (event: React.MouseEvent<HTMLInputElement>) => onChange((event.target as HTMLInputElement).value as T);

    return handleInputChange;
}