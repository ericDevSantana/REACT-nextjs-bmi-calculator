import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState} from 'react'

export default function Home() {
  const [info, setInfo] = useState({
    height: "",
    weight: ""
  });

  const [description, setDescription] = useState("Calculate your BMI");

  function handleChange(event) {
    const { value, name } = event.target;

    setInfo((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  function handleSubmit(event) {
    setDescription("This is your BMI:")
    event.preventDefault()
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>BMI Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          BMI Calculator
        </h1>

        <p className={styles.description}>
          {description}
        </p>

        <div className={styles.grid}>

          <form onSubmit={handleSubmit}>
            {/* Height entry */}
            <label>
              <h1>Enter your height:</h1>
            </label>
            <input className={styles.height} onChange={handleChange} value={info.height} type="text" name="height" placeholder="1.80 cm" size="50"></input>
  
            {/* Weight entry */}
            <label>
              <h1>
                Enter your weight:
              </h1></label>
            <input className={styles.height} onChange={handleChange} value={info.weight} type="text" name="weight" placeholder=" 100 kg" size="50"></input><br /><br />

            {/* Calculate button */}
            <button className={styles.calcBtn} type="submit">Calculate BMI</button>
          </form>


        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
