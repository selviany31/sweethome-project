import React from "react";
import { FaEllipsisV } from "react-icons/fa";

export default function Tables({ name, date }) {
  return (
    <table className="setting-table">
      <thead className="setting-table-head">
        <tr>
          <td>{name}</td>
          <td>{date}</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Living Room</td>
          <td>28 January 2021, 09:00 AM</td>
          <td>
            <FaEllipsisV className="setting-table-icon" />
          </td>
        </tr>
        <tr>
          <td>Dining Room</td>
          <td>28 January 2021, 09:00 AM</td>
          <td>
            <FaEllipsisV className="setting-table-icon" />
          </td>
        </tr>
        <tr>
          <td>Bedroom</td>
          <td>28 January 2021, 09:00 AM</td>
          <td>
            <FaEllipsisV className="setting-table-icon" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
