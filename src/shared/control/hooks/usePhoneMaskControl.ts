import {KeyboardEvent, useEffect, useState} from 'react';

export const usePhoneMaskControl = (value: string, onChange: (value: string) => void) => {
    const [initialMask] = useState(value)

    useEffect(() => {
        (document.querySelector(`input`) as HTMLInputElement).value = value;
    }, [value])

    const getPhoneMaskWithNewDigit = (value: string, key: string) => {
        const valueArray = [...value];
        const currentIndex = valueArray.findIndex(position => position === '_');

        valueArray[currentIndex] = key;

        return valueArray.join('');
    }

    const getPhoneMaskWithRemovedNumber = (value: string, initialMask: string) => {
        const valueArray = [...value];
        const currentIndex = valueArray.length - 1 - [...valueArray].reverse().findIndex(value => Number.isInteger(+value) && value !== ' ');
        const removableIndex = currentIndex === -1 ? value.length - 1 : currentIndex;

        valueArray[removableIndex] = initialMask[removableIndex];

        return valueArray.join('');
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        event.preventDefault()
        const key = event.key;

        if (/^\d$/.test(key)) {
            onChange(getPhoneMaskWithNewDigit(value, key));
        } else if (key === 'Backspace') {
            onChange(getPhoneMaskWithRemovedNumber(value, initialMask));
        }
    };

    return handleKeyDown;
}