import React, { useState } from "react";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";
import { getStudents, addStudent, deleteStudent, updateStudent } from "./services/studentService";

export default function App() {
  const [students, setStudents] = useState([]);
  const [mode, setMode] = useState("list");
  const [selected, setSelected] = useState(null);

  const load = () => {
    getStudents().then(data => setStudents(data));
  };

  const add = () => {
    setSelected(null);
    setMode("add");
  };

  const edit = (stud) => {
    setSelected(stud);
    setMode("edit");
  };

  const view = (stud) => {
    setSelected(stud);
    setMode("details");
  };

  const remove = (id) => {
    deleteStudent(id).then(() => alert("Deleted successfully"));
  };

  const save = (data) => {
    if (mode === "add") {
      addStudent(data).then(() => alert("Student added"));
    } else {
      updateStudent(selected.id, data).then(() => alert("Updated successfully"));
    }
    setMode("list");
  };

  return (
    <div className="container">
      {mode === "list" && (
        <StudentList
          students={students}
          onLoad={load}
          onAdd={add}
          onEdit={edit}
          onDelete={remove}
          onView={view}
        />
      )}

      {mode === "add" && (
        <StudentForm
          initial={{}}
          mode="add"
          onSubmit={save}
          onCancel={() => setMode("list")}
        />
      )}

      {mode === "edit" && (
        <StudentForm
          initial={selected}
          mode="edit"
          onSubmit={save}
          onCancel={() => setMode("list")}
        />
      )}

      {mode === "details" && (
        <StudentDetails
          student={selected}
          onBack={() => setMode("list")}
        />
      )}
    </div>
  );
}
