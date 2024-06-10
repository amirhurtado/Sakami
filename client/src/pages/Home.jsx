import { Banner } from '../components/banner/Banner'
import { Header } from '../components/header/Header'
import { MenuDishes } from '../components/menuDishes/menuDishes'
import './home.css'

export function Home() {

  return (
    <div className="home">
      <Header />
      <Banner />
      <MenuDishes />
    </div>
  )
}