import React from 'react';
import { useTable } from 'react-table';

function DetachedTable() {
  const data = React.useMemo(() => [
    { property: '3 Bed', fourWeeks: '£14', eightWeeks: '£20', extension: '£2', conservatory: '£5' },
    { property: '4 Bed', fourWeeks: '£15', eightWeeks: '£21', extension: '£2', conservatory: '£5' },
    { property: '5 Bed', fourWeeks: '£16', eightWeeks: '£22', extension: '£2', conservatory: '£5' },
  ], []);

  const columns = React.useMemo(() => [
    { Header: 'Property Type', accessor: 'property' },
    { Header: '4 Weeks', accessor: 'fourWeeks' },
    { Header: '8 Weeks', accessor: 'eightWeeks' },
    { Header: 'Extension', accessor: 'extension' },
    { Header: 'Conservatory', accessor: 'conservatory' },
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

export default DetachedTable;