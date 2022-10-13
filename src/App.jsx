import './App.css'
import Navbar from './Navbar/Navbar'
import ContactForm from './Contact/ContactForm'
import Home from './Home/Home'

function App() {
  let component
  switch (window.location.pathname) {
    case "/contact":
      component = <ContactForm />
      break;
    case "/home":
      component = <Home />
      break;
  }
  return (
    <div className="App">
      <Navbar />
      {component}
    </div>
  )
}

export default App
