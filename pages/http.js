import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { formatUserName } from '../src/utils';

export default function Http() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    let mounted = true;

    const getUsers = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      if (mounted) {
        setUsers(response.data);
      }
    };

    getUsers();

    return () => { mounted = false; }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pagina con ajax</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {users.length ? (
          <ul data-testid="user-list">
            {users.map(user => (
              <li key={user.id} className="user" data-testid="user-item">
                <span>{user.name}</span> (<span>{formatUserName(user.username)}</span>)
              </li>
            ))}
          </ul>
        ) : (
          <div>Loading users...</div>
        )}
      </main>
    </div>
  )
}