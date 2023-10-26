import { useEffect, useState } from 'react';

import { UniqueObject } from '../models';

export const useTableSelection = <CollectionType extends UniqueObject>(rowData: CollectionType[]) => {
  const [selectedRows, setSelectedRows] = useState<Map<number, CollectionType>>(new Map());

  const changeRowSelectionState = (id: number) => {
    const rows = new Map(selectedRows);

    rows.has(id) ? rows.delete(id) : rows.set(id, rowData.find(row => row.id === id)!);

    setSelectedRows(new Map(rows));
  };

  const changeTableSelectionState = () => {
    const rows = new Map(selectedRows);

    rows.size !== 0 ? rows.clear() : rowData.forEach((row: CollectionType) => rows.set(row.id, row))

    setSelectedRows(new Map(rows));
  };

  useEffect(() => {
    const bodyControls: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type="checkbox"]');
    const headerControl: HTMLInputElement = document.querySelector('input[type="checkbox"]')!;

    bodyControls.forEach((checkbox) => {
      checkbox.checked = selectedRows.has(+(checkbox.dataset.id ?? -1));
    });

    if (rowData.length === selectedRows.size) {
      headerControl.checked = true;
      headerControl.indeterminate = false;
    } else if (selectedRows.size && rowData.length !== selectedRows.size) {
      headerControl.indeterminate = true;
    } else {
      headerControl.indeterminate = false;
      headerControl.checked = false;
    }
  }, [selectedRows, rowData]);

  return [changeRowSelectionState, changeTableSelectionState];
};

export default useTableSelection;