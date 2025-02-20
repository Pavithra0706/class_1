import React, { useState } from 'react'; 
import Child from './Components/Child'; 

function App() {
  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  const sendData = (user) => {
    setUser(user); 
  };

  return (
    <div className="App">
      <Child sendData={sendData} /> 
      <div>
        <strong>{user.name}</strong>
        <hr />
        <strong>{user.email}</strong>
      </div>
    </div>
  );
}

export default App;
