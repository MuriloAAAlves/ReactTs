
import './App.css'
import { BrowserRouter as  BrowserRouter, Routes, Route } from "react-router-dom";
import BotaoContador from './Components/CounterButton/BotaoContador'
import ListContainer from './Components/TodoList/ListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/Navbar'
import Home from './Components/Home';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/to-do-list' element={<ListContainer/>} />
          <Route path='/counter-button' element={<BotaoContador/>} />
        </Routes>
      </BrowserRouter>
        
   </div>     
  )
}

export default App
