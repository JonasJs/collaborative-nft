import Link from 'next/link'
import Layout from '../components/Layout';

import styles from "../styles/pages/Home.module.css";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>

    <div className={styles.artBoard}>
      <div id="canvas-container">
        <table id="pixel-canvas"></table>
      </div>
    </div>
  </Layout>
)

export default IndexPage
