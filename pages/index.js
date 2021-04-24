import Head from 'next/head';
import Prompt from '../components/prompt/prompt';
import Header from '../components/header/header';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shivam Sh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.welcome}>
          <h1 className={styles.title}>
            Hey There<span className={styles.accent}>,</span>
            <br />
            I’m Shivam
          </h1>

          <p className={styles.description}>
            <span className={styles.line}>
              I’m a UWaterloo student in
            </span>
            <span className={styles.line}>Systems Design Engineering</span>
            <span className={styles.line}>
              I spend a lot of time on side projects
            </span>
            <span className={styles.line}>and sometimes I post them here</span>
          </p>
        </div>
      </main>

      <div className={styles.typing}>
        <p>
          <span className={styles.bash}>{'> '}</span>
          <Prompt/>
        </p>
      </div>
    </div>
  );
}
