import type { AppProps } from 'next/app'
import "../styles/scss/app.scss"
import "../styles/globals.css"


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
