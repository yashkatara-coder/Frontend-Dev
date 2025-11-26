document.getElementById("register").onclick = async function () {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  const res = await axios.get(`http://localhost:3006/users?email=${email}`);
  if (res.data.length) {
    document.getElementById("msg").textContent = "Email already registered.";
    return;
  }

  await axios.post("http://localhost:3006/users", { name, email });
  document.getElementById("msg").textContent = "Registration successful.";
};
