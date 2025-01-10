import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(1);
  const [users, setUsers] = useState([]);

  async function SendPhoto() {
    const response = await fetch(`https://randomuser.me/api?page=${number}`);
    const message = await response.json();
    const newUser = {
      name: message.results[0].name.first,
      image: message.results[0].picture.medium
    };
    setUsers([...users, newUser]);
    setNumber(c => c + 1);
  }

  function Information({ user }) {
    return (
      <div style={{ width: 120, height: 120, backgroundColor: "white", borderRadius: 10, margin: 30, color: "black"}}>
        <div><b>{user.name}</b></div>
        <div><img style={{borderRadius:"50%"}}src={user.image} alt={user.name} /></div> 
      </div>
    );
  }

  return (
    <div style={{}}>
      <div style={{ fontFamily: "cursive" }}> <h1>Random User</h1></div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {users.map((user, index) => (
          <Information key={index} user={user} />
        ))}
      </div>
      <button onClick={SendPhoto}>Add User</button>
    </div>
  );
}

export default App;
