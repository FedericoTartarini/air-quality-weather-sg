import React from "react";

function TableIndicesCategories({ index }) {
  return (
    <div className="flex mx-auto justify-center py-3">
      <table className="table-auto text-center">
        <thead>
          <tr>
            <th className="px-4 py-1">{index}</th>
            <th className="px-4 py-1">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="font-medium" style={{ color: "#2ca02c" }}>
            <td className="border px-4 py-1">0 - 50</td>
            <td className="border px-4 py-1">Good</td>
          </tr>
          <tr className="font-medium" style={{ color: "#1f77b4" }}>
            {" "}
            <td className="border px-4 py-1">51 - 100</td>
            <td className="border px-4 py-1">Moderate</td>
          </tr>
          <tr className="font-medium" style={{ color: "#fcc105" }}>
            <td className="border px-4 py-1">101 - 200</td>
            <td className="border px-4 py-1">Unhealthy</td>
          </tr>
          <tr className="font-medium" style={{ color: "#ff7f0e" }}>
            <td className="border px-4 py-1">201 - 300</td>
            <td className="border px-4 py-1">Very Unhealthy</td>
          </tr>
          <tr className="font-medium" style={{ color: "#d62728" }}>
            <td className="border px-4 py-1">Above 300</td>
            <td className="border px-4 py-1">Hazardous</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableIndicesCategories;
