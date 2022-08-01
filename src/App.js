import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './/About';
import Catalog from './Catalog';
import Delivery from './Delivery';
import Answer from './Answer';
import Contact from './Contact';
import logo from './logotip-red.jpg';
import CartFavor from './Components/Cart/CartFavor'


function App() {
  return <Router>
  <nav className='nav-main'>
      <Link to = "/" className='link'> <img src={logo} width='100px' alt='logo'/></Link>
      <Link to = "/about" className='link'> О нас</Link>
      <Link to = "/catalog" className='link'>Каталог</Link>
      <Link to = "/delivery" className='link'>Доставка и оплата</Link>
      <Link to = "/answer" className='link'>Вопрос - ответ</Link>
      <Link to = "/contact" className='link'>Контакты</Link>
      <Link to = "/favorite" className='link'>Избранное</Link>
      <Link to = "/contact" className='link'><div className='contact-tel'><a className='tel' href='tel:+791000099988'>8 (910) 000 999 88</a>
      <p className='work'>Ежедневно с 9:00 до 19:00</p></div></Link>

  </nav>
  <Routes>
    <Route path = "/" element = {<About/>}/>       
    <Route path = "/about" element = {<About/>}/>       
    <Route path = "/catalog" element = {<Catalog/>}/>
    <Route path = "/delivery" element = {<Delivery/>}/>
    <Route path = "/answer" element = {<Answer/>}/>
    <Route path = "/contact" element = {<Contact/>}/>
    <Route path = "/favorite" element = {<CartFavor/>}/>
  </Routes>

  </Router>
}

export default App;
