import React, { useState } from "react";

export default function StudentForm({ initial, mode, onSubmit, onCancel }) {
  const [name, setName] = useState(initial.name || "");
  const [section, setSection] = useState(initial.section || "");
  const [marks, setMarks] = useState(initial.marks || "");
  const [grade, setGrade] = useState(initial.grade || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, section, marks, grade });
  };

  return (
    <div className="card">
      <h2>{mode === "add" ? "Add Student" : "Edit Student"}</h2>

      <form onSubmit={handleSubmit}>
        <input value={name} placeholder="Name" onChange={e => setName(e.target.value)} />
        <input value={section} placeholder="Section" onChange={e => setSection(e.target.value)} />
        <input value={marks} placeholder="Marks" type="number" onChange={e => setMarks(e.target.value)} />
        <input value={grade} placeholder="Grade" onChange={e => setGrade(e.target.value)} />

        <button type="submit">Save</button>
        <button onClick={onCancel} style={{ background: "#999", marginLeft: 10 }}>Cancel</button>
      </form>
    </div>
  );
}
