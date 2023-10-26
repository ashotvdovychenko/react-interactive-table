import { ControlProps } from '@shared/control/models';
import { useTextControl } from '@shared/control/hooks';

export const PhoneControl = ({ onChange, value }: ControlProps<string>) => {
    const handleInputChange = useTextControl(value, onChange);

    return (
        <>
            <label htmlFor="phone">Введіть номер телефону:</label>
            <input className="form-control" type="text" id="phone" name="phoneNumber" onChange={ handleInputChange }/>
            <small className="form-text text-danger" id="phone-error-container"></small>
        </>
    )
}
