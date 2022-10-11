import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }

  // function deleteUsers(id) {
  //   fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data, "deleted");
  //       setUsers(data);
  //     })
  //     .catch((err) => console.log(err));
  // }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username}
            <button onClick>
              Delete {user.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
