import React from "react";

function TableIndicesCategories(props) {
  return (
    <div className="flex mx-auto justify-center py-3">
      <table className="table-auto text-center">
        <thead>
          <tr>
            <th className="px-4 py-2">Sub-Index value</th>
            <th className="px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-green-600 font-medium">
            <td className="border px-4 py-2">0 - 50</td>
            <td className="border px-4 py-2">Good</td>
          </tr>
          <tr className="text-blue-600 font-medium">
            <td className="border px-4 py-2">51 - 100</td>
            <td className="border px-4 py-2">Moderate</td>
          </tr>
          <tr className="text-yellow-600 font-medium">
            <td className="border px-4 py-2">101 - 200</td>
            <td className="border px-4 py-2">Unhealthy</td>
          </tr>
          <tr className="text-orange-600 font-medium">
            <td className="border px-4 py-2">201 - 300</td>
            <td className="border px-4 py-2">Good</td>
          </tr>
          <tr className="text-red-600 font-medium">
            <td className="border px-4 py-2">Above 300</td>
            <td className="border px-4 py-2">Hazardous</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableIndicesCategories;
