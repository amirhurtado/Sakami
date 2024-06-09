import { Banner } from '../components/banner/Banner'
import { Header } from '../components/header/Header'
import './home.css'

export function Home() {

  return (
    <div className="home">
      <Header />
      <Banner />
    </div>
  )
}