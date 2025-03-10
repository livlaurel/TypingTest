import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home.tsx';
import About from './pages/about.tsx';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/CalmKeys" element={<Home />} />
        <Route path="/CalmKeys/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;