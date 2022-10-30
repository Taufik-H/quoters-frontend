// For development using dev turbo
// import 'styles/globals.css'
// For production or using normal dev
import 'styles/tailwind.css'
import type { AppProps } from 'next/app'
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
