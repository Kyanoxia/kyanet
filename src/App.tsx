import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import NoPage from './pages/NoPage'
import VainDiscord from './components/VainDiscord'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/join" element={<VainDiscord inv="DVvGFXqpqH" col="#2b2b2b" />} />
          <Route path="/jointheaether" element={<VainDiscord inv="SPXeXhRHs5" col="#fcbacb" />} />
          /* Everything must precede NoPage Element! */
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
