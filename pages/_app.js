import "../styles/globals.css"
import Footer from "../components/Footer"

export default function App({ Component, pageProps }) {
  return (
    <div className="app-root">
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
