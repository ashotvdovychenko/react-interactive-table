import { useEffect, useState } from 'react';

import type { PhoneFormData, PhoneTableCollectionType } from './ui';
import { PhoneForm, PhoneTable } from './ui';

function App() {
  const initialRowItems: PhoneTableCollectionType[] = JSON.parse(localStorage.getItem('rowData') ?? '[]');

  const [rowData, setRowData] = useState<PhoneTableCollectionType[]>(initialRowItems);

  useEffect(() => localStorage.setItem('rowData', JSON.stringify(rowData)), [rowData])

  const addRow = (formData: PhoneFormData) => {
      const row: PhoneTableCollectionType = { id: new Date().getTime(), ...formData };
      setRowData([...rowData, row]);
  };

  return (
    <>
        <div className="container">
            <PhoneForm formSubmit={ addRow }></PhoneForm>
            <PhoneTable rowData={ rowData }/>
        </div>
    </>
  )
}
export default App;
