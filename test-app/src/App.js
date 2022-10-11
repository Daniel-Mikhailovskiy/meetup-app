import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username}
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
