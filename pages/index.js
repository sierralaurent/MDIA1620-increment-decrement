import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState(0);

  return (
    <div >
      <div>{number}</div>
      <button onClick={() => setNumber(number + 1)}>increment</button>
      <button onClick={() => setNumber(number - 1)}>decrement</button>
    </div>
  )
}
