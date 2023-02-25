import type { AppProps } from 'next/app'
import "../styles/scss/app.scss"
import "../styles/globals.css"
import MainLayout from '@/components/main-layout'


export default function App({ Component, pageProps }: AppProps) {
  return (
  <Component {...pageProps} />
  )
}
