
import React, { useEffect, useMemo } from 'react'
import { useTable } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import './table.css'


const Table = () => {

  useEffect(()=>{
    const timer1 = setInterval(() => {console.log("teraz")}, 1000);
      return () => clearInterval(timer1);
      
  },[])
  const newButton = (hooks)=>{
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id:'Edit',
        Header: 'Edit',
        Cell:({row})=>(
          <button onClick={()=> console.log(row.values.id)}>
            Edit
          </button>
        )
      }
    ])
  }
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  },
  newButton);
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Table