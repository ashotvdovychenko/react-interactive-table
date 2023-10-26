import { SmartTableBody, SmartTableColumn } from '@shared/smart-table/components';

export interface PhoneTableCollectionType {
    id: number;
    phoneNumber: string;
    gender: 'Male' | 'Female';
}

interface PhoneTableProps {
    rowData: PhoneTableCollectionType[];
}

export const PhoneTable = ({ rowData }: PhoneTableProps) => {
    return (
        <SmartTableBody rowData={rowData}>
            <SmartTableColumn headerText={ 'ID' } valueGetter={ (node: PhoneTableCollectionType) => node.id.toString() } id={ 1 }/>
            <SmartTableColumn headerText={ 'Phone Number' } valueGetter={ (node: PhoneTableCollectionType) => node.phoneNumber } id={ 2 }/>
            <SmartTableColumn headerText={ 'Gender' } valueGetter={ (node: PhoneTableCollectionType) => node.gender } id={ 3 }/>
        </SmartTableBody>
    )
}
