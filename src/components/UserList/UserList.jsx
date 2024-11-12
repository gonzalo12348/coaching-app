// components/UserList.js
import React, { useEffect, useState } from 'react';
import { firestore } from '../../auth/fireBaseConfig';
import { collection, getDocs } from 'firebase/firestore';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(firestore, 'users');
      const usersSnapshot = await getDocs(usersCollection);
      const usersList = usersSnapshot.docs.map(doc => doc.data());
      setUsers(usersList);
    };

    fetchUsers();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h3>Usuarios Registrados</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
