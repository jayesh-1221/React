import React, { useContext } from 'react';
import UserContext from '../Context/userContext';

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <h3>Welcome, {user.username}!</h3>
      ) : (
        <h3>Please log in</h3>
      )}
    </div>
  );
}

export default Profile;
