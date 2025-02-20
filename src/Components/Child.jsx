import React from 'react';

const Child = (props) => {
  const user = {
    name: "Pavithra",
    email: "egpavithra07@gmail.com"
  };

  const onClickevent = () => {
    props.sendData(user); // Send the user data back to the parent (App)
  };

  return (
    <div>
      <button onClick={onClickevent}>
        Send Data
      </button>
    </div>
  );
}

export default Child;
