import "../styles/globals.css"
import Head from "next/head"
import Footer from "../components/Footer"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/nfimg.png" />
        <link rel="apple-touch-icon" href="/nfimg.png" />
      </Head>
      <div className="app-root">
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
