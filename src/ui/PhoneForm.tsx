import React, { useState } from 'react';

import { PhoneControl } from './PhoneControl.tsx';
import { GenderControl } from './GenderControl.tsx';
import {PhoneTableCollectionType} from "./PhoneTable.tsx";

export interface PhoneFormData {
    phoneNumber: string;
    gender: 'Male' | 'Female';
}

interface PhoneFormProps {
    formSubmit: (data: PhoneFormData) => void;
    formDelete: (selectedRows: Map<number, PhoneTableCollectionType>) => void;
    formDuplicate: (selectedRows: Map<number, PhoneTableCollectionType>) => void;
    selectedRows: Map<number, PhoneTableCollectionType>;
}

export const PhoneForm = ({ formSubmit, formDelete, formDuplicate, selectedRows}: PhoneFormProps) => {
    const [formData, setFormData] = useState<PhoneFormData>({ phoneNumber: '+38 (0__) - ___ - __ - __', gender: 'Male' });

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
        setFormData({ phoneNumber: '+38 (0__) - ___ - __ - __', gender: 'Male' });
    }

    const handleFormDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        formDelete(selectedRows);
    }

    const handleFormDuplicate = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        formDuplicate(selectedRows);
    }

    return (
        <form className="form-group border rounded mt-3 p-3 smart-form">
            <PhoneControl onChange={ setPhoneNumber } value={ formData.phoneNumber }></PhoneControl>

            <div className="my-3">
                <span>Оберіть стать:</span>
                <GenderControl onChange={ setGender } value={ formData.gender }></GenderControl>
            </div>

            <div className="d-flex justify-content-between">
                <button className="btn btn-primary" type="button" onClick={ handleFormSubmit } disabled={ !isFormValid }>Submit</button>

                <span className="d-flex gap-1">
                    <button type="button" className="btn btn-warning ml-auto" onClick={ handleFormDuplicate }>Duplicate selected rows</button>
                    <button type="button" className="btn btn-danger ml-auto" onClick={ handleFormDelete }>Delete selected rows</button>
                </span>
            </div>
        </form>
    );
}