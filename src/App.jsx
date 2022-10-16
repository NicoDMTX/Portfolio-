import './App.css'
import Navbar from './Navbar/Navbar'
import ContactForm from './Contact/ContactForm'
import Home from './Home/Home'
import { Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Home />} />
        <Route path='/contact' element={<ContactForm />} />
      </Routes>
    </div>
  )
}

export default App
