import { createContext, useState } from 'react';
import './App.css';
import Carts from './COMPONENT/Carts';
import Home from './COMPONENT/Home';
import Addcart from './COMPONENT/Addcart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './COMPONENT/Home.css'
import './COMPONENT/Carts.css'
import './COMPONENT/Addcart.css'

const sample=createContext()
function App() {
  const [product, setproduct] = useState([])
  const [serch, setserch] = useState("")
  const [count, setcount] = useState(0)
  const [addpro, setaddpro] = useState([])

  return (
    <div>
      <sample.Provider value={{product, setproduct,serch, setserch,count, setcount,addpro, setaddpro}}>
       <BrowserRouter>
        <Home/>
       <Routes>
       <Route path='/' element={<Carts/>} />
        <Route path='/addcart' element={<Addcart/>} />
      </Routes>
     </BrowserRouter> 
     </sample.Provider>
    </div>
  );
}

export default App;
export {sample}