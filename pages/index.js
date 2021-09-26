import Head from 'next/head'
import Image from 'next/image'
import BannerCarousel from '../Components/Banner'
import FirstPartHomme from '../Components/FirstPartHomme'
import FooterTop from '../Components/FooterTop'
import NavWithLogo from '../Components/Navbar'
import SecondPartHome from '../Components/SecondPartHome'
import ThirdPartHome from '../Components/ThirdPartHome'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="index">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="rmd974 home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavWithLogo/>
      <BannerCarousel/>
      <h1>RMD974</h1>
      <FirstPartHomme/>
      <h2>Nos avantages</h2>
      <SecondPartHome/>
      <ThirdPartHome/>
      <FooterTop/>

    </div>
  )
}
