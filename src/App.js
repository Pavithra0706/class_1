import React, { useState } from 'react'; // Combining both imports
import Child from './Components/Child'; // Ensure the path is correct

function App() {
  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  const sendData = (user) => {
    setUser(user); // Set the user data received from the child component
  };

  return (
    <div className="App">
      <Child sendData={sendData} /> {/* Pass the sendData function to the child */}
      <div>
        <strong>{user.name}</strong>
        <hr />
        <strong>{user.email}</strong>
      </div>
    </div>
  );
}

export default App;
