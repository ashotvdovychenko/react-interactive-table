import React, { ReactComponentElement, useMemo } from 'react';

import { ColDef, UniqueObject } from '../models';
import { useTableSelection } from '../hooks';
import { SmartTableColumn } from './SmartTableColumn.tsx';

interface TableProps<CollectionType> {
    rowData: CollectionType[];
    setSelectedRows: React.Dispatch<Map<number, CollectionType>>
    children: ReactComponentElement<typeof SmartTableColumn, ColDef<CollectionType>>[];
}

export const SmartTableBody = <CollectionType extends UniqueObject>({ rowData, children, setSelectedRows }: TableProps<CollectionType>) => {
    const [ changeRowSelectionState ] = useTableSelection(rowData, setSelectedRows);

    const colDefs: ColDef<CollectionType>[] = children.map((child: ReactComponentElement<typeof SmartTableColumn, ColDef<CollectionType>>) => child.props)

    const headerColumns = colDefs.map((colDef: ColDef<CollectionType>) => (
        <th key={ colDef.id }>{ colDef.headerText }</th>
    ));

    const rows = useMemo(() => {
        return rowData.map((row: CollectionType) => (
            <tr key={ row.id }>
                <td>
                    <input className="form-check-input" type="checkbox" data-id={ row.id } onClick={ () => changeRowSelectionState(row.id) }/>
                </td>
                { colDefs.map((colDef: ColDef<CollectionType>) => <td key={ colDef.id }>{ colDef.valueGetter(row) }</td>) }
            </tr>
        ));
    }, [rowData, colDefs, changeRowSelectionState])

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>
                    </th>
                    { headerColumns }
                </tr>
            </thead>
            <tbody>
                { rows }
            </tbody>
        </table>
    )
}
