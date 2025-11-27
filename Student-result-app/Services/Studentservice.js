export const getStudents = () =>
  fetch("http://localhost:3001/students").then(res => res.json());

export const addStudent = (data) =>
  fetch("http://localhost:3001/students", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

export const deleteStudent = (id) =>
  fetch(`http://localhost:3001/students/${id}`, { method: "DELETE" });

export const updateStudent = (id, data) =>
  fetch(`http://localhost:3001/students/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
