import { ControlProps } from '@shared/control/models';
import {usePhoneMaskControl} from "@shared/control/hooks/usePhoneMaskControl.ts";

export const PhoneControl = ({ onChange, value }: ControlProps<string>) => {
    const handleKeyDown = usePhoneMaskControl(value, onChange);

    return (
        <>
            <label htmlFor="phone">Введіть номер телефону:</label>
            <input className="form-control" type="text" id="phone" name="phoneNumber" onKeyDown={ handleKeyDown }/>
            <small className="form-text text-danger" id="phone-error-container"></small>
        </>
    )
}
