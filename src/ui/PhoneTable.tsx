import { SmartTableBody, SmartTableColumn } from '@shared/smart-table/components';
import React from 'react';

export interface PhoneTableCollectionType {
    id: number;
    phoneNumber: string;
    gender: 'Male' | 'Female';
}

interface PhoneTableProps {
    rowData: PhoneTableCollectionType[];
    setSelectedRows: React.Dispatch<Map<number, PhoneTableCollectionType>>;
}

export const PhoneTable = ({ rowData, setSelectedRows }: PhoneTableProps) => {
    return (
        <SmartTableBody rowData={rowData} setSelectedRows={ setSelectedRows }>
            <SmartTableColumn headerText={ 'ID' } valueGetter={ (node: PhoneTableCollectionType) => node.id.toString() } id={ 1 }/>
            <SmartTableColumn headerText={ 'Phone Number' } valueGetter={ (node: PhoneTableCollectionType) => node.phoneNumber } id={ 2 }/>
            <SmartTableColumn headerText={ 'Gender' } valueGetter={ (node: PhoneTableCollectionType) => node.gender } id={ 3 }/>
        </SmartTableBody>
    )
}
