"use client"

import styles from './page.module.css'
import ExampleClient from '@/components/ExampleClient'

export default function Home() {
  console.log("Where do I render?")

  return (
    <main className={styles.main}>
      <h2>Welcome!</h2>

      <ExampleClient />
    </main>
  )
}
