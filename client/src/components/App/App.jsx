import { Home } from '../../pages/Home'
import './app.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes> 
    </BrowserRouter>
  )
}
