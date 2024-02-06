import React from 'react';
import { useTable } from 'react-table';

function AdditionalServicesTable() {
  const data = React.useMemo(() => [
    { service: 'Terraced', conservatoryExtension: 'No / Yes', gutterClearing: '£50 / £70', gutterFasciaSoffits: '£60 / £70', windowsCleanedInside: 'Use 4-weekly cleaning price for your home & multiply by 2', conservatoryRoof: '£5 per panel – minimum charge £50' },
    { service: '3/4 Bed Semi', conservatoryExtension: 'No / Yes', gutterClearing: '£60 / £80', gutterFasciaSoffits: '£70 / £80', windowsCleanedInside: '', conservatoryRoof: '' },
    { service: '3/4 Bed Det.', conservatoryExtension: 'No / Yes', gutterClearing: '£70 / £90', gutterFasciaSoffits: '£80 / £90', windowsCleanedInside: '', conservatoryRoof: '' },
    { service: '5 Bed', conservatoryExtension: 'No / Yes', gutterClearing: '£80 / £100', gutterFasciaSoffits: '£90 / £100', windowsCleanedInside: '', conservatoryRoof: '' },
  ], []);

  const columns = React.useMemo(() => [
    { Header: 'Property Type', accessor: 'service' },
    { Header: 'Conservatory/Extension', accessor: 'conservatoryExtension' },
    { Header: 'Gutter Clearing with Vacuum', accessor: 'gutterClearing' },
    { Header: 'Gutter, Fascia & Soffits Cleaned', accessor: 'gutterFasciaSoffits' },
    { Header: 'Windows Cleaned Inside', accessor: 'windowsCleanedInside' },
    { Header: 'Conservatory Roof', accessor: 'conservatoryRoof' },
  ], []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({columns, data});

  return (
    <table {...getTableProps()} className="table">
        <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()} className="th header">{column.render("Header")}</th>
                    ))}
                </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map(row => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map((cell, cellIndex) => {
                            let className = cellIndex === 0 ? "td firstColumn" : "td cell";
                            return <td {...cell.getCellProps()} className={className}>{cell.render("Cell")}</td>
                        })}
                    </tr>
                );
            })}
        </tbody>
    </table>
  )
}

export default AdditionalServicesTable;