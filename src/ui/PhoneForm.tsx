import React, {useState} from 'react';

import { PhoneControl } from './PhoneControl.tsx';
import { GenderControl } from './GenderControl.tsx';

export interface PhoneFormData {
    phoneNumber: string;
    gender: 'Male' | 'Female';
}

interface PhoneFormProps {
    formSubmit: (data: PhoneFormData) => void;
}

export const PhoneForm = ({ formSubmit }: PhoneFormProps) => {
    const [formData, setFormData] = useState<PhoneFormData>({ phoneNumber: '+38 (0__) - ___ - __ - __', gender: 'Male' })

    const [isFormValid, setIsFormValid] = useState(false);

    const setPhoneNumber = (phoneNumber: string) => {
        checkPhoneFormValidity(phoneNumber);
        setFormData({ ...formData, phoneNumber });
    }

    const setGender = (gender: 'Male' | 'Female') => setFormData({ ...formData, gender });

    const checkPhoneFormValidity = (phoneNumber: string) => setIsFormValid(/^\d$/.test(phoneNumber.charAt(phoneNumber.length - 1)));

    const handleFormSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        formSubmit(formData);
    }

    return (
        <form className="form-group border rounded mt-3 p-3 smart-form">
            <PhoneControl onChange={ setPhoneNumber } value={ formData.phoneNumber }></PhoneControl>

            <div className="my-3">
                <span>Оберіть стать:</span>
                <GenderControl onChange={ setGender } value={ formData.gender }></GenderControl>
            </div>

            <button className="btn btn-primary" type='button' onClick={ handleFormSubmit } disabled={ !isFormValid }>Submit</button>
        </form>
    );
}
