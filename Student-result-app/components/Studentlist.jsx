import React from "react";

export default function StudentList({ students, onLoad, onAdd, onEdit, onDelete, onView }) {
  return (
    <div className="card">
      <h2>Student Result List</h2>

      <button onClick={onLoad}>Load Students</button>
      <button onClick={onAdd} style={{ marginLeft: 10 }}>Add Student</button>

      <table className="table">
        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.section}</td>
              <td>{s.marks}</td>
              <td>{s.grade}</td>
              <td><button onClick={() => onEdit(s)}>Edit</button></td>
              <td><button onClick={() => onDelete(s.id)}>Delete</button></td>
              <td><button onClick={() => onView(s)}>View</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
