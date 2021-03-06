import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { HelloMessage} from '../components/HelloMessage'
import { Button} from '../components/Button'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
      <hr />
      <HelloMessage name="hugos" />
      <hr />
      <Button title="Evento click" onClick={()=> console.log('aa')}  />
      <hr />
    </div>
  )
}