// import AllBlogContextProvider from './AllBlogContext'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    {/* <AllBlogContextProvider> */}
    <Navbar />
    <Component {...pageProps} />
    {/* </AllBlogContextProvider> */}
    </>
  )
}

export default MyApp
