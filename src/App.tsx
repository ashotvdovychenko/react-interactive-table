import { useEffect, useState } from 'react';

import type { PhoneFormData, PhoneTableCollectionType } from './ui';
import { PhoneForm, PhoneTable } from './ui';

function App() {
  const initialRowItems: PhoneTableCollectionType[] = JSON.parse(localStorage.getItem('rowData') ?? '[]');

  const [rowData, setRowData] = useState<PhoneTableCollectionType[]>(initialRowItems);
  const [selectedRows, setSelectedRows] = useState<Map<number, PhoneTableCollectionType>>(new Map());
  useEffect(() => localStorage.setItem('rowData', JSON.stringify(rowData)), [rowData]);

  const addRow = (formData: PhoneFormData) => {
      const row: PhoneTableCollectionType = { id: new Date().getTime() * Math.floor(Math.random() * 1000), ...formData };
      setRowData([...rowData, row]);
  };

  const removeRows = (selectedRowIds: Map<number, PhoneTableCollectionType>) => {
      setRowData(rowData.filter(row => !selectedRowIds.has(row.id)));
  }

  const duplicateRows = (selectedRowIds: Map<number, PhoneTableCollectionType>) => {
      const duplicatedData = [...rowData];

      selectedRowIds.forEach((selectedRow) => {
          const duplicateRow = { ...selectedRow, id: new Date().getTime() * Math.floor(Math.random() * 1000) };

          duplicatedData.push(duplicateRow);
      });

      setRowData(duplicatedData);
  }

  return (
    <>
        <div className="container">
            <PhoneForm formSubmit={ addRow } formDelete={ removeRows } formDuplicate={ duplicateRows } selectedRows={ selectedRows }></PhoneForm>
            <PhoneTable rowData={ rowData } setSelectedRows={ setSelectedRows }/>
        </div>
    </>
  )
}
export default App;
