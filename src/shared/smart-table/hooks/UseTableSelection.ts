import React, { useEffect, useState } from 'react';

import { UniqueObject } from '../models';

export const useTableSelection = <CollectionType extends UniqueObject>(rowData: CollectionType[], setOuterSelectedRows?: React.Dispatch<Map<number, CollectionType>>) => {
  const [selectedRows, setSelectedRows] = useState<Map<number, CollectionType>>(new Map());

  const changeRowSelectionState = (id: number) => {
    const rows = new Map(selectedRows);

    rows.has(id) ? rows.delete(id) : rows.set(id, rowData.find(row => row.id === id)!);

    setSelectedRows(new Map(rows));
  };



  useEffect(() => {
    const bodyControls: NodeListOf<HTMLInputElement> = document.querySelectorAll('tbody input[type="checkbox"]');
    bodyControls.forEach((checkbox) => {
      checkbox.checked = selectedRows.has(+(checkbox.dataset.id ?? -1));
    });

  }, [selectedRows, rowData]);

  useEffect(() => {
    if (setOuterSelectedRows) {
      setOuterSelectedRows(selectedRows);
    }
  }, [setOuterSelectedRows, selectedRows]);

  return [changeRowSelectionState];
};

export default useTableSelection;