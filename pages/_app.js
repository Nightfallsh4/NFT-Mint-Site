import { MoralisProvider } from 'react-moralis'
import '../styles/globals.css'
import Head from "next/head"
import Header from "../components/Header"

function MyApp({ Component, pageProps }) {
  return (
  <MoralisProvider initializeOnMount={false}>
  <div className="p-20 ">
  <Head>
				<title>Panda Marketplace</title>
				<meta
					name="description"
					content="A panda themed marketplace for NFTs"
				/>
				<link rel="icon" href="/panda.jpeg" />
			</Head>
      <Header />
    <Component {...pageProps} />
  </div>
  </MoralisProvider>
  )
}

export default MyApp
