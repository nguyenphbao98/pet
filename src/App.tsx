import './App.css'
import About from './components/AboutComponent'
import Header from './components/HeaderComponent'
import Home from './components/HomeComponent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFoundComponent'
import PetDetail from './components/PetDetailComponent'

function App() {
  const defaultPetProps = {
    id: 0,
    name: '',
    status: '',
    category: {
      id: 0,
      name: '',
    },
  }

  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/pet/:id' element={<PetDetail {...defaultPetProps} />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
