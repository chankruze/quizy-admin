/* eslint-disable */
// @ts-nocheck
/*
Author: chankruze (chankruze@gmail.com)
Created: Sat Apr 30 2022 16:13:08 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { Student } from "../../types/student";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import { GlobalFilter } from "../common/GlobalFilter";

interface StudentTableProps {
  columns: any;
  data: Array<Student>;
  title: string;
}

const StudentTable: React.FC<StudentTableProps> = ({ columns, data, title }) => {
  // Use the state and functions returned from useTable to build your UI
  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter },
  } = tableInstance;

  // Render the UI for your table
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="text-3xl font-poppins font-semibold text-blue-500">{title}</p>
        <GlobalFilter
          filter={globalFilter}
          setFilter={setGlobalFilter}
          placeholder="Search by name, regd no, branch, semester..."
        />
      </div>
      <table {...getTableProps()} className="w-full font-roboto">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="py-4 text-gray-400 uppercase font-semibold font-montserrat text-sm"
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted && (column.isSortedDesc ? "🔽" : "🔼")}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, _rowIdx) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className={`py-2 text-center ${
                        _rowIdx % 2 === 0 && "bg-gray-50"
                      }`}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="w-full mt-4 flex gap-2 items-center justify-center">
        <button
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          className={`bg-gray-100 py-2 px-4 rounded-md ${
            canPreviousPage
              ? "hover:bg-blue-200 cursor-pointer"
              : "cursor-not-allowed"
          }`}
        >
          First
        </button>
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className={`bg-gray-100 py-2 px-4 rounded-md ${
            canPreviousPage
              ? "hover:bg-blue-200 cursor-pointer"
              : "cursor-not-allowed"
          }`}
        >
          Prev
        </button>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className={`bg-gray-100 py-2 px-4 rounded-md ${
            canNextPage
              ? "hover:bg-blue-200 cursor-pointer"
              : "cursor-not-allowed"
          }`}
        >
          Next
        </button>
        <button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          className={`bg-gray-100 py-2 px-4 rounded-md ${
            canNextPage
              ? "hover:bg-blue-200 cursor-pointer"
              : "cursor-not-allowed"
          }`}
        >
          Last
        </button>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            className="w-24 p-2 bg-gray-100 rounded-md"
          />
        </span>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
          className="p-2 bg-gray-100 rounded-md"
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default StudentTable;
