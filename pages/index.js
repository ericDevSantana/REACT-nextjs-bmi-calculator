import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import CopyrightIcon from '@material-ui/icons/Copyright';

export default function Home() {
  const [info, setInfo] = useState({
    height: "",
    weight: ""
  });

  const [description, setDescription] = useState("");
  const [bmi, setBMI] = useState("");

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

      setDescription("Your BMI is: ");
      calculateBMI(info.height, info.weight);
    
    event.preventDefault();
  }

  function calculateBMI(height, weight) {
    const h = Number(height);
    const w = Number(weight);

    setBMI((w / Math.pow(h, 2)).toFixed(2));
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
          {description}<br/>
          {bmi}
        </p>

        <div className={styles.grid}>

          <form name="form" onSubmit={handleSubmit}>
            {/* Height entry */}
            <label>
              <h1>Enter your height:</h1>
            </label>
            <input className={styles.height} onChange={handleChange} value={info.height} type="text" pattern="^[\d]*[.]?[\d]+$" name="height" placeholder="1.80 m" size="50" required></input>
  
            {/* Weight entry */}
            <label>
              <h1>
                Enter your weight:
              </h1></label>
            <input className={styles.height} onChange={handleChange} value={info.weight} type="text" pattern="^[\d]*[.]?[\d]+$" name="weight" placeholder=" 100 kg" size="50" required></input><br /><br /><br />

            {/* Calculate button */}
            <button className={styles.calcBtn} type="submit">Calculate BMI</button>
          </form>


        </div>
      </main>

      <footer className={styles.footer}>
        <CopyrightIcon />Copyright 2020
      </footer>
    </div>
  )
}
