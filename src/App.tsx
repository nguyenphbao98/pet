import './App.css'
import About from './components/AboutComponent'
import Header from './components/HeaderComponent'
import Home from './components/HomeComponent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFoundComponent'

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
